import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import configureStore from './store/store';
import React, {useEffect} from 'react';
import {ActivityIndicator, Alert} from "react-native";
import {PersistGate} from 'redux-persist/es/integration/react';
import NetInfo from '@react-native-community/netinfo';

const {persistor, store} = configureStore();


export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    useEffect(()=> {
        const unsubscribe = NetInfo.addEventListener(connectionState => {
            if(!connectionState.isConnected){
                Alert.alert("Connection Error", "Network connection error")
            }
        });

        return ()=> {
            unsubscribe()
        }
    }, [])
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <PersistGate loading={<ActivityIndicator/>} persistor={persistor}>
                    <SafeAreaProvider>
                        <Navigation colorScheme={colorScheme}/>
                        <StatusBar/>
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        );
    }
}

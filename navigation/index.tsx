import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';
import AddNewUser from '../screens/AddNewUser';
import Details from '../screens/Details';
import UsersScreen from '../screens/Users';
import {RootStackParamList} from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={UsersScreen} options={{headerShown: false}}/>
            <Stack.Group screenOptions={{presentation: 'modal', headerShown: false}}>
                <Stack.Screen name="Details" component={Details}/>
                <Stack.Screen name="AddNewUser" component={AddNewUser}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}


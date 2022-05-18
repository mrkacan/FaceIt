import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as moviesAction from '../features/users/actions';
import ListView from "../components/ListView";
import {getUsersSelector} from "../features/users/selectors";
import {useNavigation} from "@react-navigation/native";

export default function Users() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {data, isLoading} = useSelector(getUsersSelector);
    useEffect(() => {
        dispatch(moviesAction.getUsers());
    }, [])

    const onUserAddPress = () => {
        navigation.navigate("AddNewUser")
    }

    return (
        <SafeAreaView style={styles.container}>
            <ListView data={data} onEndReached={() => dispatch(moviesAction.getUsers())}
                      isLoading={isLoading}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    textInput: {
        fontSize: 15
    },
    searchInputWrapper: {
        width: '100%',
        position: "relative",
        height: 50,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#105067',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    flatListContent: {
        marginTop: 20,
    }
});

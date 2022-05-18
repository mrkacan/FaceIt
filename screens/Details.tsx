import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {RootStackScreenProps} from '../types';
import {useSelector} from "react-redux";
import {getUserSelector} from "../features/users/selectors";
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import {useNavigation} from "@react-navigation/native";
import moment from "moment";


export default function Details({route}: RootStackScreenProps<"Details">) {
    const user = useSelector(getUserSelector(route.params?.id));
    const navigation = useNavigation();
    const age = Math.floor(moment(new Date()).diff(moment(user?.birthDate, "YYYY-MM-DD"), 'years', true))

    return <View>
        <Pressable onPress={navigation.goBack} style={styles.closeButton}>
            <FontAwesome
                name="close"
                size={25}
                color={"#000"}
            />
        </Pressable>

        <Text style={styles.title}>
            Details
        </Text>
        <Image source={{uri: user?.image}} style={styles.image}/>
        <Text style={styles.fullName}>{`${user?.firstName} ${user?.lastName}, ${age}yo`}</Text>
        <Text
            style={styles.address}>{`${user?.address.address}, ${user?.address.postalCode}, ${user?.address.city}`}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
    },
    fullName: {
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 24,
        alignSelf: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: "center",
        textAlign: "center",
        marginTop: 20,
        width: 150
    },
    address: {
        width: "90%",
        fontSize: 20,
        fontWeight: "500",
        marginTop: 24,
        alignSelf: "center",
        textAlign: "center"
    },
    closeButton: {
        position: "absolute",
        right: 10,
        top: 10,
        padding: 20,
        zIndex: 1
    },
});

import React from "react";
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {UserItem} from '../features/users/types';
import Item from "../components/Item";
import {getUsersSelector} from "../features/users/selectors";
import {useNavigation} from "@react-navigation/native";

const INITIAL_LOAD = 10;

type ListViewProps = {
    data: UserItem[];
}

const ListView: React.FC<ListViewProps> = ({data}) => {
    const navigation = useNavigation();
    const {isLoading} = useSelector(getUsersSelector);

    const onItemPress = (item: UserItem) => {
        navigation.navigate("Details", {id: item.id})
    }

    return (
        <>
            {
                isLoading ? <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator color={"#00a5e0"}/>
                </View> : null
            }
            <FlatList
                data={data}
                keyExtractor={item => `infinite_scroll_item_${item.id}`}
                initialNumToRender={INITIAL_LOAD}
                renderItem={({item}) => {
                    return <Item {...item} onPress={() => onItemPress(item)}/>
                }}
                contentContainerStyle={styles.flatListContent}
                numColumns={2}
            />
        </>
    );
}

const styles = StyleSheet.create({
    activityIndicatorWrapper: {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255,255,255,.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    flatListContent: {
        marginTop: 20,
        paddingBottom: 30
    }
});

export default ListView

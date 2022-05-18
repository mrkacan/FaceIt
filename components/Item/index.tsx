import React from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {UserItem} from "../../features/users/types";
import moment from "moment";

interface ItemProps extends UserItem {
    onPress: ()=> void;
}

const Item: React.FC<ItemProps> = ({
                                      firstName,
                                      birthDate,
                                      image,
                                      onPress
                                  }) => {
    const age = Math.floor(moment(new Date()).diff(moment(birthDate, "YYYY-MM-DD"), 'years', true))
    return (
        <TouchableOpacity onPress={onPress} style={styles.generalItemWrapper}>
            <ImageBackground source={{uri: image}} style={styles.itemWrapper}>
                <Text style={styles.itemText}>
                    {`${firstName}, ${age}`}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}
export default Item;

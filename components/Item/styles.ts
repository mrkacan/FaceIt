import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    itemText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#FFFFFF"
    },
    generalItemWrapper: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "#00a5e0",
        overflow: "hidden"
    },
    itemWrapper: {
        flex: 1,
        padding: 10,
        height: 150,
        backgroundColor: '#696969',
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
});

export default styles;

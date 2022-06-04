import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        marginVertical: 5,
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 5
    },
    imageContainer:{
        flex: 2,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer:{
        flex: 5,
        justifyContent: 'space-around',
        paddingHorizontal: 4,
        paddingVertical: 7,
    },
    image:{
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 50,
    }
});

export default styles;
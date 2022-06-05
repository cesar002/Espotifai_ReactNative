import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 100,
        resizeMode: 'cover',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    body: {
        flex: 1.3,
        marginVertical: 15,
        paddingHorizontal: 30,
    },
    text: {
        marginTop: 20,
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default styles;
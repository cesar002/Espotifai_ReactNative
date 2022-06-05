import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginVertical: 1,
    },
    textContainer: {
        width: '100%',
        height: 50,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    textLabel: {
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize: 20,
        color: 'white',
    },
    textInput:{
        width: '100%',
        height: '100%',
        color: 'white',
        paddingHorizontal: 20,
        fontSize: 18,
    },
    errorText: {
        marginHorizontal: 30,
        color: '#F1948A',
        marginTop: 5,
        fontSize: 18
    },
})

export default styles;
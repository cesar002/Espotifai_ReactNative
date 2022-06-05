import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        marginVertical: 5,
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 5,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 30,
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
        paddingHorizontal: 7,
        paddingVertical: 7,
    },
    image:{
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 50,
    },
    textTitulo:{
        color: 'white',
        fontSize: 16,
    },
    textSubtitulo: {
        color: 'white',
        fontSize: 14,
        marginVertical: 10,
    },
    textNota: {
        color: 'white',
        fontSize: 12,
        marginVertical: 10,
    },
});

export default styles;
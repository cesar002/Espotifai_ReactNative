import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containter:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 20,
        resizeMode: 'cover'
    },
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    titulo:{
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
        zIndex: 1,
        textAlign: 'center',
    },
    subTitulo: {
        fontSize: 20,
        textAlign: 'center',
        zIndex: 1,
        color: 'white',
    },
});

export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    contentFav: {
        justifyContent:'center',
        alignItems: 'center',
        height: 60,
        width: '100%',
        marginTop: 10
    },
    favIcon: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boton:{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagenMusic:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode:'cover',
    },
    textTitulo: {
        fontSize: 25,
        color: 'white',
        marginVertical: 20,
    },
    content:{
        width: '100%', height: 120, backgroundColor: 'rgba(0,0,0,0.4)', 
        marginVertical: 10, paddingHorizontal: 20, paddingVertical: 10,
        justifyContent: 'space-around', alignItems: 'center', borderRadius: 20,
        marginTop: 10,
    },
    textArtista:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    textAlbum: {
        color: 'white',
        fontSize: 20,
    }
});

export default styles;
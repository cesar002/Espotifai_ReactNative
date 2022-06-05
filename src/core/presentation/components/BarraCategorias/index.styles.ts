import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        marginBottom: 10,
    },
    scrollView: {
        width: '100%',
        height: '100%',
    },
    scrollViewContent: {
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    categoriaItemContainer: {
        height: 40,
        paddingVertical: 3,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        overflow: 'hidden',
        borderColor: '#F5F5F5',
        borderWidth: 1.5,
    },
    categoriaItemContainerSelected:{
        height: 40,
        paddingVertical: 3,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        overflow: 'hidden',
        borderColor: 'rgba(74, 35, 90, 0.7)',
        backgroundColor: 'rgba(74, 35, 90, 0.7)',
        borderWidth: 1.5,
    },
    textSelected: {
        color: '#F5F5F5',
        fontSize: 15,
        fontWeight: 'bold'
    },
    text: {
        color: '#F5F5F5',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default styles;
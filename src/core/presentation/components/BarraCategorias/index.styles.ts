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
        backgroundColor: 'pink',
        marginHorizontal: 5,
        overflow: 'hidden',
    },
});

export default styles;
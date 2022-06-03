import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        borderRadius: 15,
        paddingHorizontal: 10,
        height: 45,
        flexDirection: 'row',
    },
    textInput: {
        width: '100%',
        height: '100%',
    },
    iconoContainer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 8,
    },
    cancelarContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
    },
    headerContent:{
        flex: 1,
        height: 200,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    textTitle:{
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white',
    },
    textSubTitle:{
        fontSize: 25,
        color: 'white',
    },
    formContainer: {
        paddingHorizontal: 20,
    },
    inputSection:{
        marginTop: 25,
    }
});

export default styles;
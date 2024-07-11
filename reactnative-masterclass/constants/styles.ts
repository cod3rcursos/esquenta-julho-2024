import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    centralizado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: '80%',
    },
    inputError: {
        borderColor: 'red',
    },
})

export default styles

import { StyleSheet, Text, View } from 'react-native'

export default function Logo() {
    return (
        <View>
            <Text style={styles.primario}>SPACE QUIZ</Text>
            <Text style={styles.segundario}>Perguntas de outro mundo!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    primario: {
        fontFamily: 'SOLARSPACEDEMO-Regular',
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    },
    segundario: {
        fontFamily: 'SPACEMISSION',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
})

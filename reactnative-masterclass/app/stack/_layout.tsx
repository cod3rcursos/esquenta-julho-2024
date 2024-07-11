import { Stack } from 'expo-router'

export default function Layout(props: any) {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ title: 'Inicial' }} />
        </Stack>
    )
}

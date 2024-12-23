import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useColorScheme } from 'react-native'
import { theme } from '../styles/theme'

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const colors = theme.colors[colorScheme === 'dark' ? 'dark' : 'light']

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: colors.background,
          }
        }}
      />
    </SafeAreaProvider>
  )
} 
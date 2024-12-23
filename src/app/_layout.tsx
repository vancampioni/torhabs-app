import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useColorScheme } from 'react-native'
import { theme } from '@/styles/theme'
import { useEffect, useState } from 'react'
import { SplashScreen } from '@/components/splash'
import { View } from 'react-native'

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const colors = theme.colors[colorScheme === 'dark' ? 'dark' : 'light']
  const [isReady, setIsReady] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isReady) {
    return (
      <View style={{ flex: 1 }}>
        <SplashScreen onAnimationComplete={() => setIsReady(false)} />
      </View>
    )
  }

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
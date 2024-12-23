import { View, Text, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  const colorScheme = useColorScheme()

  return (
    <SafeAreaView className={`flex-1 ${colorScheme === 'dark' ? 'bg-dark-background' : 'bg-light-background'}`}>
      <View className="flex-1 items-center justify-center">
        <Text className={`text-xl font-bold ${colorScheme === 'dark' ? 'text-dark-primary' : 'text-light-primary'}`}>
          Bem-vindo ao seu app Expo!
        </Text>
      </View>
    </SafeAreaView>
  )
} 
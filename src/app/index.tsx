import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-bold text-text">
          Bem-vindo ao seu app Expo!
        </Text>
      </View>
    </SafeAreaView>
  )
} 
import { View, Image } from 'react-native'
import Animated, { 
  FadeIn,
  FadeOut
} from 'react-native-reanimated'

interface SplashScreenProps {
  onAnimationComplete?: () => void
}

export function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  return (
    <Animated.View 
      entering={FadeIn.duration(2000)}
      exiting={FadeOut.duration(2000)}
      onLayout={onAnimationComplete}
      className="flex-1 items-center justify-center bg-[#333333]"
    >
      <Image
        source={require('assets/logo-completa-fundo-escuro.png')}
        className="w-64 h-64"
        resizeMode="contain"
      />
    </Animated.View>
  )
} 
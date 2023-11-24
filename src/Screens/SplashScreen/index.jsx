import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

export const SplashScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <LottieView source={require("../../../assets/splashAnimada.json")}
                autoPlay
                loop={false}
                resizeMode='cover'
                onAnimationFinish={() => navigation.navigate('Login')}
            />
        </View>
    )
}

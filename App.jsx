import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartScreen from "./screens/StartScreen";
import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import MainGameScreen from "./screens/MainGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function App() {
    const [guessCount, setGuessCount] = useState(0)
    const [userNumber, setUserNumber] = useState('')
    const [isGameOver, setIsGameOver] = useState(false)
    const [fontsLoaded] = useFonts({
        'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
    const changeGameIsOver = (value) => {
        setIsGameOver(value)
        setGuessCount(0)
    }
    const changeUserNumber = (value) => {
        setUserNumber(value)
    }
    if (!fontsLoaded) {
        return <AppLoading/>
    }



    return <>
        <StatusBar style={'light'}/>
        <LinearGradient
            colors={['rgb(104,126,183)', 'rgba(0, 72, 255, 1)']}
            style={styles.container}
        >
            <ImageBackground style={styles.container} source={require("./assets/background.png")} resizeMode={'cover'}
                             imageStyle={styles.imageBackground}>
                <SafeAreaView style={styles.container}>
                    {isGameOver ? <GameOverScreen userNumber={userNumber} guessCount={guessCount} changeUserNumber={changeUserNumber}
                                                  changeIsGameOver={changeGameIsOver}/> : !(userNumber.length > 0) ?
                        <StartScreen changeUserNumber={changeUserNumber}/> :
                        <MainGameScreen setGuessCount={setGuessCount}   changeGameIsOver={changeGameIsOver} userNumber={userNumber}
                                        changeUserNumber={changeUserNumber}/>}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    </>
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'OpenSans',
        flex: 1,
    },
    imageBackground: {
        opacity: 0.15
    }
});

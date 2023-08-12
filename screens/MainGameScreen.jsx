import {Alert, FlatList, StyleSheet, Text, View} from "react-native";
import Title from "../Components/Title";
import GuessNumber from "../Components/GuessNumber";
import {useEffect, useState} from "react";
import CustomButton from "../Components/CustomButton";
import {AntDesign} from '@expo/vector-icons'
import GuessListItem from "../Components/GuessListItem";

const generateNumber = (min, max, userNumber) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min

    if (randomNumber === userNumber) {
        return generateNumber(min, max, userNumber)
    } else {
        return randomNumber
    }
}

let min = 1
let max = 100
export const setDefaultValue = () => {
    min = 1
    max = 100
}
const MainGameScreen = ({userNumber, changeUserNumber, changeGameIsOver, setGuessCount}) => {
    const random = generateNumber(min, max, userNumber)
    const [guess, setCurrentGuess] = useState(random)
    const [guessList, setGuessList] = useState([random])

    useEffect(() => {
        if (+userNumber === +guess) {
            Alert.alert('Success', "You win!", [{
                onPress: () => {
                    changeGameIsOver(true)
                    setGuessCount(guessList.length)
                    setDefaultValue()
                }
            }])
        }
    }, [guess])

    useEffect(() => {
        setDefaultValue()
    }, [])
    const guessPress = (guessText) => {
        if ((guessText === 'lower' && guess < userNumber) || (guessText === 'higher' && guess > userNumber)) {
            return Alert.alert('Wrong', "You lost!", [{
                onPress: () => {
                    changeGameIsOver(true)
                    setGuessCount(guessList.length)
                    setDefaultValue()
                }
            }])

        } else {
            if (guessText === 'lower') {
                max = guess
            } else {
                min = guess + 1
            }

            const random = generateNumber(min, max, userNumber)
            setCurrentGuess(random)
            setGuessList((list) => [random, ...list])
        }
    }


    return (
        <View>
            <Title> Opponent's Guess</Title>
            <GuessNumber>{guess}</GuessNumber>
            <View style={styles.guessWrapper}>
                <Text style={{
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginVertical: 10
                }}>Higher or Lower ?</Text>
                <View style={styles.buttonWrapper}>
                    <View style={styles.buttonWraper2}>
                        <CustomButton onPress={() => guessPress('higher')}>
                            <AntDesign name={'plus'} size={20}/>
                        </CustomButton>
                    </View>
                    <View style={styles.buttonWraper2}>
                        <CustomButton onPress={() => guessPress('lower')}>
                            <AntDesign name={'minus'} size={20}/>
                        </CustomButton>
                    </View>
                </View>
            </View>

            <View style={styles.guessListContainer}>
                <FlatList data={guessList} renderItem={listItem => <GuessListItem guessQueue={guessList.length - listItem.index} guessNumber={listItem.item} />}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        flexDirection: 'row'
    },
    buttonWraper2: {
        margin: 10,
        flex: 1
    },
    guessWrapper: {
        margin: 20,
        backgroundColor: "#0048ff",
        borderRadius: 12,
    },
    guessListContainer:{
        padding:16,
        height:'50%'
    }
})

export default MainGameScreen;
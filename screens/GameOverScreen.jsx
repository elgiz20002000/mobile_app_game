import React from 'react';
import {Image, Text, View, StyleSheet} from "react-native";
import CustomButton from "../Components/CustomButton";
import {setDefaultValue} from "./MainGameScreen";

const GameOverScreen = ({changeUserNumber, changeIsGameOver, guessCount, userNumber}) => {
    return <>
        <View style={styles.container}>
            <Text style={styles.textContainer}>Game over!</Text>
            <CustomButton onPress={() => {
                changeUserNumber('')
                setDefaultValue()
                changeIsGameOver(false)
            }}>Restart</CustomButton>
        </View>
        <View style={styles.imgContainer}>
            <Image style={styles.img} source={require('../assets/success.png')}/>
        </View>
        <Text style={styles.messageContainer}>
            <Text >Opponent's attempt count: <Text style={styles.number}>{guessCount}</Text> </Text>
            <Text >Number: <Text style={styles.number}>{userNumber}</Text></Text>

        </Text>
    </>
};

const styles = StyleSheet.create({
    container: {
        fontFamily: 'OpenSans',
        marginTop: 100,
        borderWidth: 4,
        borderRadius: 12,
        borderColor: 'white',
        marginHorizontal: 20,
        padding: 10
    },
    number:{
        color: 'black',
        fontWeight:'bold'
    },
    messageContainer: {
        paddingHorizontal: 20,
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    textContainer: {
        fontFamily: 'OpenSansBold',
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    imgContainer: {
        margin: 36,
        width: 300,
        height: 300,
        borderRadius: 200,
        borderColor: 'black',
        overflow: 'hidden',
        borderWidth: 3,

    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    }
})

export default GameOverScreen;
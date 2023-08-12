import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const GuessListItem = ({guessQueue, guessNumber}) => {
    return <View style={styles.listItemContainer}>
        <Text style={{fontWeight: 'bold'}}>#{guessQueue}</Text>
        <Text> <Text style={{fontWeight: 'bold'}}>Opponent's Guess:</Text> {guessNumber} </Text>
    </View>
};


const styles = StyleSheet.create({
    listItemContainer: {
        marginBottom:5,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: '50%',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default GuessListItem;
import CustomButton from "../Components/CustomButton";
import {Alert, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";
import Title from "../Components/Title";

const StartScreen = ({changeUserNumber}) => {
    const [inputText, setInputText] = useState('')
    const onConfirm = () => {
        const currentNumber = +inputText

        if(isNaN(currentNumber) || currentNumber <= 0 || currentNumber > 99) {
            Alert.alert('Invalid value', 'The value should be number and between of 99 and 0',[
                {text:'Got it'}
            ])
        } else  {
            changeUserNumber(currentNumber.toString())
        }
    }
    const onReset = () => {
        setInputText('')
    }

    return <>
        <View>
            <Title>User's guess</Title>
        </View>
        <View style={styles.inputContainer}>
            <TextInput value={inputText} onChangeText={(e) => setInputText(e)} style={styles.textInput}
                       maxLength={2}
                       keyboardType={'numeric'}
                       autoCapitalize={'none'}
                       autoCorrect={false}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonsItem}>
                    <CustomButton onPress={onReset}>Reset</CustomButton>
                </View>
                <View style={styles.buttonsItem}>
                    <CustomButton onPress={onConfirm}>Confirm</CustomButton>
                </View>
            </View>

        </View>
    </>
};

const styles = StyleSheet.create({
    inputContainer: {
        fontFamily:'OpenSans',
        alignItems:"center",
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#0048ff',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {height: 5},
        shadowRadius: 8,
    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        width: 50,
        textAlign: "center",
        color: 'white',
        marginVertical: 10,
        fontSize: 24,
        fontFamily:'OpenSansBold',
    },
    buttonsContainer:{
        fontFamily:'OpenSans',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    buttonsItem:{
        fontFamily:'OpenSans',
        flex:1,
        marginHorizontal:5
    }

})

export default StartScreen;
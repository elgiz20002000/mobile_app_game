import {StyleSheet, Text, View} from "react-native";

const GuessNumber = ({children}) => {
    return <View style={styles.container}>
        <Text style={styles.numberContainer}>{children}</Text>
    </View>
};


const styles = StyleSheet.create({
    container:{
        borderColor:'white',
        padding:20,
        marginHorizontal:40,
        borderWidth:4,
        borderRadius:12
    },
    numberContainer: {
        fontSize:30,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    }
})
export default GuessNumber;
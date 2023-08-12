import {StyleSheet, Text, View} from "react-native";

const Title = ({children}) => {
    return <>
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    </>
};

const  styles = StyleSheet.create({
    title:{
        fontFamily:'OpenSansBold',
        margin:20,
        fontSize:32,
        color:'white',
        textAlign:'center',
        padding:16,
        borderWidth:2,
        borderColor:'white'
    }
})

export default Title;
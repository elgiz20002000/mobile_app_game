import {Pressable, StyleSheet, Text, View} from "react-native";

const CustomButton = ({children, onPress}) => {
    return <>
        <Pressable onPress={onPress} style={({pressed}) => pressed ? {...styles.container,...styles.buttonPressed} : {...styles.container} }>
            <View>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    </>
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderRadius:20,
        padding:12,
        marginVertical:8
    },
    buttonPressed:{
        shadowOffset:{height:6, width:1},
        shadowRadius:8,
        shadowOpacity:0.6,
        shadowColor:'white',
        opacity:0.75
    },
    buttonText:{
        fontFamily:'OpenSansBold',
        textAlign:'center'
    }
})

export default CustomButton;
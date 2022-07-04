import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ButtonType ={
    label :string;
    colorCode: string;
}

const CustomButton :React.FC<ButtonType> =({label,colorCode}) =>{
    return(
        <View>
            <TouchableOpacity style={{
                 height:60,
                 margin:20,
                 borderWidth: 1,
                 borderRadius: 20,
                 justifyContent:'center',
                 alignItems:'center',
                 backgroundColor: colorCode,
            }}>
                <Text style={styles.buttonlogin1}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    buttonlogin1:{
        color: 'white',
        fontSize:20,
        fontWeight:'bold'
    }
});

export default CustomButton;
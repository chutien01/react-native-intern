import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

type CustomInput = {
    label: string;
    placeholder: string;
    isEmail?: boolean;
}

const CustomInput: React.FC<CustomInput> = ({ label, placeholder,isEmail}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textlabel}>
                {label}
            </Text>
            <TextInput style={styles.textip} placeholder={placeholder}></TextInput>
            {/* cach1 */}
                {/* {
                    label == 'Email' && <Text>Register phone number</Text>
                } */}
            {/* cach1 */}
            {
                isEmail && <Text style={{textAlign:'right', color:'red', textDecorationLine:'underline'}}>Register phone number</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 5
    },

    textlabel: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
    },
    textip: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10
    }
});

export default CustomInput;
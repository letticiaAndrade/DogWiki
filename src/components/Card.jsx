import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export const Card=(props)=> {
    return (
        <View >
            <Image
             source={props.image}   
            />
            <Text >
                {props.nome}
            </Text>
        </View>
    )   
};

const style = StyleSheet.create({
    text: {
        color: "#333333",
        fontSize: 16,
    },
    image:{
        borderRadius: 15,
        //width:
        // height:
        
    }
})

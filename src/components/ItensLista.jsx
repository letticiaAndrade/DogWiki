import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const ItensLista=(props)=>{
    return (
        <View>
            <TouchableOpacity onPress={props.onPress} >
                <Text style={{textAlign:'justify', alignSelf:'center', padding:4, fontSize:15, color:"#333333"}}>
                    {props.nome}</Text>
             </TouchableOpacity>
        </View>
    
    )   
};


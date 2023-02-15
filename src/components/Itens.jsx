import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ItensLista=(props)=>{
    return (
        <View>
            <TouchableOpacity onPress={props.onPress} >
                <Text style={{}}>
                    {props.nome}</Text>
             </TouchableOpacity>
        </View>
    
    )   
};

export default ItensLista;
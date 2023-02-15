import React from "react";
import { Text, ScrollView, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ItensLista from "./Itens";

const Lista=()=>{
    const aleatorizar= ()=>{
        //função que irá imprimir uma raça aleatória (mudança de screen)
        console.log("botão com icone de aleatorio pressionado");
    };
    return (
        <>
        <View style={{ width: 410, height: 30, marginTop: -320, flexDirection: 'row' }}>
            <Text style={{ paddingLeft: 15, paddingTop: 4, color: '#333333' }}>Raças populares</Text>
            <FontAwesome name="star" size={14} color={"#5E3A24"} style={{ paddingTop: 7.5, paddingLeft: 4 }}>
            </FontAwesome>

            <Text style={{ paddingLeft: 170, paddingTop: 4, color: '#333333' }}>Aleatório</Text>
            <FontAwesome.Button name="refresh" size={14} color="#5E3A24"
                backgroundColor={"white"} onPress={aleatorizar}>
            </FontAwesome.Button>
        </View>
        <View style={{height:100}}>
            <ScrollView showsVerticalScrollIndicator={false}  style={{ backgroundColor: '#FFA07A', width:400 }}>
                <ItensLista nome="VIRA-LATA" />
                <ItensLista nome="SHIH TZU"/>
                <ItensLista nome="YORKSHIRE"/>
                <ItensLista nome="POODLE"/>
                <ItensLista nome="GOLDEN RETRIEVER"/>
                <ItensLista nome="PINSCHER"/>
             </ScrollView>
        </View>
             
             </>

        
      )
};

export default Lista;
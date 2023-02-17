import React from "react";
import { Text, ScrollView, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {ItensLista} from "./Itens";

export const Lista=()=>{
    const aleatorizar= ()=>{
        //função que irá imprimir uma raça aleatória (mudança de screen de Home para Details)
        console.log("botão com icone de aleatorio pressionado");
    };
    return (
        <>
        <View style={{ width: 410, height: 30, marginTop: -300, flexDirection: 'row', marginBottom:7 }}>
            <Text style={{ paddingLeft: 15, paddingTop: 4, color: '#333333',fontSize:16}}>
                Raças populares</Text>
            <FontAwesome name="star" size={14} color={"#5E3A24"} style={{ paddingTop: 7.5, paddingLeft: 4 }}>
            </FontAwesome>

            <Text style={{ paddingLeft: 170, paddingTop: 4, color: '#333333' }}>Aleatório</Text>
            <FontAwesome.Button name="refresh" size={14} color="#5E3A24"
                backgroundColor={"white"} onPress={aleatorizar}>
            </FontAwesome.Button>
        </View>

        <View style={{height:100}}>
            <ScrollView showsVerticalScrollIndicator={false}  style={{ backgroundColor: '#FFA07A', elevation:5,shadowColor:'black' }}>
                <ItensLista nome="VIRA-LATA" />
                <ItensLista nome="SHIH TZU"/>
                <ItensLista nome="YORKSHIRE"/>
                <ItensLista nome="POODLE"/>
                <ItensLista nome="GOLDEN RETRIEVER"/>
                <ItensLista nome="PINSCHER"/>
             </ScrollView>
        </View>

        <View style={{flexDirection:'row',marginTop:190, marginBottom:-80,}}>
            <Text style={{color:"#333333",heigh:5, paddingLeft: 12,paddingRight: 5,fontSize:16}}>Raças em ordem alfabética</Text>
            <MaterialCommunityIcons name="alphabetical" size={24} color="#5E3A24" />
        </View>

        <View style={{height:100, marginTop:90}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor:"#FFA07A", elevation:5,shadowColor:'black'}}>
                <ItensLista nome ="GOLDEN RETRIEVER"/>
                <ItensLista nome ="PINSCHER"/>
                <ItensLista nome ="POODLE"/>
                <ItensLista nome ="SHIH TZU"/>
                <ItensLista nome ="VIRA-LATA"/>
                <ItensLista nome ="YORKSHIRE"/>
            </ScrollView>
        </View>      
        </>
      )
};


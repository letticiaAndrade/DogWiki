import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TopMenu = () =>{
    const pesquisar=()=> {
        console.log("Pressionou botão de pesquisar");
    };

    return (
        <View style={{width:500, height:500}}>
            <View style={{backgroundColor:'#788D6D', height: '10%', justifyContent: 'center', alignItems:'center'}}>
              <Text style={{color: '#333333', fontSize: 20}}>Aprendendo Sobre Cães</Text>
             </View>
        
            <View style={{}} >
                <View style={{backgroundColor: '#FFA07A',  width: '40%', height: '20%' ,elevation: 3, alignSelf: 'center',shadowColor: 'black', margin: 22, borderRadius: 10, flexDirection:'row'}}>
                    <TextInput style={{
                        paddingLeft: 23,
                        fontSize: 16,
                        color: "#333333",
                        paddingRight:23,
                    }} 
                         placeholder={"Digite o nome da raça..."} 
                     />
                     <FontAwesome.Button name="search" size={14} color={"#5E3A24"} backgroundColor={"white"} onPress={pesquisar} ></FontAwesome.Button>
                </View>
                
            </View>
        </View>
    )
};

 export default TopMenu;
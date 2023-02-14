import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TopMenu = () =>{
    return (
        <View style={{width:'100%', height:'100%'}}>
            <View style={{backgroundColor:'#788D6D', width:'100%', height: '10%', justifyContent: 'center', alignItems:'center'}}>
              <Text style={{color: '#333333', fontSize: 20}}>Aprendendo Sobre Cães</Text>
             </View>
        
            <View style={{}} >
                <View style={{backgroundColor: '#FFA07A',  width: '70%', height: '20%' ,elevation: 3, alignSelf: 'center',shadowColor: 'black', margin: 22}}>
                    <TextInput style={{
                        paddingLeft: 23,
                        fontSize: 16,
                        color: "#333333",
                    }} 
                         placeholder={"Digite o nome da raça..."}
                     />
                </View>
                
            </View>
        </View>
    )
};

 export default TopMenu;
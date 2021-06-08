import React from "react";
import { View, Text, Button, ImageBackground, Dimensions } from "react-native";
import Banner from '../../Shared/Banner'
var {width,height}=Dimensions.get('window')
const First = (props) => {
  return (
    <>
     <Banner />
    <ImageBackground style={{width:width/1.015, height:height/2.35,  transform: [{ rotate: '0.2deg' }]}} source={{uri:"https://image.freepik.com/free-vector/isometric-delivery-concept_23-2147682232.jpg"}}>
     <View style={{alignItems:"center", justifyContent:"center" , marginTop:133,}}> 
       <Button
    
        title=" Store Locator"
        color="black"
        onPress={() => props.navigation.navigate("Shop")}
      /> 
     </View> 
        </ImageBackground>
        </>
        
  );
};
export default First;

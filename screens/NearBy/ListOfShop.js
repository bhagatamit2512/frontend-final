
import React from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  Image,
  ScrollView
} from "react-native";

// var { width } = Dimensions.get("window");
const ListOfShop = ({image,title,addrees,contact,contact2}) => {
    return (
       
       <View style={styles.container}>
      <Image
        
        source={{
          uri: image,
        }}
        style={styles.image}
      />
       <View style={styles.card}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text>{addrees}</Text>
      <Text>Contact No.{contact} ,{contact2}</Text>
      
      </View>
     
      
    </View> 
   
    )
}
const styles=StyleSheet.create({
    container: {
    width:360,
    height: 430,
    padding: 10,
    borderRadius: 10,
    marginTop:5,
    marginBottom: 5,
    marginLeft: 10,
    
    backgroundColor: "white",
    
  },
  image: {
    width:340,
    height:330 ,
    backgroundColor: "transparent",
    position: "relative",
   
  },
  card: {
    marginBottom: 10,
    height:90,
    backgroundColor: "transparent",
  
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  
  },
   
})

export default ListOfShop

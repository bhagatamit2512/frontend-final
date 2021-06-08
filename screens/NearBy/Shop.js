// import React from "react";
// import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet,Button,ScrollView,TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import ListOfShop from "./ListOfShop";


export default function App({navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    
    return(
      text = JSON.stringify(location) &&
    <View>
    
        <Text style={{fontSize:24, fontWeight:'700',justifyContent:'center',marginTop:10,marginLeft:100,marginBottom:10}}> Near By Store</Text>
           <ScrollView> 
         <TouchableOpacity
        onPress={()=>navigation.navigate('Home')}
        >
          <ListOfShop title="Bhatia Store" image="https://static.toiimg.com/thumb/msid-81696162,width-1200,height-900,resizemode-4/.jpg" addrees="Near ABC Apartment" contact="8912312345" contact2="9087655431" />
          <ListOfShop title="aaa" image="https://lh3.googleusercontent.com/ZqvS60IYtjaHWf-spW7J-h2-JxN2SiAcDEtjDljqkkdfdquLJJCmQV6zQGbovElKqPlfOFnYyRyzwgsQM91wBwTllEHj=w1000" addrees="avsgvs" />
          <ListOfShop />
          <ListOfShop />
          <ListOfShop />
          <ListOfShop />
          <ListOfShop />
          <ListOfShop />
          <ListOfShop />
          <ListOfShop />
          <ListOfShop />
          
        </TouchableOpacity>
        </ScrollView>
    </View>
   
   )
  }

  return (
    <View
    // style={styles.container}
    >
      <Text
      // style={styles.paragraph}
      >
        {text}
      </Text>
    </View>
  );
}
// const Shop = () => {
//   return (
//     <View>
//       <Text>List of shop</Text>
//     </View>
//   );
// };

// export default Shop;
const styles=StyleSheet.create({

})
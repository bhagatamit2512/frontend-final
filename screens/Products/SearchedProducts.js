import { Content, Left, Body, ListItem, Thumbnail, Text } from "native-base";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
var { width } = Dimensions.get("window");

const SearchedProducts = (props) => {
  const { productsFiltered } = props;
  return (
    <Content style={{ width: width }}>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
          <ListItem
            onPress={() => {
              props.navigation.navigate("Product Detail", { item: item });
            }}
            key={item._id}
            avatar
          >
            <Left>
              <Thumbnail
                source={{
                  uri: item.image
                    ? item.image
                    : "https://www.pmindia.gov.in/wp-content/uploads/2021/12/Thumbnail-Pm-New-Photo.jpg",
                }}
              />
            </Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <View style={styles.container}>
          <Text style={{ alignSelf: "center" }}>No products matched</Text>
        </View>
      )}
    </Content>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchedProducts;

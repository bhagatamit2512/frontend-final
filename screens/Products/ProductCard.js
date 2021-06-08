import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import { connect } from "react-redux";
import Toast from "react-native-toast-message";
import * as actions from "../../Redux/Actions/cartActions";
import EasyButton from "../../Shared/StyledComponents/EasyButton";

var { width } = Dimensions.get("window");
const ProductCard = (props) => {
  const { name, price, image, countInStock } = props;
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{
          uri: image
            ? image
            : "https://www.pmindia.gov.in/wp-content/uploads/2021/12/Thumbnail-Pm-New-Photo.jpg",
        }}
        style={styles.image}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 10 ? name.substring(0, 10 - 3) + "..." : name}
      </Text>

      <Text style={styles.prices}>Rs.{price}</Text>

      {countInStock > 0 ? (
        <View style={{ marginBottom: 60 }}>
          <EasyButton
            primary
            medium
            onPress={() => {
              props.addItemToCart(props),
                Toast.show({
                  topOffset: 60,
                  type: "success",
                  text1: `${name} added to cart`,
                  text2: "go to cart to complete the order",
                });
            }}
          >
            <Text style={{ color: "white" }}>Add</Text>
          </EasyButton>
        </View>
      ) : (
        <Text style={{ marginBottom: 20, color: "red" }}>
          Currently Unavailable
        </Text>
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  prices: {
    fontSize: 20,
    color: "orange",
    marginTop: 10,
  },
});

export default connect(null, mapDispatchToProps)(ProductCard);

import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import { Image, Dimensions, StyleSheet, View, ScrollView } from "react-native";
var { width } = Dimensions.get("window");
const Banner = () => {
  const [bannerData, setBannerData] = useState([ "../assets/fruit.jpg",]);

  useEffect(() => {
    setBannerData([
     "https://image.freepik.com/free-photo/good-looking-woman-standing-front-vegetable-shelves-choosing-what-buy_342744-1117.jpg",
     "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
       "https://www.rachaelraymag.com/.image/t_share/MTYzOTY0NTAxODQwODk3NzYx/global-grocery-items-counter-ad0653ad.jpg",
       "https://image.freepik.com/free-photo/portrait-beautiful-young-asian-woman-smile-with-grocery-basket-from-supermarket-yellow-color-wall_74190-15313.jpg",
       "https://image.freepik.com/free-photo/woman-with-tablet-checking-shopping-cart-see-if-she-has-everything-she-needs-lunch_342744-1111.jpg",
       "https://image.freepik.com/free-photo/woman-pushing-shopping-cart-shelves-supermarket_342744-1128.jpg"
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 2 }}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={5}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  style={styles.image}
                  key={item}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;

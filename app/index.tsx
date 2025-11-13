import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
const Index = () => {
  return (
    <SafeAreaView style={styles.outerMostdiv}>
      <View style={styles.container}>
        <View style={styles.moreButton}>
          <Feather name="more-vertical" style={styles.vericleCss}  size={30} />
        </View>
        <Text style={styles.item}>sasdfasdf</Text>
        <Text style={styles.item}>sasdfasdf</Text>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  outerMostdiv: {
    backgroundColor: "#0B1014",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center", // centers text vertically on Android
    fontSize: 18,
  },
  uppterVerticle:{
    flex: 1, 
    justifyContent: "flex-end"
  },
  vericleCss:{
    color: "white"
  },
  moreButton:{
    margin: 20,
    flex: 1,
    flexDirection:"row", 
    justifyContent: "flex-end"
  }
});

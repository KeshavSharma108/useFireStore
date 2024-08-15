import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ gap: 20 }}>
        <View style={{ backgroundColor: "#680747" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("FireStore")}
          >
            <Text>FireStore</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    margin: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "#c3195d",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 30,
  },
});

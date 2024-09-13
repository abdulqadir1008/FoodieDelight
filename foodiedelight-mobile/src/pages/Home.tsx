import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require("../../assets/restaurant_bg.jpg")} 
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.8)"]}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>FOODIEDELIGHT</Text>
          <Text style={styles.subtitle}>
            Discover and Share Great Restaurants
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.addButton]}
              onPress={() => navigation.navigate("RestaurantRegistration")}
            >
              <Text style={styles.buttonText}>Add a Restaurant</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.viewButton]}
              onPress={() => navigation.navigate("RestaurantList")}
            >
              <Text style={styles.buttonText}>View Restaurants</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#E0E0E0",
    marginBottom: 40,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: "#FF6B6B",
  },
  viewButton: {
    backgroundColor: "#4ECDC4",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;

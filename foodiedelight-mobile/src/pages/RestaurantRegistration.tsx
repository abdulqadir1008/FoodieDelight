import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { RestaurantContext } from "../component/RestaurantContext";
import { BASE_URL, resolvePostApi } from "../component/ApiCall";
import { CreateRestaurantQuery } from "../graphQlqueries/GraphQlQueries";

const RestaurantRegistration = ({ navigation }: any) => {
  const { addRestaurant } = useContext(RestaurantContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [cuisine, setCuisine] = useState("");

  const handleSubmit = async () => {
    if (!name || !location) {
      Alert.alert("Error", "Name and Location are required.");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      Alert.alert("Error", "Please enter a valid 10-digit phone number.");
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    const newRestaurant = {
      id: Date.now(),
      // remove id if using with api call because it will be auto-generated in the db
      name,
      description,
      location,
      phoneNumber,
      email,
      cuisine,
    };

    try {
      addRestaurant(newRestaurant);
      //   resolvePostApi(BASE_URL, CreateRestaurantQuery(newRestaurant)); // use this method if using api call and comment this line addRestaurant(newRestaurant);
      setName("");
      setDescription("");
      setLocation("");
      setPhoneNumber("");
      setEmail("");
      setCuisine("");
      navigation.navigate("RestaurantList");
    } catch (err) {
      Alert.alert("Error", "Failed to add restaurant. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Restaurant</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        keyboardType="numeric"
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Cuisine"
        value={cuisine}
        onChangeText={setCuisine}
      />
      <Button title="Add Restaurant" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default RestaurantRegistration;

// import React, { useContext, useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   ActivityIndicator,
//   Dimensions,
//   TouchableOpacity,
// } from "react-native";
// import { fetchRestaurants } from "../component/ApiCall";
// import { RestaurantContext } from "../component/RestaurantContext";

// const { width } = Dimensions.get("window");

// const RestaurantList = () => {
//   const { restaurants, deleteRestaurant } = useContext(RestaurantContext);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function loadRestaurants() {
//       try {
//         const data = await fetchRestaurants();
//         // setRestaurants(data);
//       } catch (err) {
//         setError("Failed to load restaurants. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     setLoading(false);
//     // loadRestaurants();
//   }, []);

//   const renderHeader = () => (
//     <View style={styles.headerRow}>
//       <Text style={[styles.headerCell, { flex: 2 }]}>Name</Text>
//       <Text style={[styles.headerCell, { flex: 1 }]}>Cuisine</Text>
//       <Text style={[styles.headerCell, { flex: 2 }]}>Location</Text>
//       <Text style={[styles.headerCell, { flex: 1 }]}>Actions</Text>
//     </View>
//   );

//   const renderRestaurantItem = ({ item }:any) => (
//     <View style={styles.row}>
//       <Text style={[styles.cell, { flex: 2 }]} numberOfLines={1}>{item.name}</Text>
//       <Text style={[styles.cell, { flex: 1 }]} numberOfLines={1}>{item.cuisine}</Text>
//       <Text style={[styles.cell, { flex: 2 }]} numberOfLines={1}>{item.location}</Text>
//       <TouchableOpacity
//         style={[styles.cell, styles.deleteButton, { flex: 1 }]}
//         onPress={() => deleteRestaurant(item.id)}
//       >
//         <Text style={styles.deleteButtonText}>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#000" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {error ? (
//         <Text style={styles.error}>{error}</Text>
//       ) : restaurants.length === 0 ? (
//         <Text style={styles.message}>No restaurants registered yet.</Text>
//       ) : (
//         <FlatList
//           data={restaurants}
//           renderItem={renderRestaurantItem}
//           keyExtractor={(item) => item.id.toString()}
//           ListHeaderComponent={renderHeader}
//           stickyHeaderIndices={[0]}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f8f8",
//   },
//   headerRow: {
//     flexDirection: "row",
//     backgroundColor: "#3498db",
//     padding: 10,
//     marginBottom: 5,
//   },
//   headerCell: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 14,
//     textAlign: "left",
//   },
//   row: {
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderBottomColor: "#e0e0e0",
//     padding: 10,
//     backgroundColor: "white",
//   },
//   cell: {
//     fontSize: 14,
//     textAlign: "left",
//     paddingHorizontal: 5,
//   },
//   deleteButton: {
//     backgroundColor: "#e74c3c",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 5,
//   },
//   deleteButtonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   error: {
//     color: "red",
//     fontSize: 16,
//     textAlign: "center",
//     marginTop: 20,
//   },
//   message: {
//     fontSize: 16,
//     textAlign: "center",
//     marginTop: 20,
//     color: "#666",
//   },
// });

// export default RestaurantList;

import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { RestaurantContext } from "../component/RestaurantContext";
import { BASE_URL, resolvePostApi } from "../component/ApiCall";
import { GetAllRestaurantQuery } from "../graphQlqueries/GraphQlQueries";

const { width } = Dimensions.get("window");

const RestaurantList = () => {
  const { restaurants, deleteRestaurant } = useContext(RestaurantContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // async function loadRestaurants() {
    //   try {
    //     const data = await resolvePostApi(BASE_URL, GetAllRestaurantQuery());
    //     // setRestaurants(data);
    //   } catch (err) {
    //     setError("Failed to load restaurants. Please try again.");
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // loadRestaurants();
    // COMMENT OUT ABOVE CODE IF USING API CALL 
    setLoading(false);
  }, []);

  const renderRestaurantItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.restaurantName}>
          Restaurant Name:
          <Text style={{ fontWeight: "400" }}>{item.name}</Text>
        </Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Location:</Text> {item.location}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Phone:</Text> {item.phoneNumber}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Email:</Text> {item.email}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Cuisine:</Text> {item.cuisine}
        </Text>

        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Description:</Text> {item.description}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteRestaurant(item.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : restaurants.length === 0 ? (
        <Text style={styles.message}>No restaurants registered yet.</Text>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={renderRestaurantItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  cuisineTag: {
    backgroundColor: "#3498db",
    color: "white",
    padding: 5,
    borderRadius: 4,
    fontSize: 12,
  },
  cardBody: {
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  infoLabel: {
    fontWeight: "bold",
    color: "#333",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
});

export default RestaurantList;

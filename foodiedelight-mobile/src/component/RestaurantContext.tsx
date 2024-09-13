import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

interface Restaurant {
  id: number;
  name: string;
  description: string;
  location: string;
  phoneNumber: string;
  email: string;
  cuisine: string;
}

interface RestaurantContextType {
  restaurants: Restaurant[];
  addRestaurant: (restaurant: Restaurant) => void;
  deleteRestaurant: (id: number) => void;
}

// Provide default values
const defaultContextValue: RestaurantContextType = {
  restaurants: [], // Ensure default is an empty array
  addRestaurant: () => {},
  deleteRestaurant: () => {},
};

export const RestaurantContext = createContext<RestaurantContextType>(defaultContextValue);

export const RestaurantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]); // Initialize with empty array

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const savedRestaurants = await SecureStore.getItemAsync("restaurants");
        if (savedRestaurants) {
          const parsedRestaurants = JSON.parse(savedRestaurants);  // Parse the JSON string to an array
          setRestaurants(parsedRestaurants);
        }
      } catch (error) {
        console.error("Failed to load restaurants:", error);
      }
    };

    loadRestaurants();  // Ensure that this function call is awaited correctly in the useEffect
  }, []);

  useEffect(() => {
    const saveRestaurants = async () => {
      try {
        await SecureStore.setItemAsync("restaurants", JSON.stringify(restaurants));
      } catch (error) {
        console.error("Failed to save restaurants:", error);
      }
    };

    saveRestaurants();
  }, [restaurants]);

  const addRestaurant = (restaurant: Restaurant) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, restaurant]);
  };

  const deleteRestaurant = (id: number) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.filter((restaurant) => restaurant.id !== id)
    );
  };
  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant, deleteRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};

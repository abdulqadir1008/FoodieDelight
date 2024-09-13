import React, { createContext, useState, useEffect } from "react";

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
  restaurants: [],
  addRestaurant: () => {},
  deleteRestaurant: () => {},
};

export const RestaurantContext =
  createContext<RestaurantContextType>(defaultContextValue);

export const RestaurantProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(() => {
    // Load from localStorage on initialization
    const savedRestaurants = localStorage.getItem("restaurants");
    return savedRestaurants ? JSON.parse(savedRestaurants) : [];
  });

  useEffect(() => {
    // Save to localStorage whenever restaurants change
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
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
    <RestaurantContext.Provider
      value={{ restaurants, addRestaurant, deleteRestaurant }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

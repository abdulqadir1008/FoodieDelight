export const GetAllRestaurantQuery = () => {
  return `query GetAllRestaurants {
  restaurants {
    id
    name
    description
    location
    phone_number
    email
    cuisine
  }
}`;
};
export const CreateRestaurantQuery = (data: any) => {
  return `
      mutation CreateRestaurant {
        createRestaurant(data: {
          name: \`${data.name}\`
          description: \`${data.description || ""}\`
          location: \`${data.location}\`
          phone_number: \`${data.phone_number}\`
          email: \`${data.email}\`
          cuisine: \`${data.cuisine || ""}\`
        }) {
          id
          name
          description
          location
          phone_number
          email
          cuisine
        }
      }
    `;
};

export const DeleteRestaurantQuery = (id: string) => {
  return `
      mutation DeleteRestaurant {
        deleteRestaurant(id: \`${id}\`) {
          id
          name
        }
      }
    `;
};

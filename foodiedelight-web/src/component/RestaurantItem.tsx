const RestaurantItem = ({ restaurant }: any) => {
  return (
    <div style={styles.container}>
      <h3>{restaurant.name}</h3>
      <p>{restaurant.description}</p>
      <p>{restaurant.location}</p>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ddd",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
};

export default RestaurantItem;

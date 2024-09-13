import React, { useContext } from "react";
import { RestaurantContext } from "../component/RestaurantContext";

const RestaurantList: React.FC = () => {
  const { restaurants, deleteRestaurant } = useContext(RestaurantContext);

  //     // COMMENT OUT BELOW CODE IF USING API CALL
  //   const { restaurants, deleteRestaurant } = useContext(RestaurantContext);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     // async function loadRestaurants() {
  //     //   try {
  //     //     const data = await resolvePostApi(BASE_URL, GetAllRestaurantQuery());
  //     //     // setRestaurants(data);
  //     //   } catch (err) {
  //     //     setError("Failed to load restaurants. Please try again.");
  //     //   } finally {
  //     //     setLoading(false);
  //     //   }
  //     // }
  //     // loadRestaurants();
  //     setLoading(false);
  //   }, []);

  return (
    <div className="restaurant-list">
      <h2 className="text-2xl font-bold text-light mb-4">Restaurant List</h2>
      {restaurants.length === 0 ? (
        <div>
          <p className="text-light mb-3">No restaurants registered yet.</p>
          <a href="/">Go back to home page</a>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="border-1">
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Sr. no.</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Location</th>
                <th className="py-2 px-4 border-b">Phone Number</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Cuisine</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant, index) => (
                <tr key={restaurant.id} className="border-b">
                  <td className="py-2 px-4"> {index + 1}</td>
                  <td className="py-2 px-4">{restaurant.name}</td>
                  <td className="py-2 px-4">{restaurant.description}</td>
                  <td className="py-2 px-4">{restaurant.location}</td>
                  <td className="py-2 px-4">{restaurant.phoneNumber}</td>
                  <td className="py-2 px-4">{restaurant.email}</td>
                  <td className="py-2 px-4">{restaurant.cuisine}</td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => deleteRestaurant(restaurant.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;

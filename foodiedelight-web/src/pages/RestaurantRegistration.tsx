import { useContext, useState } from "react";
import "../component/MainCss.css";
import { RestaurantContext } from "../component/RestaurantContext";
import { useNavigate } from "react-router-dom";

const RestaurantRegistration = () => {
  const { addRestaurant } = useContext(RestaurantContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !location) {
      setError("Name and Location are required.");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
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

    addRestaurant(newRestaurant);
    //   resolvePostApi(BASE_URL, CreateRestaurantQuery(newRestaurant)); // use this method if using api call and comment this line addRestaurant(newRestaurant);
    setName("");
    setDescription("");
    setLocation("");
    setPhoneNumber("");
    setEmail("");
    setCuisine("");
    setError("");
    navigate("/RestaurantList");
  };

  return (
    <form className="restaurant-form" onSubmit={handleSubmit}>
      <h2>Add Restaurant</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="submit-button">
        Add Restaurant
      </button>
    </form>
  );
};

export default RestaurantRegistration;

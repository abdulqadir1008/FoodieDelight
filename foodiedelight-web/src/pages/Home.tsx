import Bg from "../assets/restaurant_bg.jpg";

const Home = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Welcome to FOODIEDELIGHT</h1>
        <a href="/RestaurantRegistration">
          Your one-stop solution for managing restaurants and menus.
        </a>
      </div>
    </div>
  );
};

export default Home;
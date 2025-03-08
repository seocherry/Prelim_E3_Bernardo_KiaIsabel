import React from "react";

const Home = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center p-5 rounded shadow-lg bg-light">
        <h1 className="welcome-text">Welcome user!👋</h1>
        <p className="fs-5 text-muted">
          Here, You can easily manage your profile, update your details, and
          switch between light and dark mode. Enjoy!
        </p>
      </div>
    </div>
  );
};

export default Home;

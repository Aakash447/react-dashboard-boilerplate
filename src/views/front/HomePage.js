import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      HomePage
      <Link to="/admin">Go To Admin</Link>
    </div>
  );
}

export default HomePage;

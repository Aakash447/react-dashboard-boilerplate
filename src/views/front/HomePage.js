import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <br />
      <Link to="/admin">Go To Admin</Link>
      <br />
      <br />

      <Link to="/test">Go To Test</Link>
    </div>
  );
}

export default HomePage;

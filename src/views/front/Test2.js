import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Test from "views/front/Test";

function Test2() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDrawerUp = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <Button onClick={toggleDrawerUp}>Left</Button>

      <Test sidebarOpen={sidebarOpen} toggleDrawerUp={toggleDrawerUp} />
    </div>
  );
}

export default Test2;

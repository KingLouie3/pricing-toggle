import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const Header = () => {
    const [IsEnabled, setIsEnabled] = useState(false)
  return (
    <>
      <div className="flex flex-col justify-center items-center text-">
        <h1 className="py-8">Our Pricing</h1>
        <div className="flex space-x-6 justify-around items-stretch">
          <span>Annually</span>
          <Switch
            checked={IsEnabled}
            onChange={setIsEnabled}
          >
          <span className="block bg-purple-700 rounded-full shadow h-8 w-20">
            <span className="block bg-red-700 shadow rounded-full h-full w-6/12"></span>
          </span>
          </Switch>
          <span>Monthly</span>
        </div>
      </div>
    </>
    // Annual and Monthly div below
  );
};

export default Header;

import React from "react";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

const Header = () => {
  const [enabled, setEnabled] = useState(false);

 

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="py-8 text-3xl font-bold bg">Our Pricing</h1>
        <div className="flex space-x-6 justify-around items-stretch">
          {/* <img src="/images/bg-top.svg" alt="" />
          <img src="/images/bg-bottom.svg" alt="" /> */}
          <span>Annually</span>
          <Switch checked={enabled} onChange={setEnabled}>
            <span className="block rounded-full shadow h-8 w-16 bg-gradient-to-l from-primary-test2 to-primary-test">
              <span
                className={`block translate-x-5 bg-primary-Very-Light-Grayish-Blue shadow rounded-full h-full w-6/12 ${enabled ? "bg-red-500" : "bg-blue-500"}`}
              ></span>
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

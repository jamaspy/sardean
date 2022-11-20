import React from "react";

const MenuItem = ({ name, price }) => {
  return (
    <div className="flex flex-row justify-between max-w-xs mb-2">
      <p className="mr-8">{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default MenuItem;

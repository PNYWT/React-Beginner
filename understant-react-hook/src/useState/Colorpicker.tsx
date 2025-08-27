import React, { use, useState } from "react";

const Colorpicker = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const colors: string[] = [
    "#FF5733", // แดงส้มสด
    "#33B5FF", // ฟ้า
    "#28A745", // เขียว
    "#FFC107", // เหลืองทอง
    "#8E44AD", // ม่วง
    "#FF69B4", // ชมพู
  ];

  const handleChangeColor = (color: string) => {
    setBackgroundColor(color);
  };

  return (
    <div className="p-16" style={{ backgroundColor: backgroundColor }}>
      <h1 className="heading1">Color Picker</h1>
      <div className="container-color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => {
              handleChangeColor(color);
            }}
          ></div>
        ))}
      </div>
      <h2 className="heading2">Selected Color: {backgroundColor}</h2>
      <div className="w-full flex items-center gap-2">
        <label className="whitespace-nowrap">Custom a color:</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => handleChangeColor(e.target.value)}
          className="flex-1 h-10 rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Colorpicker;

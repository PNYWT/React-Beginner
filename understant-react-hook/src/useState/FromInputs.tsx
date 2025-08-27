import { useState } from "react";
import React from "react";

type FormData = {
  text: string;
  checkbox: boolean;
  radio: string;
  select: string;
};

const FromInputs = () => {
  const [formData, setFormData] = useState<FormData>({
    text: "",
    checkbox: false,
    radio: "",
    select: "",
  });

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { type, name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div
      className="max-w-[400px] mx-auto my-[50px]
      p-16 border-[1px] rounded-[8px] bg-azure shadow-[0px_0px_10px_rgba(0,0,0,1)] font-sans"
    >
      <h1 className="heading1">Form Example</h1>
      <form action="">
        {/* Text Input */}
        <div className="container-input">
          <label className="style-label">Text: </label>
          <input
            type="text"
            name="text"
            value={formData.text}
            className="border-2 border-black rounded-lg pl-2 w-full bg-white p-2"
            onChange={handleTextChange}
          />
        </div>
        {/* Checkbox */}
        <div className="container-input">
          <label className="style-label">
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              className="border-2 border-black rounded-lg "
              onChange={handleTextChange}
            />
            Checkbox
          </label>

          {/* Radio Button */}
          <div className="container-input">
            <label className="style-label">Radio: </label>
            <label className="flex gap-2">
              <input
                type="radio"
                name="radio"
                value={"radio1"}
                checked={formData.radio === "radio1"}
                onChange={handleTextChange}
              />
              Option 1
            </label>
            <label className="flex gap-2">
              <input
                type="radio"
                name="radio"
                value={"radio2"}
                checked={formData.radio === "radio2"}
                onChange={handleTextChange}
              />
              Option 2
            </label>
          </div>
          {/* Select - Dropdown */}
          <div className="container-input">
            <label className="style-label">Select: </label>
            <select
              name="select"
              value={formData.select}
              className="border-2 border-black rounded-lg pl-2 w-full bg-white p-2"
              onChange={handleTextChange}
            >
              <option value="">-- choose an option --</option>
              <option value="Option1">-- Option 1 --</option>
              <option value="Option2">-- Option 2 --</option>
            </select>
          </div>
          <div className="container-input-form-date">
            <h2 className="heading2">Form Data</h2>
            <div className="grid grid-cols-1 gap-2">
              <p>
                <strong className="text-amber-800">Text: </strong>
                {formData.text || "N/A"}
              </p>
              <p>
                <strong className="text-amber-800">Checkbox: </strong>
                {formData.checkbox ? "Checked" : "Unchecked"}
              </p>
              <p>
                <strong className="text-amber-800">Radio: </strong>
                {formData.radio || "N/A"}
              </p>
              <p>
                <strong className="text-amber-800">Select: </strong>
                {formData.select || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FromInputs;

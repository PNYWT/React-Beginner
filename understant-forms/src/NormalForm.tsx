import React from "react";

function NormalForm() {
  type FormData = {
    name: string;
    email: string;
  };

  type FormErrors = {
    name?: string;
    email?: string;
  };

  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validateForms = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForms()) {
      console.log("✅ Form Data Submitted", formData);
    } else {
      console.log("❌ Validation failed");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    console.log(value);
    setFormData((prev) => ({
      ...prev, // เอาค่าทั้งหมดจาก state เก่ามาก่อน
      [name]: value, // อัพเดต value ตาม field name ที่ระบุ
    }));

    if (errors[name as keyof FormErrors]) {
      const newErrors: FormErrors = { ...errors };
      delete newErrors[name as keyof FormErrors];
      setErrors(newErrors);
    }
  };

  return (
    <div className="container">
      <h1>Forms in React</h1>
      <div className="section-container items-start">
        <form onSubmit={handleSubmitForm} className="flex flex-col gap-2">
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email:{" "}
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
            {errors && <span className="error">{errors.email}</span>}
          </label>
          <button type="submit" className="d-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NormalForm;

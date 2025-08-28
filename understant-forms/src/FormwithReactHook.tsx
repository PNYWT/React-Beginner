import React, { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

function FormwithReactHook() {
  type FormData = {
    name: string;
    email: string;
    age: number;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      age: 18,
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  const watchName = watch("name");
  const watchEmail = watch("email");

  useEffect(() => {
    console.log("Name: ", watchName);
  }, [watchName]);

  useEffect(() => {
    console.log("Email: ", watchEmail);
  }, [watchEmail]);

  const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = parseInt(e.target.value);
    if (age < 18) {
      e.target.setCustomValidity("Age must be at least 18");
    } else {
      e.target.setCustomValidity("");
    }
  };

  return (
    <div className="container">
      <h1>Forms with Reack Hook Form</h1>
      <div className="section-container items-start">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          {/* Name */}
          <label>
            Name:{" "}
            <input
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 8,
                  message: "Name must be at least 8 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Name must not exceed 20 characters",
                },
              })}
              className="form-input"
            />
            {errors.name && (
              <span className="error">{errors.name.message}</span>
            )}
          </label>
          {/* Age */}
          <label>
            Age:
            <input
              type="number"
              placeholder="Age"
              {...register("age", {
                required: "Age is required",
                min: { value: 18, message: "Age must be at least 18" },
                max: { value: 80, message: "Age must not exceed 80" },
              })}
              className="form-input"
            />
            {errors.age && <p className="error">{errors.age.message}</p>}
          </label>
          {/* Email */}
          <label>
            Email:{" "}
            <input
              placeholder="Email"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className="form-input"
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </label>
          <input className="d-button" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default FormwithReactHook;

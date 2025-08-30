import React, { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

function FormwithReactHook() {
  type FormData = {
    name: string;
    email: string;
    birthdate: string;
    password: string;
    cPassword: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      birthdate: "",
      password: "",
      cPassword: "",
    },
    mode: "onSubmit", // onChange, onBlur, onSubmit, all, onTouched
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);

    const age = calculateAge(data.birthdate);

    if (age < 18 || age > 80) {
      setError("birthdate", {
        type: "manual",
        message: "Age must be between 18 and 80",
      });
      return;
    } else {
      clearErrors("birthdate");
    }

    console.log("✅ Submitted:", { ...data, age });
    reset();
  };

  const calculateAge = (birthdate: string) => {
    if (!birthdate) return 0;
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const existingUsernames = ["user1", "test", "example"];
  const checkIfUsernameExist = async (userName: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return existingUsernames.includes(userName);
  };

  const watchName = watch("name");
  const watchEmail = watch("email");
  const birthdate = watch("birthdate");

  useEffect(() => {
    console.log("Name: ", watchName);
  }, [watchName]);

  useEffect(() => {
    console.log("Email: ", watchEmail);
  }, [watchEmail]);

  useEffect(() => {
    console.log("Birthdate to Age: ", calculateAge(birthdate));
  }, [birthdate]);

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
                  value: 4,
                  message: "Name must be at least 4 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Name must not exceed 20 characters",
                },
                validate: {
                  isEmpty: (value) => {
                    if (value.trim().length === 0) {
                      return "User name is not empty.";
                    }
                    return true;
                  },
                  notAdmin: (value) => {
                    if (
                      value.toUpperCase() === "admin".toUpperCase() ||
                      value.toUpperCase().includes("admin".toUpperCase())
                    ) {
                      return "Admin is not allowed";
                    }
                    return true;
                  },
                  isNotNumber: (value) => {
                    if (!isNaN(Number(value))) {
                      return "Name cannot be a number";
                    }
                    return true;
                  },
                  checkUsernameExit: async (value) => {
                    const exit = await checkIfUsernameExist(value);
                    return !exit || "Username already exists";
                  },
                },
              })}
              className="form-input"
            />
            {errors.name && (
              <span className="error">{errors.name.message}</span>
            )}
          </label>

          {/* Birthdate (Date Picker) */}
          <label>
            Birthdate:
            <input
              type="date"
              {...register("birthdate", {
                required: "Birthdate is required",
                validate: (value) => {
                  const age = calculateAge(value);
                  return age >= 18 && age <= 80
                    ? true
                    : "Age must be between 18 and 80";
                },
              })}
              className="form-input"
            />
            {birthdate && (
              <span className="text-gray-600 text-sm">
                Age: {calculateAge(birthdate)} years
              </span>
            )}
            {errors.birthdate && (
              <span className="error">{errors.birthdate.message}</span>
            )}
          </label>

          {/* Email */}
          <label>
            Email:{" "}
            <input
              type="text"
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

          {/* Password */}
          <div className="flex">
            Password:
            <label className="flex flex-col gap-1">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 18,
                      message: "Password must not exceed 18 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                      message:
                        "Password must include uppercase, lowercase and number",
                    },
                  })}
                  className="form-input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-600"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
              {/* คำอธิบายการตั้งรหัสผ่าน */}
              <p className="text-gray-500 text-sm mt-1">
                • อย่างน้อย 8 ตัวอักษร <br />
                • ต้องมีตัวพิมพ์ใหญ่ (A–Z) อย่างน้อย 1 ตัว <br />
                • ต้องมีตัวพิมพ์เล็ก (a–z) อย่างน้อย 1 ตัว <br />• ต้องมีตัวเลข
                (0–9) อย่างน้อย 1 ตัว
              </p>
            </label>
          </div>
          {/* Confirm Password */}
          <div className="flex">
            Confirm Password:
            <label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("cPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className="form-input"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-600"
                >
                  {showConfirmPassword ? "🙈" : "👁"}
                </button>
              </div>
            </label>
            {errors.cPassword && (
              <span className="error">{errors.cPassword.message}</span>
            )}
          </div>

          <input className="d-button" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default FormwithReactHook;

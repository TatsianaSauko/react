import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../utils/validation";
import { useActions } from "../hooks/actions";
import { countries } from "../data/countries";
import { FormData } from "../types/types";
import { useNavigate } from "react-router-dom";

function HookForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(schema) });
  const {
    saveFormName,
    saveFormAge,
    saveFormEmail,
    saveFormPassword,
    saveFormConfirmPassword,
    saveFormGender,
    saveFormTerms,
    setFormCountry,
    saveFormImage,
  } = useActions();
  const onSubmit = (data: FormData) => {
    saveFormName(data.name);
    saveFormAge(Number(data.age));
    saveFormEmail(data.email);
    saveFormPassword(data.password);
    saveFormConfirmPassword(data.confirmPassword);
    saveFormGender(data.gender);
    saveFormTerms(data.terms ?? false);
    setFormCountry(data.country);
    navigate("/");
  };

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        register("image").onChange({
          target: {
            name: "image",
            value: file,
          },
        });

        const reader = new FileReader();
        reader.onloadend = function () {
          saveFormImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  const watchAllFields = watch();

  const isFormComplete = Object.values(watchAllFields).every((value) => {
    if (typeof value === "boolean") {
      return true;
    }
    return value && value !== "";
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <div className="input-field">
          <label>Name:</label>
          <input {...register("name")} placeholder="Name" />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className="input-field">
          <label>Age:</label>
          <input {...register("age")} placeholder="Age" />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <div className="input-field">
          <label>Email:</label>
          <input {...register("email")} placeholder="Email" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="input-field">
          <label>Password:</label>
          <input {...register("password")} placeholder="Password" />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="input-field">
          <label>Confirm Password:</label>
          <input
            {...register("confirmPassword")}
            placeholder="Repeat Password"
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <div className="input-field">
          <label>Gender:</label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>

        <div className="input-field">
          <label> Accept Terms and Conditions </label>
          <input type="checkbox" {...register("terms")} />
          {errors.terms && <p>{errors.terms.message}</p>}
        </div>

        <div className="input-field">
          <label>Image:</label>
          <input type="file" name="file" onChange={handleFileChange} />

          {errors.image && <p>{errors.image.message}</p>}
        </div>

        <div className="input-field">
          <label htmlFor="countries">Country:</label>
          <select id="countries" {...register("country")}>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p>{errors.country.message}</p>}
        </div>
      </div>
      <input
        type="submit"
        disabled={!isFormComplete}
        style={{
          backgroundColor: isFormComplete ? "blue" : "gray",
          cursor: isFormComplete ? "pointer" : "not-allowed",
        }}
      />
    </form>
  );
}

export default HookForm;

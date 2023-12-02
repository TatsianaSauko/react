import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../utils/validation";
import { useActions } from "../hooks/actions";
import { countries } from "../data/countries";
import { FormData } from "../types/types";
import { useNavigate } from "react-router-dom";
import { isFormComplete } from "../utils/isFormComplete";

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
  const formComplete = isFormComplete(watchAllFields);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <div className="input-field">
          <label>Name:</label>
          <input {...register("name")} placeholder="Name" />
          {errors.name ? (
            <p>{errors.name.message}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label>Age:</label>
          <input {...register("age")} placeholder="Age" />
          {errors.age ? (
            <p>{errors.age.message}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label>Email:</label>
          <input {...register("email")} placeholder="Email" />
          {errors.email ? (
            <p>{errors.email.message}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label>Password:</label>
          <input {...register("password")} placeholder="Password" />
          {errors.password ? (
            <p>{errors.password.message}</p>
          ) : (
            <p className="hidden height">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label>Confirm Password:</label>
          <input
            {...register("confirmPassword")}
            placeholder="Repeat Password"
          />
          {errors.confirmPassword ? (
            <p>{errors.confirmPassword.message}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label>Gender:</label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          {errors.gender ? (
            <p>{errors.gender.message}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label> Accept Terms and Conditions </label>
          <input type="checkbox" {...register("terms")} />
          {errors.terms ? (
            <p>{errors.terms.message}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label>Image:</label>
          <input type="file" name="file" onChange={handleFileChange} />

          {errors.image ? (
            <p>{errors.image.message}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label htmlFor="country">Country:</label>
          <input list="countries" id="country" {...register("country")} />
          <datalist id="countries">
            {countries.map((country, index) => (
              <option key={index} value={country} />
            ))}
          </datalist>
          {errors.country ? (
            <p>{errors.country.message}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>
      </div>

      <input
        type="submit"
        disabled={!formComplete}
        style={{
          backgroundColor: formComplete ? "blue" : "gray",
          cursor: formComplete ? "pointer" : "not-allowed",
        }}
      />
    </form>
  );
}

export default HookForm;

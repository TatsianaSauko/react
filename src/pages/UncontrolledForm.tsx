import React, { useRef, useState } from "react";
import { schema } from "../utils/validation";
import { countries } from "../data/countries";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/actions";
import * as yup from "yup";
import { isFormComplete } from "../utils/isFormComplete";
import { PasswordStrengthIndicator } from "../components/PasswordStrengthIndicator";
import { evaluatePasswordStrength } from "../utils/evaluatePasswordStrength";

function UncontrolledForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();
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
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "female",
    terms: false,
    country: "",
    image: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    let value;
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await schema.validate(formState, { abortEarly: false });

      saveFormName(formState.name);
      saveFormAge(Number(formState.age));
      saveFormEmail(formState.email);
      saveFormPassword(formState.password);
      saveFormConfirmPassword(formState.confirmPassword);
      saveFormGender(formState.gender);
      saveFormTerms(formState.terms ?? false);
      setFormCountry(formState.country);
      navigate("/");
    } catch (err) {
      const yupError = err as yup.ValidationError;
      if (yupError instanceof yup.ValidationError) {
        const validationErrors: Record<string, string> = {};
        yupError.inner.forEach((error: yup.ValidationError) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        setFormState({
          ...formState,
          image: file,
        });
        const reader = new FileReader();
        reader.onloadend = function () {
          if (typeof reader.result === "string") {
            saveFormImage(reader.result);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
    const newPassword = event.target.value;
    setPasswordStrength(evaluatePasswordStrength(newPassword));
  };

  const formComplete = isFormComplete(formState);

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <div className="input-group">
        <div className="input-field">
          <label>Name:</label>
          <input
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Name"
          />
          {errors.name ? (
            <p>{errors.name}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label>Age:</label>
          <input
            name="age"
            value={formState.age}
            onChange={handleChange}
            placeholder="Age"
          />
          {errors.age ? (
            <p>{errors.age}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label>Email:</label>
          <input
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email ? (
            <p>{errors.email}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label>Password:</label>
          <input
            name="password"
            value={formState.password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <PasswordStrengthIndicator strength={passwordStrength} />
          {errors.password ? (
            <p>{errors.password}</p>
          ) : (
            <p className="hidden height">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label>Confirm Password:</label>
          <input
            name="confirmPassword"
            value={formState.confirmPassword}
            onChange={handleChange}
            placeholder="Repeat Password"
          />
          {errors.confirmPassword ? (
            <p>{errors.confirmPassword}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label>Gender:</label>
          <select
            name="gender"
            value={formState.gender}
            onChange={handleChange}
          >
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          {errors.gender ? (
            <p>{errors.gender}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label> Accept Terms and Conditions </label>
          <input type="checkbox" name="terms" onChange={handleChange} />
          {errors.terms ? (
            <p>{errors.terms}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label>Image:</label>
          <input type="file" name="file" onChange={handleFileChange} />
          {errors.image ? (
            <p>{errors.image}</p>
          ) : (
            <p className="hidden">Placeholder</p>
          )}
        </div>

        <div className="input-field">
          <label htmlFor="country">Country:</label>
          <input
            list="countries"
            id="country"
            name="country"
            value={formState.country}
            onChange={handleChange}
          />
          <datalist id="countries">
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </datalist>
          {errors.country ? (
            <p>{errors.country}</p>
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

export default UncontrolledForm;

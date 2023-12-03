import { FormData } from "../types/types";

const requiredFields: (keyof FormData)[] = [
  "name",
  "age",
  "email",
  "password",
  "confirmPassword",
  "gender",
  "terms",
  "image",
  "country",
];

export function isFormComplete(formState: FormData) {
  return requiredFields.every((field) => {
    const value = formState[field];
    if (Array.isArray(value)) {
      return value.length > 0 && value[0] !== "";
    }
    return value !== null && value !== undefined && value !== false;
  });
}

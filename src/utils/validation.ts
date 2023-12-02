import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Z]/, "First letter should be uppercase")
    .required(),
  age: yup.number().positive().integer().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).*$/,
      "Password should include 1 number, 1 uppercase letter, 1 lowercase letter, 1 special character",
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
  gender: yup.string().required(),
  terms: yup.bool().oneOf([true], "Accept T&C is required"),
  image: yup
    .mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File size is too large. The file must be less than or equal to 16KБ",
      (value: unknown) => {
        if (value instanceof File) {
          return value.size <= 16000;
        }
        return false;
      },
    )
    .test("fileType", "Unsupported File Format", (value: unknown) => {
      if (value instanceof File) {
        return ["image/png", "image/jpeg"].includes(value.type);
      }
      return false;
    }),
  country: yup.string().required("Country is required"),
});

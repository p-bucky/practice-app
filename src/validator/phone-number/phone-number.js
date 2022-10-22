import * as yup from "yup";

export const phoneNumberValidator = yup.object().shape({
  phoneNumber: yup
    .number()
    .typeError("Please type phone number")
    .required("Please type phone number")
    .min(5, "Phone number can't be less than 10 Character")
    .max(5, "Phone number can't be less than 10 Character"),
});

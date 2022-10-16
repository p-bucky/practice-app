import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().email().required("Please Enter Valid Username"),
  password: yup.string().min(4).max(10).required("Please Enter Valid Password"),
});

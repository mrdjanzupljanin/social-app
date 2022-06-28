import * as yup from "yup";


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    birthDay : yup.string()
    .required("Birthday is Required")
    ,
    password: yup
      .string()
      .min(5)
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
  });

  export const postSchema = yup.object().shape({
    name: yup.string().required(),
    place: yup.string().required(),
    access: yup.string().required(),
    type: yup.string().required(),
    desc: yup.string().required(),
  })
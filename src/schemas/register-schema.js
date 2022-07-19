import * as yup from "yup";
import { db } from "../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

const usersCollectionRef = collection(db, "users");

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .test(
      "test-id",
      "Email has already been taken.",
      async function validateValue(value) {
        try {
          const profile = query(
            usersCollectionRef,
            where("email", "==", value)
          );
          let user = null;
          const querySnapshot = await getDocs(profile);
          querySnapshot.forEach((snap) => {
            user = snap.data();
          });
          console.log(user);
          if (user) {
            return false;
          }
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
    ),
  birthDay: yup.string().required("Birthday is Required"),
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
  isAdmin: yup.boolean().oneOf([false, "Check if you are admin"]),
});

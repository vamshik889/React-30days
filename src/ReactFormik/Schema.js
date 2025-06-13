import * as Yup from "yup";
const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

export const signUpSchema = Yup.object({
    name:Yup.string().min(3).required("Please enter your name"),
    email:Yup.string().email().required("Please enter valid email"),
    password:Yup.string().matches(passwordRegex,"Please enter valid password").required("Please enter your password"),
    cpassword:Yup.string().oneOf([Yup.ref("password")],"Password do not match").required("Plase enter confirm password")
})
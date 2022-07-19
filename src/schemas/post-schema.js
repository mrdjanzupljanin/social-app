import * as yup from "yup";

export const postSchema = yup.object().shape({
    name: yup.string().required(),
    place: yup.string().required(),
    access: yup.string().required(),
    type: yup.string().required(),
    desc: yup.string().required(),
  })
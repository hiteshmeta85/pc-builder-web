import * as Yup from "yup";
import {object} from "yup";

const contactSchema = object({
  title: Yup.string().required('Title Required.'),
  description: Yup.string().required('Description Required.'),
})

export default contactSchema
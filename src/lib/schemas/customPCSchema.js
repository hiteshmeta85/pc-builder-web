import * as Yup from "yup";
import {object} from "yup";

const customPCSchema = object({
  Processor: Yup.string().required('Please select a CPU.'),
  Motherboard: Yup.string().required('Please select a Motherboard.'),
  RAM: Yup.string().required('Please select RAM.'),
  Storage: Yup.string().required('Please select a secondary storage.'),
  Cabinet: Yup.string().required('Please select a Cabinet.'),
  Graphics: Yup.string().required('Please select a Graphics card.'),
})

export default customPCSchema
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string().required().min(2, "name must be at least 2 characters"),
  size: Yup.string(),
  pepperoni: Yup.boolean(),
  sausage: Yup.boolean(),
  mushroom: Yup.boolean(),
  greenPepper: Yup.boolean(),
  onion: Yup.boolean(),
  notes: Yup.string(),
});

export default formSchema;

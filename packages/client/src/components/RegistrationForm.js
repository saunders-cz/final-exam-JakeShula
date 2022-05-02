import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import * as yup from "yup";
import { ADD_USER } from "../user/mutations";
import { useMutation } from "@apollo/client";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} />
    </div>
  );
}
const initialValues = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  email: "",
};

const validationSchema = yup.object({
  name: yup.string().required().label("Name"),
  address: yup.string().required().label("Street Address"),
  city: yup.string().required().label("City"),
  state: yup.string().required().label("State"),
  zip: yup.string().required().label("Zip"),
  email: yup.string().required().label("Email"),
});

export const RegistrationForm = ({ id, initialValues, onClose }) => {
  const mutation = id !== undefined ? ADD_USER : ADD_USER;

  const [addUser, { loading, error }] = useMutation(mutation, {
    onCompleted: () => {
      if (onClose !== undefined) onClose();
    },
  });
  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers) => {
      console.log(values, helpers);

      const { name, email, address, state, zip, city } = values;
      const input = {
        name,
        email,
        address,
        state,
        zip,
        city,
      };

      await addUser({
        variables: {
          id,
          input,
        },
      });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">
              Please enter your information below.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Name"
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Street Address"
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="City"
              error={!!errors.city}
              helperText={errors.city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="State"
              error={!!errors.state}
              helperText={errors.state}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="zip"
              value={values.zip}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Zip"
              error={!!errors.zip}
              helperText={errors.zip}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Email"
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Checkboxes></Checkboxes>
          <Typography>Check to sign up for our Mailing List</Typography>
          <Grid item xs={12}>
            <Button type="submit" disabled={isValid === false}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

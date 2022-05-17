import { Grid, Typography } from "@mui/material";
import { RegistrationForm } from "../components/RegistrationForm";

export const RegistrationPage = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h2">Keep In Contact </Typography>
      </Grid>
      <Grid item xs={12}>
        <RegistrationForm />
      </Grid>
    </>
  );
};

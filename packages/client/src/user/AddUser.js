import React from "react";
import { RegistrationForm } from "./RegistrationForm";

const initialValues = {
  name: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zip: "",

};

export const AddUser = ({ onClose }) => {
  return <RegistrationForm onClose={onClose} initialValues={initialValues} />;
};
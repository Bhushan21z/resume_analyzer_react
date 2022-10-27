import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

const Personal = () => {
  const { control } = useFormContext();
  return (
    <Box
      component="form"
      sx={{
        m: "70px",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="Email"
          render={({ field }) => (
            <TextField
              id="email"
              label="EmailId"
              variant="outlined"
              placeholder="Enter Your Email"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="Address"
          render={({ field }) => (
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              placeholder="Enter Your Adress"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="Phone"
          render={({ field }) => (
            <TextField
              id="phone"
              label="PhoneNumber"
              variant="outlined"
              placeholder="Enter Your Mobile Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
    </Box>
  );
};

export default Personal;

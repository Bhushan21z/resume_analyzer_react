import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

const Education = () => {
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
          name="College"
          render={({ field }) => (
            <TextField
              id="college"
              label="College"
              variant="outlined"
              placeholder="Enter Your College Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="Branch"
          render={({ field }) => (
            <TextField
              id="branch"
              label="Branch"
              variant="outlined"
              placeholder="Enter Your Branch"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="Linkedin"
          render={({ field }) => (
            <TextField
              id="linkedin"
              label="Linkedin"
              variant="outlined"
              placeholder="Enter Your LinkedIn Id"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="Github"
          render={({ field }) => (
            <TextField
              id="github"
              label="Github"
              variant="outlined"
              placeholder="Enter Your Github Id"
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

export default Education;

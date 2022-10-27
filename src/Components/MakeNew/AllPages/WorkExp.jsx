import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

const WorkExp = () => {
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
          name="Company1"
          render={({ field }) => (
            <TextField
              id="company1"
              label="Company1"
              variant="outlined"
              placeholder="Enter Company Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="JobDesc1"
          render={({ field }) => (
            <TextField
              id="jobdesc1"
              label="JobDesc1"
              variant="outlined"
              placeholder="Specify Job Description"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="Company2"
          render={({ field }) => (
            <TextField
              id="company2"
              label="Company2"
              variant="outlined"
              placeholder="Enter Company Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="JobDesc2"
          render={({ field }) => (
            <TextField
              id="jobdesc2"
              label="JobDesc2"
              variant="outlined"
              placeholder="Specify Job Description"
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

export default WorkExp;

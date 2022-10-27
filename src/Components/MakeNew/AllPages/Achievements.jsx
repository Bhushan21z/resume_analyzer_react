import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

const Achievements = () => {
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
          name="Achievement1"
          render={({ field }) => (
            <TextField
              id="achievement1"
              label="Achievement1"
              variant="outlined"
              placeholder="Enter Your Achievement"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="Achievemetdesc1"
          render={({ field }) => (
            <TextField
              id="achievementdesc1"
              label="Achievemetdesc1"
              variant="outlined"
              placeholder="Achievement Description"
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

export default Achievements;

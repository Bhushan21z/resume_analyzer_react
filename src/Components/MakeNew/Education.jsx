import { Button } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Education = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="College Name"
          defaultValue=" "
        />
        <TextField
          required
          id="outlined-required"
          label="Degree"
          //   defaultValue="Doe"
        />

        <TextField
          required
          id="outlined-required"
          label="Start Year"
          //   defaultValue="Doe"
        />

        <TextField
          required
          id="outlined-required"
          label="End Year"
          //   defaultValue=" "
        />

        <TextField
          required
          id="outlined-required"
          label="CGPA"
          //   defaultValue=" "
        />

        <TextField
          required
          id="outlined-required"
          label="Description"
          //   defaultValue=" "
        />
      </div>
    </Box>
  );
};

export default Education;

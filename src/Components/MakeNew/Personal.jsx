import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Personal() {
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
          label="First Name"
          defaultValue="John"
        />
        <TextField
          required
          id="outlined-required"
          label="Middle Name"
          defaultValue="Doe"
        />

        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue="Doe"
        />

        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=" "
        />

        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          defaultValue=" "
        />
      </div>
    </Box>
  );
}

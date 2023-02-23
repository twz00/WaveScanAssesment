import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const InputForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, gender });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">
        Project Name
      </Typography>
      <TextField
        label="Project Name"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Typography variant="h6">
        Scanning Mode
      </Typography>
      <FormControl variant="outlined" margin="normal" fullWidth required>
        <InputLabel>Scanning Mode</InputLabel>
        <Select
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h6">
        Scan Dimension (cm)
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Typography variant="h6">
        Scanner Frequency
      </Typography>
      <TextField
        label="Scanner Frequency"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Scan
      </Button>
    </form>
  );
};

export default InputForm;

import React from "react";
// material ui
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Button from "@mui/material/Button";

// hook form
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { addPersonalInformation } from "./app/feature/InformationSlice";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const schema = yup
    .object({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      fatherName: yup.string().required("Father name is required"),
      motherName: yup.string().required("Mother name is required"),
      gender: yup.string().required("Gender is required"),
      maritalStatus: yup.string().required("Marital status is required"),
      email: yup
        .string()
        .email()
        .typeError("Email must be valid")
        .required("Email is required"),
      nationalID: yup
        .number()
        .typeError("National ID must be number")
        .required("Nation ID is required"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(watch);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("personal data : ", data);
    dispatch(addPersonalInformation(data));
    navigate("/education");
  };

  const data = useSelector((state) => state.information.allInformation);
  console.log(data);

  return (
    <div>
      <Box sx={{ flexGrow: 1, margin: "50px", padding: "20px" }}>
        <Typography sx={{ textAlign: "center" }} variant="h4" gutterBottom>
          Personal Details
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item sx={{ padding: "20px" }}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-required"
                      label="First Name"
                      defaultValue=""
                      sx={{ margin: "10px", width: "100%" }}
                    />
                  )}
                />
                <Box sx={{ textAlign: "left" }}>
                  {errors.firstName && (
                    <Typography color="error" m={1} variant="p">
                      {errors.firstName.message}
                    </Typography>
                  )}
                </Box>

                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-required"
                      label="Last Name"
                      defaultValue=""
                      sx={{ margin: "10px", width: "100%" }}
                    />
                  )}
                />
                <Box sx={{ textAlign: "left" }}>
                  {errors.lastName && (
                    <Typography color="error" m={1} variant="p">
                      {errors.lastName.message}
                    </Typography>
                  )}
                </Box>

                <Controller
                  name="fatherName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-required"
                      label="Father's Name"
                      defaultValue=""
                      sx={{ margin: "10px", width: "100%" }}
                    />
                  )}
                />
                <Box sx={{ textAlign: "left" }}>
                  {errors.fatherName && (
                    <Typography color="error" m={1} variant="p">
                      {errors.fatherName.message}
                    </Typography>
                  )}
                </Box>

                <Controller
                  name="motherName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-required"
                      label="Mother's Name"
                      defaultValue=""
                      sx={{ margin: "10px", width: "100%" }}
                    />
                  )}
                />
                <Box sx={{ textAlign: "left" }}>
                  {errors.motherName && (
                    <Typography color="error" m={1} variant="p">
                      {errors.motherName.message}
                    </Typography>
                  )}
                </Box>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ padding: "20px" }}>
                <FormControl fullWidth sx={{ margin: "10px", width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Gender *
                  </InputLabel>

                  <Controller
                    name="gender"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Gender *"
                        {...field}
                        sx={{ textAlign: "left" }}
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="others">Others</MenuItem>
                      </Select>
                    )}
                  />
                  <Box sx={{ textAlign: "left" }}>
                    {errors.gender && (
                      <Typography color="error" m={1} variant="p">
                        {errors.gender.message}
                      </Typography>
                    )}
                  </Box>
                </FormControl>
                <FormControl fullWidth sx={{ margin: "10px", width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Marital Status *
                  </InputLabel>

                  <Controller
                    name="maritalStatus"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Gender *"
                        sx={{ textAlign: "left" }}
                      >
                        <MenuItem value="married">Married</MenuItem>
                        <MenuItem value="unMarried">UnMarried</MenuItem>
                        <MenuItem value="single">Single</MenuItem>
                        <MenuItem value="complicated">Complicated</MenuItem>
                      </Select>
                    )}
                  />

                  <Box sx={{ textAlign: "left" }}>
                    {errors.maritalStatus && (
                      <Typography color="error" m={1} variant="p">
                        {errors.maritalStatus.message}
                      </Typography>
                    )}
                  </Box>
                </FormControl>

                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      type="email"
                      {...field}
                      id="outlined-required"
                      label="Email"
                      defaultValue=""
                      sx={{ margin: "10px", width: "100%" }}
                    />
                  )}
                />
                <Box sx={{ textAlign: "left" }}>
                  {errors.email && (
                    <Typography color="error" m={1} variant="p">
                      {errors.email.message}
                    </Typography>
                  )}
                </Box>

                <Controller
                  name="nationalID"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      type="number"
                      {...field}
                      id="outlined-required"
                      label="Nation ID"
                      defaultValue=""
                      sx={{ margin: "10px", width: "100%" }}
                    />
                  )}
                />

                <Box sx={{ textAlign: "left" }}>
                  {errors.nationalID && (
                    <Typography color="error" m={1} variant="p">
                      {errors.nationalID.message}
                    </Typography>
                  )}
                </Box>
              </Item>
            </Grid>
            <Button
              variant="contained"
              type="submit"
              sx={{ width: "50%", margin: "0 auto", mt: "20px" }}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default Personal;

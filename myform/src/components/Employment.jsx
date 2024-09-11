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

// accordion
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { addEmployment } from "./app/feature/InformationSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Employment = () => {
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
      employment: yup.array().of(
        yup.object().shape({
          companyName: yup.string().required("CompanyName is required"),
          designation: yup.string().required("Designation is required"),
          companyBusiness: yup.string().required("CompanyBusiness is required"),
          employeeType: yup.string().required("EmployeeType is required"),
          companyLocation: yup.string().required("CompanyLocation is required"),
        })
      ),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { employment: [{}] },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.information.allInformation);
  console.log(data);

  const [forms, setForms] = useState([{}]);
  const createForm = () => {
    setForms([...forms, {}]);
  };
  const deleteForm = (index) => {
    console.log("index : ", index);
    const deletedForm = forms.filter((_, i) => i !== index);
    console.log(deletedForm);

    setForms(deletedForm);
    console.log(forms);
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addEmployment(data));
    navigate("/allInfo");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, margin: "50px", padding: "20px" }}>
        <Typography sx={{ textAlign: "center" }} variant="h4" gutterBottom>
          Employment
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h6">Employment Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button
              variant="contained"
              sx={{ margin: "20px", fontWeight: "bold" }}
              onClick={createForm}
              color="success"
            >
              Add Form
            </Button>{" "}
            <form
              style={{ margin: "20px 0px" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              {forms.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      border: "1px solid #ddd",
                      padding: "20px",
                      marginBottom: "20px",
                      borderRadius: "8px",
                    }}
                  >
                    <Grid
                      container
                      spacing={2}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Grid item xs={6}>
                        <Item sx={{ padding: "20px" }}>
                          <Controller
                            name={`employment[${index}].companyName`}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                type="text"
                                required
                                id="outlined-required"
                                label="Company Name"
                                defaultValue=""
                                sx={{ margin: "6px", width: "100%" }}
                              />
                            )}
                          />
                          <Controller
                            name={`employment[${index}].designation`}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                type="text"
                                required
                                id="outlined-required"
                                label="Designation"
                                defaultValue=""
                                sx={{ margin: "6px", width: "100%" }}
                              />
                            )}
                          />

                          <Controller
                            name={`employment[${index}].companyBusiness`}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                type="text"
                                required
                                id="outlined-required"
                                label="Company Business"
                                defaultValue=""
                                sx={{ margin: "6px", width: "100%" }}
                              />
                            )}
                          />
                        </Item>
                      </Grid>

                      <Grid item xs={6}>
                        <Item sx={{ padding: "20px" }}>
                          <FormControl
                            fullWidth
                            sx={{ margin: "6px", width: "100%" }}
                          >
                            <InputLabel id="demo-simple-select-label">
                              Employee Type *
                            </InputLabel>

                            <Controller
                              name={`employment[${index}].employeeType`}
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  label="Employee Type"
                                  {...field}
                                  sx={{
                                    margin: "4px",
                                    width: "100%",
                                    textAlign: "left",
                                  }}
                                >
                                  <MenuItem value="regular">Regular</MenuItem>
                                  <MenuItem value="irregular">
                                    Irregular
                                  </MenuItem>
                                </Select>
                              )}
                            />
                          </FormControl>

                          <Controller
                            name={`employment[${index}].companyLocation`}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                type="text"
                                required
                                id="outlined-required"
                                label="Company Location"
                                defaultValue=""
                                sx={{ margin: "6px", width: "100%" }}
                              />
                            )}
                          />
                        </Item>
                      </Grid>

                      <Box sx={{ textAlign: "left" }}>
                        <Button
                          variant="contained"
                          color="error"
                          sx={{ margin: " 20px 30px" }}
                          onClick={() => deleteForm(index)}
                          disabled={forms.length === 1}
                        >
                          Delete Form
                        </Button>{" "}
                      </Box>
                    </Grid>
                  </Box>
                );
              })}

              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: "50%",
                    mt: "20px",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default Employment;

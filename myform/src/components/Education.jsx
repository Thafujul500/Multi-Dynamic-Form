import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { addEducationOrTraining } from "./app/feature/InformationSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Education = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const schema = yup
    .object({
      education: yup.array().of(
        yup.object().shape({
          lavelOfEducation: yup
            .string()
            .required("Level of Education is required"),
          examOrDegree: yup.string().required("Exam/Degree is required"),
          departmentOrGroup: yup
            .string()
            .required("Department/Group is required"),
          board: yup.string().required("Board is required"),
          InstituteName: yup.string().required("Institute Name is required"),
          result: yup
            .number()
            .typeError("Result must be number")
            .required("Result is required"),
          year: yup
            .number()
            .typeError("Year must be number")
            .required("Year is required"),
          duration: yup.string().required("Duration is required"),
        })
      ),
    })
    .required();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      education: [{}],
    },
  });
  console.log(watch());

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [forms, setForms] = useState([{ id: uuidv4() }]);
  console.log(forms);

  const createForm = () => {
    setForms([...forms, { id: uuidv4() }]);
  };

  const deleteForm = (id, index) => {
    console.log(id);

    const deletedForm = forms.filter((item) => {
      return item.id !== id;
    });
    setForms(deletedForm);

    const updateForms = watch("education");

    updateForms.splice(index, 1);

    reset({
      education: updateForms,
    });
  };

  const onSubmit = (data) => {
    dispatch(addEducationOrTraining(data));
    navigate("/employment");
    // console.log(data);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, margin: "50px", padding: "20px" }}>
        <Typography
          sx={{ textAlign: "center", marginBottom: "50px" }}
          variant="h4"
          gutterBottom
        >
          Education/Training
        </Typography>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h6">Education/Training Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button
              onClick={createForm}
              sx={{ margin: "10px" }}
              variant="contained"
            >
              Add Form
            </Button>
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
                      {/* First Column */}
                      <Grid item xs={6}>
                        <Item sx={{ padding: "20px" }}>
                          <FormControl
                            fullWidth
                            sx={{ margin: "5px", width: "95%" }}
                          >
                            <InputLabel id="demo-simple-select-label">
                              Level Of Education *{" "}
                            </InputLabel>
                            <Controller
                              name={`education[${index}].lavelOfEducation`}
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  label="Level Of Education *"
                                  {...field}
                                  sx={{ width: "100%", textAlign: "left" }}
                                >
                                  <MenuItem value="HSC">HSC</MenuItem>
                                  <MenuItem value="SSC">SSC</MenuItem>
                                  <MenuItem value="JSC">JSC</MenuItem>
                                  <MenuItem value="PSC">PSC</MenuItem>
                                </Select>
                              )}
                            />
                            <Box sx={{ textAlign: "left" }}>
                              {errors?.education?.[index]?.lavelOfEducation && (
                                <Typography color="error" m={1} variant="p">
                                  {
                                    errors.education[index].lavelOfEducation
                                      .message
                                  }
                                </Typography>
                              )}
                            </Box>
                          </FormControl>

                          <FormControl
                            fullWidth
                            sx={{ margin: "5px", width: "95%" }}
                          >
                            <InputLabel id="demo-simple-select-label">
                              Exam/Degree *{" "}
                            </InputLabel>
                            <Controller
                              name={`education[${index}].examOrDegree`}
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  label="Exam/Degree *"
                                  {...field}
                                  sx={{ width: "100%", textAlign: "left" }}
                                >
                                  <MenuItem value="BSC">BSC</MenuItem>
                                  <MenuItem value="BBA">BBA</MenuItem>
                                  <MenuItem value="BA">BA</MenuItem>
                                </Select>
                              )}
                            />{" "}
                            <Box sx={{ textAlign: "left" }}>
                              {errors?.education?.[index]?.examOrDegree && (
                                <Typography color="error" variant="p" m={1}>
                                  {errors.education[index].examOrDegree.message}
                                </Typography>
                              )}
                            </Box>
                          </FormControl>

                          <FormControl
                            fullWidth
                            sx={{ margin: "10px", width: "95%" }}
                          >
                            <InputLabel id="demo-simple-select-label">
                              Department / Group *{" "}
                            </InputLabel>

                            <Controller
                              name={`education[${index}].departmentOrGroup`}
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  label="Department / Group *"
                                  {...field}
                                  sx={{ width: "100%", textAlign: "left" }}
                                >
                                  <MenuItem value="science">Science</MenuItem>
                                  <MenuItem value="commarce">Commarce</MenuItem>
                                  <MenuItem value="arts">Arts</MenuItem>
                                  <MenuItem value="others">Others</MenuItem>
                                </Select>
                              )}
                            />
                            <Box sx={{ textAlign: "left" }}>
                              {errors?.education?.[index].departmentOrGroup && (
                                <Typography color="error" m={1} variant="p">
                                  {
                                    errors.education[index].departmentOrGroup
                                      .message
                                  }
                                </Typography>
                              )}
                            </Box>
                          </FormControl>

                          <FormControl
                            fullWidth
                            sx={{ margin: "10px", width: "95%" }}
                          >
                            <InputLabel id="demo-simple-select-label">
                              Board *
                            </InputLabel>

                            <Controller
                              name={`education[${index}].board`}
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  label="Board *"
                                  {...field}
                                  sx={{ width: "100%", textAlign: "left" }}
                                >
                                  <MenuItem value="dhaka">Dhaka</MenuItem>
                                  <MenuItem value="chittagong">
                                    Chittagong
                                  </MenuItem>
                                  <MenuItem value="rajshahi">Rajshahi</MenuItem>
                                  <MenuItem value="khulna">Khulna</MenuItem>
                                  <MenuItem value="barishal">Barishal</MenuItem>
                                  <MenuItem value="dinajpur">Dinajpur</MenuItem>
                                </Select>
                              )}
                            />
                            <Box sx={{ textAlign: "left" }}>
                              {errors?.education?.[index]?.board && (
                                <Typography color="error" m={1} variant="p">
                                  {errors.education[index].board.message}
                                </Typography>
                              )}
                            </Box>
                          </FormControl>
                        </Item>
                      </Grid>
                      {/* Second Column */}
                      <Grid item xs={6}>
                        <Item sx={{ padding: "20px" }}>
                          <Controller
                            name={`education[${index}].InstituteName`}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="outlined-required"
                                label="Institute Name"
                                defaultValue=""
                                sx={{ margin: "6px", width: "100%" }}
                              />
                            )}
                          />
                          <Box sx={{ textAlign: "left" }}>
                            {errors?.education?.[index]?.InstituteName && (
                              <Typography color="error" m={1} variant="p">
                                {errors.education[index].InstituteName.message}
                              </Typography>
                            )}
                          </Box>
                          <Controller
                            name={`education[${index}].result`}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                type="number"
                                id="outlined-required"
                                label="Result"
                                defaultValue=""
                                sx={{ margin: "6px", width: "100%" }}
                              />
                            )}
                          />
                          <Box sx={{ textAlign: "left" }}>
                            {errors?.education?.[index]?.result && (
                              <Typography color="error" m={1} variant="p">
                                {errors.education[index].result.message}
                              </Typography>
                            )}
                          </Box>
                          <Controller
                            name={`education[${index}].year`}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                type="number"
                                id="outlined-required"
                                label="Year"
                                defaultValue=""
                                sx={{ margin: "6px", width: "100%" }}
                              />
                            )}
                          />
                          <Box sx={{ textAlign: "left" }}>
                            {errors?.education?.[index]?.year && (
                              <Typography color="error" m={1} variant="p">
                                {errors.education[index].year.message}
                              </Typography>
                            )}
                          </Box>

                          <FormControl
                            fullWidth
                            sx={{ margin: "6px", width: "100%" }}
                          >
                            <InputLabel id="demo-simple-select-label">
                              Duration *
                            </InputLabel>

                            <Controller
                              name={`education[${index}].duration`}
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  label="Duration *"
                                  {...field}
                                  sx={{
                                    margin: "4px",
                                    width: "100%",
                                    textAlign: "left",
                                  }}
                                >
                                  <MenuItem value="3 years">3 years</MenuItem>
                                  <MenuItem value="4 years">4 years</MenuItem>
                                  <MenuItem value="5 years">5 years</MenuItem>
                                </Select>
                              )}
                            />
                            <Box sx={{ textAlign: "left" }}>
                              {errors?.education?.[index]?.duration && (
                                <Typography color="error" variant="p">
                                  {errors.education[index].duration.message}
                                </Typography>
                              )}
                            </Box>
                          </FormControl>
                        </Item>
                      </Grid>
                      <Box sx={{ textAlign: "left" }}>
                        <Button
                          variant="contained"
                          color="error"
                          sx={{ margin: " 20px 30px" }}
                          onClick={() => deleteForm(item.id, index)}
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

export default Education;

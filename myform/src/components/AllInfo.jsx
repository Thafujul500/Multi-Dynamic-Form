import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useSelector } from "react-redux";

const AllInfo = () => {
  const value = useSelector((state) => state.information.allInformation);

  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Typography
        sx={{ textAlign: "center", margin: "20px 0" }}
        variant="h3"
        gutterBottom
      >
        All Inforamtion
      </Typography>{" "}
      <div>
        {/* Personal Information Table */}
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold" }}
          variant="h6"
          gutterBottom
        >
          Personal Information
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Father's Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Mother's Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Gender</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  marital Status
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>National ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {value.personalInfomarion.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.firstName}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.lastName}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.fatherName}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.motherName}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.gender}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.maritalStatus}
                  </TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.nationalID}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Education or Training Table */}
        <Typography
          sx={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}
          variant="h6"
          gutterBottom
        >
          Education or Training
        </Typography>

        <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Lavel Of Education
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Exam Or Degree
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Department Or Group
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Board</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Institute Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Result</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Year</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {value.educationOrTraining.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.lavelOfEducation}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.examOrDegree}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.departmentOrGroup}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.board}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.InstituteName}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.result}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.year}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.duration}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Employment Table */}
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold" }}
          variant="h6"
          gutterBottom
        >
          Employment
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Company Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Designation</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Company Business
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Employee Type</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Company Location
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {value.employment.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.companyName}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.designation}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.companyBusiness}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.employeeType}
                  </TableCell>
                  <TableCell sx={{ textTransform: "capitalize" }}>
                    {item.companyLocation}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default AllInfo;

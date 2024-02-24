import React from "react";
import { Grid, Paper, Typography, TextField, Button, Card } from "@mui/material";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormHelperText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import regPics from "../../assets/images/regPics.png"
import * as Yup from "yup";
// import logo from "../../assets/images/logo.svg";
// import LoginPic from "../../assets/images/LoginPic.jpg";

import { Link, useNavigate } from "react-router-dom";



const Register = () => {
  const nav = useNavigate();
  const paperStyle = { height: "80vh", width: 500, margin: "0 auto", borderRadius:"20px"};
  const headerStyle = { margin: 0 };
  const avatarStyle = { height: 200, width: 200 };
  const marginTop = { marginTop: 0.1 };

  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
  });

  const NavTo = () => {
    nav("/login", { replace: true });
  };

  const onSubmit = (values, props) => {
    console.log(values);
    // console.log(props)
    // console.log(typeof values.email);
    // console.log(typeof values.password);

    // console.log(auth);

    setTimeout(() => {
      props.resetForm();
      NavTo();
      props.setSubmitting(false);
    }, 1000);

    // let email = values.email;

    // let password = values.password;
  };
  return (
    <Card style={{
      marginTop:"5%",
      marginLeft:"7%",
      display: "flex",
      padding: "2%",
      // backgroundColor: "#6c926d",
      width: "80%",
      borderRadius:"20px",
      
    }}
    elevation={15}>


      <div style={{ width: "60%", height: "100%"}}>
        <img
          src={regPics}
          
          height={"596px"}
            width={"100%"}
            style={{ borderRadius: "20px" }}
        />
      </div>
      <div style={{ marginLeft: "2%" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Grid>
          <Paper
            style={paperStyle}
            sx={{
              padding: 5,
            }}
          >
            <Grid align="center">

              <h2 style={headerStyle}>Sign Up</h2>
              <Typography variant="caption" gutterBottom>
                Please fill this form to create an account !
              </Typography>
            </Grid>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(props) => (
                <Form>
                  <Field
                    as={TextField}
                    fullWidth
                    name="name"
                    label="Name"
                    placeholder="Enter your name"
                    required
                    helperText={<ErrorMessage name="name" />}
                  />
                  <br></br>
                  <br></br>
                  <Field
                    as={TextField}
                    fullWidth
                    name="email"
                    label="Email"
                    required
                    placeholder="Enter your email"
                    helperText={<ErrorMessage name="email" />}
                  />
                  <br></br>
                  <br></br>
                  {/* <FormControl component="fieldset" style={marginTop}><br></br>
                                <FormLabel component="legend">Gender</FormLabel>
                                < Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </ Field><br></br>
                            </FormControl> */}
                  {/* <FormHelperText><ErrorMessage name="gender" /></FormHelperText> */}
                  <Field
                    as={TextField}
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                    required
                    placeholder="Enter your phone number"
                    helperText={<ErrorMessage name="phoneNumber" />}
                  />
                  <br></br>
                  <br></br>
                  <Field
                    as={TextField}
                    fullWidth
                    name="password"
                    type="password"
                    label="Password"
                    required
                    placeholder="Enter your password"
                    helperText={<ErrorMessage name="password" />}
                  />
                  <br></br>
                  <br></br>
                  <Field
                    as={TextField}
                    fullWidth
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    required
                    placeholder="Confirm your password"
                    helperText={<ErrorMessage name="confirmPassword" />}
                  />
                  <br></br>
                  <br></br>
                  {/* <Link to="/reign/login"> */}
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={props.isSubmitting}
                    fullWidth
                    style={{
                      backgroundColor: "#883ab4",
                      color: "white",
                    }}
                    color="primary"
                  >
                    {"Sign up"}
                  </Button>
                  {/* </Link> */}
                </Form>
              )}
            </Formik>
            <br />
            <Typography>
              {" "}
              Did you have an account ?
              <Link to="/login" style={{ color: "#883ab4" }}>
  {/* Your link content here */}
     Sign in
</Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
    </Card>
  );
};

export default Register;

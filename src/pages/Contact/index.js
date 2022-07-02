import React, { useState, useRef } from "react";
import Base from "../../core/Base";
import emailjs from "@emailjs/browser";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const theme = createTheme();

const Contact = () => {
  const form = useRef();

  const [values, setValues] = useState({
    error: "",
    success: false,
    loading: false,
  });

  const { error, success, loading } = values;

  const sendEmail = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    emailjs
      .sendForm(
        "service_pnul80c",
        "template_5ijjuyx",
        form.current,
        "user_zzDiHDhFRViyrNT6jcW1s"
      )
      .then(
        (result) => {
          console.log(result.text);
          setValues({
            ...values,
            error: "",
            success: true,
            loading: false,
          });
        },
        (error) => {
          console.log(error.text);
          setValues({
            ...values,
            error: true,
            success: false,
            loading: false,
          });
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Base title="Contact">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <MailOutlineIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Contact Us
              </Typography>
              <Box
                component="form"
                noValidate
                ref={form}
                onSubmit={sendEmail}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastname"
                      label="Last Name"
                      name="lastname"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value))
                          .toString()
                          .slice(0, 10);
                      }}
                      type="number"
                      id="phone"
                      label="Phone Number"
                      name="phone"
                      autoComplete="phone"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="date"
                      label="Birthday"
                      type="date"
                      name="dob"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="occupation"
                      label="Occupation"
                      name="occupation"
                      autoComplete="occupation"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="address"
                      label="Address"
                      name="address"
                      autoComplete="address"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="city"
                      label="City"
                      name="city"
                      autoComplete="city"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="dist"
                      label="District"
                      name="dist"
                      autoComplete="dist"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="state"
                      label="State"
                      name="state"
                      autoComplete="state"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="country"
                      label="Country"
                      name="country"
                      autoComplete="country"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="subject"
                      label="Subject"
                      name="subject"
                      autoComplete="subject"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="Message"
                      required
                      multiline
                      minRows={2}
                      maxRows={4}
                      fullWidth
                      id="message"
                      label="Message"
                      name="message"
                    />
                  </Grid>
                </Grid>

                {error && (
                  <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert severity="error">{error}</Alert>
                  </Stack>
                )}

                {success && (
                  <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert severity="success">
                      Your message has been received. We will contact you
                      shortly.
                    </Alert>
                  </Stack>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 15 }}
                  disabled={loading}
                  color="secondary"
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Base>
    </div>
  );
};

export default Contact;

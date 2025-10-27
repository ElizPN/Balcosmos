import {
  Alert,
  Box,
  Button,
  Snackbar,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import React, { useState } from "react";

const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  marginBottom: 70,
}));

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  "& label": {
    color: "black",
  },
});

function ContactForm() {
  const [result, setResult] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({
    severity: "success",
    message: "",
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "01199e10-0cd4-40a9-a91c-4d94dec78c12");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    setResult("");
    if (res.success) {
      setAlert({ severity: "success", message: "Message sent successfully!" });
      setOpen(true);
      (event.target as HTMLFormElement).reset();
    } else {
      setAlert({ severity: "error", message: "Something went wrong!" });
      setOpen(true);
    }
  };

  return (
    <Container
      id='contact'
      sx={{
        backgroundColor: "#000000cf",
        direction: "column",
        marginBottom: 50,
        scrollMarginTop: { xs: 200, sm: 160 },
        textAlign: "center",
        paddingBottom: 20,
        paddingTop: 5,
      }}
    >
      <StyledTypography variant='h5'>CONTACT</StyledTypography>
      <Box
        component='form'
        onSubmit={onSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiTextField-root": {
            m: 1,
            width: { xs: "85%", sm: "50%", md: "400px" },
          },
        }}
        noValidate
        autoComplete='off'
      >
        <StyledTextField fullWidth label='Your Name' name='name' />
        <StyledTextField
          fullWidth
          label='Your Email'
          name='email'
          type='email'
        />
        <StyledTextField
          fullWidth
          label='Message'
          name='message'
          multiline
          rows={4}
        />
        <Button
          color='success'
          size='large'
          variant='contained'
          type='submit'
          sx={{ mt: 3 }}
        >
          {result ? result : "Submit"}
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alert.severity as "success" | "error"}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default ContactForm;

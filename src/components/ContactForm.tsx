import {
  Button,
  styled,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import React from "react";

const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  marginBottom: 70,
}));

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "01199e10-0cd4-40a9-a91c-4d94dec78c12");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <Container
      sx={{
        backgroundColor: "#000000cf",
        direction: "column",
        marginBottom: 50,
        textAlign: "center",
        paddingBottom: 20,
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <StyledTypography variant='h5'>CONTACT</StyledTypography>

      <Grid
        container
        component='form'
        onSubmit={onSubmit}
        direction='column'
        spacing={7}
      >
        <Grid item>
          <Typography mb={2} variant='h5'>
            Your name
          </Typography>
          <TextareaAutosize
            minRows={3}
            style={{ width: "50%", borderRadius: 5 }}
            placeholder='John Doe'
            name='name'
          />
        </Grid>
        <Grid item>
          <Typography mb={2} variant='h5'>
            Your email
          </Typography>
          <TextareaAutosize
            minRows={3}
            style={{ width: "50%", borderRadius: 5 }}
            placeholder='your@company.com'
            name='email'
          />
        </Grid>
        <Grid item>
          <Typography mb={2} variant='h5'>
            Message
          </Typography>
          <TextareaAutosize
            aria-label='Your message'
            minRows={10}
            placeholder='Your message'
            name='message'
            style={{ width: 400, borderRadius: 5 }}
          />
        </Grid>
        <Grid item>
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Grid>
        <Grid item>
          <Typography>{result}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactForm;

import { Button, styled, TextareaAutosize, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";

const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  marginBottom: 70,
}));

function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

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

      <Grid
        container
        component='form'
        onSubmit={onSubmit}
        direction='column'
        spacing={7}
        alignItems='center'
      >
        <Grid
          item
          sx={{
            width: {
              xs: "85%",
              s: "50%",
              md: "50%",
              lg: "400px",
            },
          }}
        >
          <Typography mb={2} variant='h5'>
            Your name
          </Typography>
          <TextareaAutosize
            minRows={3}
            style={{ width: "100%", borderRadius: 5, padding: 10 }}
            placeholder='John Doe'
            name='name'
          />
        </Grid>
        <Grid
          item
          sx={{
            width: {
              xs: "85%",
              s: "50%",
              md: "50%",
              lg: "400px",
            },
          }}
        >
          <Typography mb={2} variant='h5'>
            Your email
          </Typography>
          <TextareaAutosize
            minRows={3}
            style={{ width: "100%", borderRadius: 5, padding: 10 }}
            placeholder='your@company.com'
            name='email'
          />
        </Grid>
        <Grid
          alignItems='center'
          justifyContent='center'
          item
          sx={{
            width: {
              xs: "90%",
              s: "50%",
              md: "50%",
              lg: "400px",
            },
          }}
        >
          <Typography mb={2} variant='h5'>
            Message
          </Typography>
          <TextareaAutosize
            aria-label='Your message'
            minRows={10}
            placeholder='Your message'
            name='message'
            style={{ width: "100%", borderRadius: 5, padding: 10 }}
          />
        </Grid>
        <Grid item>
          <Button
            color='success'
            size='large'
            variant='contained'
            type='submit'
          >
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

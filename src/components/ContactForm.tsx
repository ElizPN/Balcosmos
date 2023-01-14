import { TextareaAutosize, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import React from "react";

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
    <Container>
      <h1>React File Upload Form</h1>

      <Grid
        container
        component='form'
        onSubmit={onSubmit}
        direction='column'
        spacing={7}
        sx={{ backgroundColor: "#000000cf", direction: "column" }}
      >
        <Grid item>
          <Input placeholder='John Doe' />
        </Grid>
        <Grid item>
          <Input placeholder='your@company.com' />
        </Grid>
        <Grid item>
          <TextareaAutosize
            aria-label='Your message'
            minRows={5}
            placeholder='Your message'
            style={{ width: 200 }}
          />
        </Grid>
        <Grid item>
          <input type='submit' />
        </Grid>
      </Grid>
      <span>{result}</span>
    </Container>
  );
}

export default ContactForm;

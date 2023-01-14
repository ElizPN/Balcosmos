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
    <div className='App'>
      <h1>React File Upload Form</h1>
      <form onSubmit={onSubmit}>
        <input type='text' name='name' />
        <input type='email' name='email' />
        <textarea name='message'></textarea>
        <input type='submit' />
      </form>
      <span>{result}</span>
    </div>
  );
}

export default ContactForm;

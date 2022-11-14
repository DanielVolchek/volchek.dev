import axios from "axios";
import React, { useState } from "react";
      // url: "https://formbold.com/s/60Geo",
export default function EmailForm() {
  // Input Change Handling
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleOnChange = (
    event: React.FormEvent<HTMLInputElement|HTMLTextAreaElement>
  ) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.currentTarget.value,
    }));
  };

  // Server State Handling

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }
  
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        onChange={handleOnChange}
        value={inputs.email}
        id="email"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        onChange={handleOnChange}
        value={inputs.subject}
        id="subject"
        type="text"
        name="subject"
        placeholder="Subject"
      />
      <textarea
        onChange={handleOnChange}
        value={inputs.message}
        id="message"
        name="message"
        placeholder="Type your message"
      />
      <button type="submit"> Send Message </button>
    </form>
  );
}

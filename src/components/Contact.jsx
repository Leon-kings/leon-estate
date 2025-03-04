import React, { useState } from "react";
// import { toast } from "react-toastify";
React;
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "18332f32-4abd-435e-a257-a80f3952e489");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      //   alert("Message send Successfull");
      // toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      //   alert("data.message");
      // toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div
  
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      {" "}
      <h3 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h3>
      <p className="text-gray-500 max-w-80 text-center mx-auto mb-8">
        We’re here to help! Reach out to us for any inquiries or assistance.
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message:{" "}
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white rounded py-3 px-12 mb-10">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;

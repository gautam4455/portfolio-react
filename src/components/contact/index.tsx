import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, type InferType } from "yup";

import "./Contact.scss";

const Schema = object({
  name: string()
    .trim()
    .required("Please enter your name")
    .matches(/^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/, "Please enter a valid name"),
  email: string()
    .trim()
    .required("Please enter your email")
    .email("Please enter a valid email"),
  phone: string()
    .trim()
    .required("Please enter your mobile number")
    .matches(/^[0-9+()\-\s]{8,15}$/, "Please enter a valid mobile number"),
  message: string()
    .trim()
    .required("Please enter your message")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

type SchemaType = InferType<typeof Schema>;

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SchemaType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onTouched",
    resolver: yupResolver(Schema),
  });

  const submitForm = async (data: SchemaType) => {
    setSubmitStatus("sending");

    try {
      const payload = new URLSearchParams({
        "form-name": "contact",
        ...data,
      }).toString();

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload,
      });

      if (res.ok) {
        setSubmitStatus("success");
        alert("Message sent successfully!");
        reset();
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
      setSubmitStatus("error");
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact">
      <div className="heading">
        <h1>Contact</h1>
      </div>

      <div className="form-container">
        <form
          name="contact"
          method="POST"
          id="contactForm"
          data-netlify="true"
          onSubmit={handleSubmit(submitForm)}
        >
          {/* Hidden input required for Netlify Forms */}
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              className="form-control"
              {...register("name")}
              placeholder="Enter your name"
              autoComplete="off"
              autoFocus
            />

            {errors.name && (
              <small className="form-text color1">{errors.name.message}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="text"
              className="form-control"
              {...register("email")}
              placeholder="Enter your email"
              autoComplete="off"
            />

            {errors.email && (
              <small className="form-text color1">{errors.email.message}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Mobile Number</label>

            <input
              type="text"
              className="form-control"
              {...register("phone")}
              placeholder="Enter your mobile number"
              autoComplete="off"
            />

            {errors.phone && (
              <small className="form-text color1">{errors.phone.message}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              className="form-control"
              {...register("message")}
              cols={30}
              rows={5}
              placeholder="Send a message"
              autoComplete="off"
            />

            {errors.message && (
              <small className="form-text color1">
                {errors.message.message}
              </small>
            )}
          </div>

          <div className="form-group form-group-btn">
            <button type="submit" id="submitBtn" className="mybtn">
              {submitStatus === "sending" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

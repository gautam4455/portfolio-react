import { useForm } from "react-hook-form";

import "./Contact.scss";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = () => {
    const contactForm = document.querySelector("#contactForm");

    contactForm.reset();

    window.location.reload(false);

    alert("Form Submitted Successfully.");
  };

  return (
    <div id="contact">
      <div className="heading">
        <h1>Contact</h1>
      </div>

      <div className="form-container">
        <form
          action="/"
          method="post"
          id="contactForm"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              className="form-control"
              {...register("name", {
                required: true,
                minLength: 3,
                pattern: /^([a-zA-Z]{3})$/,
              })}
              placeholder="Enter your name"
              autoComplete="off"
            />

            {errors.name && (
              <small className="form-text color1">
                Name atleast 3 character long and should not start with number.
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="text"
              className="form-control"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z][\w-+.]+@[\w-+.]+.[a-zA-Z]{2,}$/,
              })}
              placeholder="Enter your email"
              autoComplete="off"
            />

            {errors.email && (
              <small className="form-text color1">
                Email must be valid. (Example - your_email@gmail.com)
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>

            <input
              type="text"
              className="form-control"
              {...register("phone", { required: true, pattern: /^[\d]{10}$/ })}
              placeholder="Enter your phone"
              autoComplete="off"
            />

            {errors.phone && (
              <small className="form-text color1">
                Phone number must be 10 digit long. It contain only
                numbers(0-9).
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              className="form-control"
              {...register("message", {
                required: true,
                pattern: /^[\w]{2,}[\w-+.@]{2,}/,
              })}
              cols="30"
              rows="5"
              placeholder="Send a message"
              autoComplete="off"
            />

            {errors.message && (
              <small className="form-text color1">Please enter message.</small>
            )}
          </div>

          <div className="form-group form-group-btn">
            <button type="submit" id="submitBtn" className="mybtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

"use client";

import { useState } from "react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import Style from "./contactus.module.css";
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const router = useRouter();
  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Contact Us" },
  ];

  const subtitle = "We'd Love to Hear From You";
  const title = "Let's Connect";
  const description =
    "Reach out to Muvro Technologies for innovative, fully in-house designed and manufactured intralogistics solutions—fast delivery, reliable service, and lasting value from our Delhi NCR facility.";
  const image = "/images/ContactImage.webp";
  const formHeading = "Your Voice Matters";
  const formText =
    "Fill out the form below and our team will get back to you as soon as possible.";
  const enquiryOptions = [
    { value: "products", label: "For Products" },
    { value: "services", label: "For Services" },
    { value: "others", label: "For Others" },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    enquiryType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { fullName, email, enquiryType, message } = formData;
    if (!fullName.trim()) return "Please enter your full name.";
    if (!email.trim()) return "Please enter your email.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email.";
    if (!enquiryType) return "Please select enquiry type.";
    if (!message.trim()) return "Please enter your message.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const error = validateForm();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem(
          "thankYouData",
          JSON.stringify({
            heading: `Thank You, ${formData.fullName || "Visitor"}!`,
            content: `We’ve received your enquiry and will get back to you shortly at ${formData.email} or ${formData.phone}.`,
          })
        );
        setStatus({ type: "success", message: "Enquiry submitted successfully!" });
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          enquiryType: "",
          message: "",
        });
        setTimeout(() => {
          router.push("/thank-you");
        }, 2000);
      } else {
        setStatus({ type: "error", message: data.error || "Submission failed." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong." });
    }

    setLoading(false);
  };

  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />

      <section
        className={Style.contact_page}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container">
          {/* Header Section */}
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-xl-8 pb-4">
              <span
                className="section-label-center mb-3"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                {subtitle}
              </span>

              <h2
                className="text-center mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {title.split(" ").map((word, i) =>
                  word.toLowerCase() === "connect" ? (
                    <span key={i}>{word} </span>
                  ) : (
                    word + " "
                  )
                )}
              </h2>

              <p
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {description}
              </p>
            </div>
          </div>

          {/* Image + Form Section */}
          <div className="row justify-content-center">
            <div
              className="col-xl-7 pe-xl-0"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="900"
            >
              <div className={Style.image_block}>
                <img
                  src={image}
                  alt="Contact Us"
                  className="img-fluid"
                />
              </div>
            </div>

            <div
              className="col-xl-5 ps-xl-0"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="900"
            >
              <div className={Style.form_block}>
                <h4 data-aos="fade-up" data-aos-delay="550">
                  {formHeading}
                </h4>
                <p data-aos="fade-up" data-aos-delay="600">
                  {formText}
                </p>

                <form
                  className={Style.contactform}
                  onSubmit={handleSubmit}
                  noValidate
                  data-aos="zoom-in"
                  data-aos-delay="650"
                >
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="form-control"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    data-aos="fade-up"
                    data-aos-delay="700"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    data-aos="fade-up"
                    data-aos-delay="750"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-aos="fade-up"
                    data-aos-delay="800"
                  />

                  <select
                    name="enquiryType"
                    className="form-select"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                    data-aos="fade-up"
                    data-aos-delay="850"
                  >
                    <option value="">Select Enquiry Type</option>
                    {enquiryOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <textarea
                    name="message"
                    placeholder="Type Your Message Here"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    data-aos="fade-up"
                    data-aos-delay="900"
                  ></textarea>

                  {status.message && (
                    <p
                      data-aos="fade-up"
                      data-aos-delay="950"
                      style={{
                        color: status.type === "error" ? "red" : "green",
                        marginBottom: "10px",
                      }}
                    >
                      {status.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="mbtn mbtn-primary"
                    disabled={loading}
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                  >
                    {loading ? "Submitting..." : "Submit query"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

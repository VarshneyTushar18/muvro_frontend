"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiCheckboxCircleLine, RiErrorWarningLine } from "@remixicon/react";
import styles from "./Newsletter.module.css";

export default function Newsletter({ heading }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/subscribe-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsError(false);
        setMessage(data.message);
        setEmail("");
        sessionStorage.setItem(
          "thankYouData",
          JSON.stringify({
            heading: "Subscription Successful!",
            content: `Thank you for subscribing with ${email}. You will now receive our latest updates and newsletters.`,
          })
        );

        setTimeout(() => {
          router.push("/thank-you");
        }, 1000);
      } else {
        setIsError(true);
        setMessage(data.error);
      }
    } catch (err) {
      setIsError(true);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={`container pb-5 pt-4`}>
      <div className="row align-items-center">
        {/* Left Text */}
        <div className="col-lg-7 col-md-12 mb-3 mb-lg-0">
          <h4 className={styles.newsletterTitle}>
            {heading}
          </h4>
        </div>

        {/* Right Form */}
        <div className="col-lg-5 col-md-12">
          <form onSubmit={handleSubmit} className={`${styles.newsletterForm}`}>
            <input
              type="email"
              placeholder="Enter email address"
              className={styles.newsletterInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className={`mbtn mbtn-primary ${styles.newsletterBtn}`}
            >
              Submit
            </button>
          </form>

          {message && (
            <p
              className={`${isError ? "text-danger" : "text-success"} d-flex align-items-center gap-1 mt-2`}
              style={{ fontSize: "0.9rem" }}
            >
              {isError ? (
                <RiErrorWarningLine size={18} />
              ) : (
                <RiCheckboxCircleLine size={18} />
              )}
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

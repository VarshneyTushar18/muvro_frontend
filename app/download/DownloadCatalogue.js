"use client";

import { useState, useRef } from "react";
import { RiDownload2Line, RiCloseLine } from "@remixicon/react";
import TurnstileWidget from "../components/common/TurnstileWidget";
import { validateBusinessEmail } from "../utilities/businessEmail";
import Style from "./download.module.css";

export default function DownloadCatalogue({ items = [] }) {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [email, setEmail] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const openModal = (catalogue) => {
    setSelected(catalogue);
    setEmail("");
    setCompanyWebsite("");
    setTurnstileToken("");
    setError("");
    setStatus({ type: "", message: "" });
    setShowModal(true);
  };

  const closeModal = () => {
    if (loading) return;
    setShowModal(false);
    setSelected(null);
    setEmail("");
    setCompanyWebsite("");
    setTurnstileToken("");
    setError("");
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const validationError = validateBusinessEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken) {
      setError("Please complete the CAPTCHA verification.");
      return;
    }

    if (!selected?.url) {
      setError("Catalogue file is unavailable. Please try again later.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/download-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          catalogueTitle: selected.title,
          catalogueFileName: selected.fileName,
          catalogueUrl: selected.url,
          turnstileToken,
          companyWebsite,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message: `Thank you! Your free download link has been sent to ${email.trim()}. Please check your inbox.`,
        });
        setEmail("");
        setTurnstileToken("");
        setTimeout(() => {
          setShowModal(false);
          setSelected(null);
          setStatus({ type: "", message: "" });
        }, 3500);
      } else {
        setTurnstileToken("");
        turnstileRef.current?.reset();
        setStatus({
          type: "error",
          message: data.error || "Failed to send download. Please try again.",
        });
      }
    } catch {
      setTurnstileToken("");
      turnstileRef.current?.reset();
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="400">
        <div className="col-xl-10 col-lg-10 col-md-11 col-sm-12">
          <table
            className="table table-bordered table-striped table-hover"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="900"
          >
            <tbody>
              <tr data-aos="fade-down" data-aos-delay="550">
                <th>S.No</th>
                <th>Catalogue Name</th>
                <th>Action</th>
              </tr>

              {items.length > 0 ? (
                items.map((catalogue, index) => (
                  <tr
                    key={catalogue.id ?? index}
                    data-aos="fade-up"
                    data-aos-delay={600 + index * 100}
                    data-aos-duration="700"
                  >
                    <td>{index + 1}</td>
                    <td>{catalogue.title}</td>
                    <td>
                      <button
                        type="button"
                        className={Style.downloadBtn}
                        onClick={() => openModal(catalogue)}
                        data-aos="zoom-in"
                        data-aos-delay={650 + index * 100}
                      >
                        <RiDownload2Line /> Download
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr data-aos="fade-up" data-aos-delay="700" data-aos-duration="800">
                  <td colSpan="3" className="text-center text-muted py-4">
                    No catalogues available at the moment.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && selected && (
        <div className={Style.modalBackdrop} onClick={closeModal} role="presentation">
          <div
            className={`${Style.modalContent} ${Style.form_block}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-modal-title"
          >
            <div className={Style.modalHeader}>
              <h3 id="download-modal-title" className="fs-4 mb-0">
                Get Your Free Download
              </h3>
              <button
                type="button"
                className={Style.closeBtn}
                onClick={closeModal}
                aria-label="Close"
                disabled={loading}
              >
                <RiCloseLine size={22} />
              </button>
            </div>

            <p className={Style.modalHint}>
              Please enter your company email address and we will send the
              catalogue download link to your inbox. Personal emails (Gmail,
              Yahoo, Outlook, etc.) are not accepted.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="companyWebsite"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                style={{ display: "none", position: "absolute", left: "-9999px" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Company Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  disabled={loading || status.type === "success"}
                  autoFocus
                  autoComplete="email"
                />
              </div>

              <div className={Style.turnstileContainer}>
                <TurnstileWidget
                  ref={turnstileRef}
                  onVerify={(token) => {
                    setTurnstileToken(token);
                    if (error) setError("");
                  }}
                  onExpire={() => setTurnstileToken("")}
                  onError={() => setTurnstileToken("")}
                />
              </div>

              {error && <small className={Style.errorText}>{error}</small>}

              {status.message && (
                <p
                  className={
                    status.type === "success" ? Style.successText : Style.errorText
                  }
                >
                  {status.message}
                </p>
              )}

              <div className={Style.modalActions}>
                <button
                  type="submit"
                  className="mbtn mbtn-small mbtn-primary"
                  disabled={loading || status.type === "success"}
                >
                  {loading ? "Sending..." : "Send Download Link"}
                </button>
                <button
                  type="button"
                  className="mbtn mbtn-small mbtn-secondary"
                  onClick={closeModal}
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

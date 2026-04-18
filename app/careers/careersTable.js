"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Style from "./careers.module.css";
import { RiErrorWarningLine } from "@remixicon/react";

export default function CareersTable({ careersData }) {
    const router = useRouter();
    const [expandedRow, setExpandedRow] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        ctc: "",
        experience: "",
        location: "",
        resume: null,
    });
    const [errors, setErrors] = useState({});

    const toggleExpand = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    const openModal = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            ctc: "",
            experience: "",
            location: "",
            resume: null,
        });
        setErrors({});
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "resume") {
            setFormData({ ...formData, resume: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        setErrors((prev) => ({ ...prev, [name]: "" })); // clear specific field error
    };

    const validateForm = () => {
        const newErrors = {};
        const nameRegex = /^[A-Za-z\s]{3,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        const alphaNumDashRegex = /^[A-Za-z0-9\s-]+$/;

        if (!formData.name.trim()) {
            newErrors.name = "Please enter your full name.";
        } else if (!nameRegex.test(formData.name.trim())) {
            newErrors.name = "Name should contain only letters and spaces.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email address.";
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Please enter your phone number.";
        } else if (!phoneRegex.test(formData.phone.trim())) {
            newErrors.phone = "Please enter a valid 10-digit phone number.";
        }

        if (formData.ctc && !alphaNumDashRegex.test(formData.ctc.trim())) {
            newErrors.ctc = "CTC should contain only letters, numbers, spaces, or hyphens.";
        }

        if (formData.experience && !alphaNumDashRegex.test(formData.experience.trim())) {
            newErrors.experience = "Experience should contain only letters, numbers, spaces, or hyphens.";
        }
        if (!formData.location.trim()) {
            newErrors.location = "Please enter your current location.";
        }

        if (!formData.resume) {
            newErrors.resume = "Please upload your resume.";
        } else {
            const allowedTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "image/jpeg",
                "image/png",
            ];
            if (!allowedTypes.includes(formData.resume.type)) {
                newErrors.resume = "Only PDF, DOC, DOCX, JPG, or PNG files are allowed.";
            } else if (formData.resume.size > 3 * 1024 * 1024) {
                newErrors.resume = "File size must be less than 3MB.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const formPayload = new FormData();
            formPayload.append("name", formData.name);
            formPayload.append("email", formData.email);
            formPayload.append("phone", formData.phone);
            formPayload.append("ctc", formData.ctc);
            formPayload.append("experience", formData.experience);
            formPayload.append("location", formData.location);
            formPayload.append("applyingFor", selectedJob.vacancyFor);
            formPayload.append("resume", formData.resume);

            const res = await fetch("/api/career-enquiry", {
                method: "POST",
                body: formPayload,
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setTimeout(() => {
                    sessionStorage.setItem(
                        "thankYouData",
                        JSON.stringify({
                            heading: `Thank You, ${name || "Applicant"}!`,
                            content: `We’ve received your application for the position of ${selectedJob.vacancyFor}. 
                                    Our HR team will review your profile and contact you at ${email || "your registered email"} or ${phone || "your phone number"} if shortlisted.`,
                        })
                    );
                    router.push("/thank-you");
                }, 2000);
                closeModal();
            } else {
                alert(data.message || "Something went wrong while submitting.");
            }
        } catch (error) {
            console.error("Submit Error:", error);
            alert("Failed to send application. Please try again later.");
        }
    };

    return (
        <>
            <div className={Style.careerTableSection}>
                {careersData.length > 0 ? (
                    <>
                        <h3 className="text-center mb-4">Current Openings</h3>
                        <div className="table-responsive">
                            <table className={Style.careerTable}>
                                <thead>
                                    <tr>
                                        <th>Vacancy For</th>
                                        <th>Work Experience</th>
                                        <th>No. of Positions</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {careersData.map((job) => (
                                        <React.Fragment key={job.id}>
                                            <tr>
                                                <td>{job.vacancyFor}</td>
                                                <td>{job.workExperience}</td>
                                                <td>{job.noOfPositions}</td>
                                                <td>
                                                    <button
                                                        onClick={() => toggleExpand(job.id)}
                                                        className={`mbtn mbtn-secondary ${Style.readMoreBtn}`}
                                                    >
                                                        {expandedRow === job.id ? "Hide Details" : "Read More"}
                                                    </button>
                                                </td>
                                            </tr>
                                            {expandedRow === job.id && (
                                                <tr className={Style.subRow}>
                                                    <td colSpan="4">
                                                        <div className={Style.subTableWrapper}>
                                                            <table className={Style.subTable}>
                                                                <tbody>
                                                                    <tr>
                                                                        <th>Location</th>
                                                                        <td>{job.location}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Qualification</th>
                                                                        <td>{job.qualification}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Work Experience</th>
                                                                        <td>{job.workExperience}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Salary</th>
                                                                        <td>{job.salary}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Required Skills</th>
                                                                        <td>{job.requiredSkills}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Job Profile</th>
                                                                        <td>{job.jobProfile}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                            <div className={Style.applyBtnWrapper}>
                                                                <button
                                                                    className="mbtn mbtn-primary"
                                                                    onClick={() => openModal(job)}
                                                                >
                                                                    Apply Now
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : (
                    <p className="text-center fs-3 d-flex align-items-center justify-content-center gap-2">
                        <RiErrorWarningLine /> Currently there are no open positions
                    </p>
                )}
            </div>

            {showModal && (
                <div className={Style.modalBackdrop}>
                    <div className={`${Style.modalContent} ${Style.form_block}`}>
                        <h3 className="fs-4">Apply for {selectedJob.vacancyFor}</h3>
                        <form onSubmit={handleSubmit} className={Style.applyForm}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <small className={Style.errorText}>{errors.name}</small>}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <small className={Style.errorText}>{errors.email}</small>}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <small className={Style.errorText}>{errors.phone}</small>}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="ctc"
                                    placeholder="Current CTC"
                                    value={formData.ctc}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="experience"
                                    placeholder="Experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Current Location"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                                {errors.location && <small className={Style.errorText}>{errors.location}</small>}
                            </div>

                            <div className="mb-3">
                                <input
                                    type="file"
                                    name="resume"
                                    accept=".pdf,.doc,.docx,.jpg,.png"
                                    onChange={handleChange}
                                />
                                {errors.resume && <small className={Style.errorText}>{errors.resume}</small>}
                            </div>

                            <div className={Style.modalActions}>
                                <button type="submit" className="mbtn mbtn-small mbtn-primary">
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="mbtn mbtn-small mbtn-secondary"
                                    onClick={closeModal}
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

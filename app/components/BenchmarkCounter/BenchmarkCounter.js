"use client";
import { useEffect, useState } from "react";

const Counter = ({ target, start, color }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let current = 0;
        const increment = target / 100;

        const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(current));
            }
        }, 20);

        return () => clearInterval(timer);
    }, [start, target]);

    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (count / 100) * circumference;

    return (
        <div style={{ position: "relative", width: "140px", height: "140px" }}>
            <svg
                width="140"
                height="140"
                style={{ transform: "rotate(-90deg)" }}
            >
                {/* Background circle */}
                <circle
                    cx="70"
                    cy="70"
                    r={radius}
                    fill="none"
                    stroke="#e9ecef"
                    strokeWidth="8"
                />
                {/* Progress circle */}
                <circle
                    cx="70"
                    cy="70"
                    r={radius}
                    fill="none"
                    stroke={color || "#007bff"}
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.3s ease" }}
                />
            </svg>
            {/* Center text */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    zIndex: 1
                }}
            >
                <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: color || "#007bff" }}>
                    {count}
                </div>
            </div>
            {/* Percentage top right */}
            <div
                style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    fontSize: "0.9rem",
                    color: color || "#007bff",
                    fontWeight: "600",
                    zIndex: 2
                }}
            >
                %
            </div>
        </div>
    );
};

const BenchmarkCounter = ({ data }) => {
    const [startCounter, setStartCounter] = useState(false);

    useEffect(() => {
        const section = document.getElementById("benchmark-section");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounter(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="pb-5" id="benchmark-section">
            <div className="container">
                <div className="row">
                    <h3
                        className="mb-5 text-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Customer Satisfaction & <span>Benchmarks</span>
                    </h3>

                    {data.map((item, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="counter-box d-flex flex-column align-items-center gap-3 p-4 shadow-sm rounded-4 h-100 text-center transition-all"
                                style={{
                                    backgroundColor: "#f8f9fa",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    cursor: "pointer"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
                                }}
                            >
                                <div className={`circle ${item.color}`} style={{ marginBottom: "1rem" }}>
                                    <Counter
                                        target={item.value}
                                        start={startCounter}
                                        color={item.color}
                                    />
                                </div>

                                <div className="content-wrapper">
                                    <h6 className="text-capitalize mb-2" style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                                        {item.title}
                                    </h6>

                                    <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
                                        {item.desc}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenchmarkCounter;
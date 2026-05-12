"use client";
import { useEffect, useState } from "react";

const Counter = ({ target, start }) => {
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

    return <>{count}</>;
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
        <section className="pb-0" id="benchmark-section">
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
                        <div className="col-md-6 mb-4" key={index}>
                            <div className="counter-box d-flex align-items-center gap-3 p-3 shadow-sm rounded-4 bg-white">

                                <div className={`circle ${item.color}`}>
                                    <Counter
                                        target={item.value}
                                        start={startCounter}
                                    />
                                    %
                                </div>

                                <div>
                                    <h6 className="text-capitalize mb-1">
                                        {item.title}
                                    </h6>

                                    <p className="text-muted mb-0">
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
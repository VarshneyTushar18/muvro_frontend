"use client";

import { useState } from "react";
import styles from "./ConveyorTabs.module.css";
import Link from "next/link";

export default function ConveyorTabs({ tabsData }) {
  const tabs = tabsData || [
    {
      id: "beltconveyor",
      title: "Belt Conveyor",
      heading: "Belt Conveyor",
      products: [
        {
          name: "PVC Belt Conveyor",
          image: "/images/PVC-Belt-Conveyor_trans.webp",
          url: "/pvc-belt-conveyor",
        },
        {
          name: "Belt Inclined / Declined Conveyor",
          image: "/images/belt-inclined-declined-conveyor-image.webp",
          url: "/belt-inclined-declined-conveyor",
        },
        {
          name: "Curve Conveyor Belt Type",
          image: "/images/curve-conveyor-belt-type-image.webp",
          url: "/curve-conveyor-belt-type",
        },
        {
          name: "Merger Conveyor Belt Type",
          image: "/images/merger-conveyor-belt-type-image.webp",
          url: "/merger-conveyor-belt-type",
        },
        {
          name: "Belt Over Roller Conveyor",
          image: "/images/belt-over-roller-conveyor-image.webp",
          url: "/belt-over-roller-conveyor",
        },
        {
          name: "Gapper Conveyor",
          image: "/images/gapper-conveyor-image.webp",
          url: "/gapper-conveyor",
        },
        {
          name: "Tilt Belt Conveyor",
          image: "/images/tilt-belt-conveyors.webp",
          url: "/tilt-belt-conveyor",
        },
        {
          name: "Belt Conveyor Bulk Handling",
          image: "/images/belt-conveyor-bulk-handling-image.webp",
          url: "/belt-conveyor-bulk-handling",
        },
        {
          name: "Timing Belt Conveyor",
          image: "/images/timing-belt-conveyor-image.webp",
          url: "/timing-belt-conveyor",
        },
      ],
    },
    {
      id: "rollerconveyor",
      title: "Roller Conveyor",
      heading: "Roller Conveyor",
      products: [
        {
          name: "Powerised Roller Conveyor",
          image: "/images/powered-roller-conveyor-image.webp",
          url: "/powered-roller-conveyor",
        },
        {
          name: "ZPA roller conveyor",
          image: "/images/zpa-roller-conveyor-image.webp",
          url: "/zpa-roller-conveyor",
        },
        {
          name: "Flat Belt Driven Live Roller Conveyor",
          image: "/images/belt-driven-live-roller-conveyor-image.webp",
          url: "/belt-driven-live-roller-conveyor",
        },
        {
          name: "Accumulation Roller Conveyor",
          image: "/images/accumulation-roller-conveyor-image.webp",
          url: "/accumulation-roller-conveyor",
        },
        {
          name: "Roller Marger Conveyor",
          image: "/images/roller-marger-conveyor-image.webp",
          url: "/roller-marger-conveyor",
        },
        {
          name: "Curve Conveyor Roller Type",
          image: "/images/roller-curve-conveyor-image.webp",
          url: "/roller-curve-conveyor",
        },
        {
          name: "Stub Roller Conveyor",
          image: "/images/stub-roller-conveyor-image.webp",
          url: "/stub-roller-conveyor",
        },
        {
          name: "Herringbone Roller Conveyor",
          image: "/images/herringbone-roller-conveyor-image.webp",
          url: "/herringbone-roller-conveyor",
        },
        {
          name: "Free Flow Roller Conveyor",
          image: "/images/free-flow-roller-conveyor-image.webp",
          url: "/free-flow-roller-conveyor",
        },
        {
          name: "Gravity Type Roller Conveyor",
          image: "/images/gravity-type-roller-conveyor-image.webp",
          url: "/#",
        },
        {
          name: "Pu Coated roller conveyor",
          image: "/images/pu-coated-roller-conveyor-image.webp",
          url: "/pu-coated-roller-conveyor",
        }
      ]
    },
    {
      id: "modularconveyor",
      title: "Modular Conveyor",
      heading: "Modular Conveyor",
      products: [
        {
          name: "Plastic Modular belt conveyor",
          image: "/images/plastic-modular-belt-conveyor-image.webp",
          url: "/plastic-modular-belt-conveyor",
        },
        {
          name: "Side Flezing Curve conveyor modular belt type",
          image: "/images/side-flexing-curve-conveyor-image.webp",
          url: "/side-flexing-curve-conveyor",
        },
        {
          name: "ZTR Curve conveyor",
          image: "/images/zero-tangent-radius-conveyor-image.webp",
          url: "/zero-tangent-radius-conveyor",
        },
        {
          name: "Plastic Modular belt conveyor Top type",
          image: "/images/modular-roller-top-conveyor-image.webp",
          url: "/modular-roller-top-conveyor",
        },
      ]
    },
    {
      id: "chainconveyor",
      title: "Chain Conveyor",
      heading: "Chain Conveyor",
      products: [
        {
          name: "Slat Chain Conveyor",
          image: "/images/slat-chain-conveyor-image.webp",
          url: "/slat-chain-conveyor",
        },
        {
          name: "Free Flow Chain Conveyor",
          image: "/images/free-flow-chain-conveyor-image.webp",
          url: "/free-flow-chain-conveyor",
        },
        {
          name: "Pallet Transfer Chain Conveyor",
          image: "/images/pallet-transfer-chain-conveyor-image.webp",
          url: "/pallet-transfer-chain-conveyor",
        },
        {
          name: "Snap Chain Conveyor",
          image: "/images/snap-chain-conveyor-image.webp",
          url: "/snap-chain-conveyor",
        },
      ]
    },
    {
      id: "telescopicconveyor",
      title: "Telescopic Conveyor",
      heading: "Telescopic Conveyor",
      products: [
        {
          name: "Telescopic Conveyor",
          image: "/images/telescopic-conveyor-image.webp",
          url: "/telescopic-conveyor",
        },
      ]
    },
    {
      id: "spiralconveyor",
      title: "Spiral Conveyor",
      heading: "Spiral Conveyor",
      products: [
        {
          name: "Powerised Spiral Chain Conveyor",
          image: "/images/powerised-spiral-chain-conveyor-image.webp",
          url: "/powerised-spiral-chain-conveyor",
        },
        {
          name: "Gravity Type Spiral Roller Conveyor",
          image: "/images/gravity-type-spiral-roller-conveyor-image.webp",
          url: "/gravity-type-spiral-roller-conveyor",
        },
        {
          name: "Spiral Chutes Conveyor",
          image: "/images/spiral-chute-conveyor-image.webp",
          url: "/spiral-chute-conveyor",
        }
      ],
    },
    {
      id: "overheadconveyor",
      title: "Over Head Conveyor",
      heading: "Over Head Conveyor",
      products: [
        {
          name: "Over Head Conveyor",
          image: "/images/overhead-conveyor-image.webp",
          url: "/overhead-conveyor",
        }
      ],
    },
    {
      id: "ems",
      title: "EMS",
      heading: "EMS",
      products: [
        {
          name: "Electrified Monorail System",
          image: "/images/electrified-monorail-system-image.webp",
          url: "/electrified-monorail-system",
        }
      ],
    },
    {
      id: "lifts",
      title: "Lifts",
      heading: "Lifts",
      products: [
        {
          name: "",
          image: "",
          url: "#",
        }
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className={styles.section}>
      <div className="container">

        {/* Tabs Navigation */}
        <ul className={`nav nav-tabs ${styles.tabs}`}>

          <li className="nav-item">
            <button
              className={`nav-link ${styles.tabBtn} ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
              type="button"
            >
              Conveyor System
            </button>
          </li>

          {tabs.map((tab) => (
            <li className="nav-item" key={tab.id}>
              <button
                className={`nav-link ${styles.tabBtn} ${activeTab === tab.id ? "active" : ""
                  }`}
                onClick={() => setActiveTab(tab.id)}
                type="button"
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Tabs Content */}
        <div className={`tab-content ${styles.tabContent}`}>
          {tabs.map(
            (tab) =>
              (activeTab === "all" || activeTab === tab.id) && (
                <div key={tab.id} className="tab-pane pt-4 show active">
                  <h5 className="pb-3">{tab.heading}</h5>
                  <div className={styles.productGrid}>
                    {tab.products.map((prod) => (
                      <Link
                        key={prod.name}
                        href={prod.url}
                        className={styles.productCard}
                      >
                        <div className={styles.productCardImage}>
                          <img src={prod.image} alt={prod.name} />
                        </div>

                        <h6 className={styles.productName}>{prod.name}</h6>
                      </Link>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>

      </div>
    </section>
  );
}

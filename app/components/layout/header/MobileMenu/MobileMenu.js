"use client";
import { useState } from "react";
import Link from "next/link";
import { RiCloseLine, RiArrowRightSLine, RiArrowLeftLine } from "@remixicon/react";
import styles from "./MobileMenu.module.css";

const megaMenuData = {
  Solutions: {
    "Intralogistics": {
      categories: [
        {
          name: "ASRS Solutions",
          products: [
            {
              name: "NaviGO Pallet Shuttle ASRS System",
              subtitle: "High-Density Storage",
              image: "images/navigo-solution.webp",
              url: "/navigo-pallet-shuttle-asrs-system"
            },
            {
              name: "Radio Shuttle System",
              subtitle: "ASRS Solutions",
              image: "images/radio-shuttle-system.webp",
              url: "/radio-shuttle-system"
            },
            {
              name: "Pallet ASRS Stacker Crane",
              subtitle: "Maximize Vertical Storage",
              image: "images/Pallet-ASRS-Stacker-Crane-Image.webp",
              url: "/asrs-stacker-cranes"
            },
            {
              name: "Mini Load ASRS Shuttle System",
              subtitle: "ASRS Solutions",
              image: "images/Mini-Load-ASRS-Shuttle-System.webp",
              url: "/mini-load-asrs-shuttle-system"
            },
            // {
            //   name: "Bin to Person",
            //   subtitle: "ASRS Solutions",
            //   image: "/images/not_found.png",
            //   url: "/bin-to-person"
            // },
          ],
        },
        {
          name: "Sorting Solutions",
          products: [
            // {
            //   name: "3D Smart Sorter (ICS)",
            //   subtitle: "10Kg Max Weight",
            //   image: "https://muvro.tech2globe.co.in/uploads/3d_sorter_bg_removed_c28b208916.png",
            //   url: "/3d-smart-sorter-ics"
            // },
            {
              name: "High Speed Cross Belt Loop Sorter",
              subtitle: "Interalogitics",
              image: "images/high-speed-cross-belt-sorter-image.webp",
              url: "/high-speed-cross-belt-loop-sorter"
            },
            {
              name: "ZedSort™ The LIN Linear Cross Belt Sorter",
              subtitle: "Fast. Precise. Compact.",
              image: "https://muvro.tech2globe.co.in/uploads/zedsort_the_lin_linear_cross_belt_sorter_b8655352da.webp",
              url: "/zedsort-the-lin-linear-cross-belt-sorter"
            },
            {
              name: "Swing Wheel Sorter",
              subtitle: "0.1 kg to 35 kg",
              image: "https://muvro.tech2globe.co.in/uploads/Swing_Wheel_Sorter_Assemly_04_2048x1396_removebg_preview_0684caaa0e.png",
              url: "/swing-wheel-sorter"
            },
            {
              name: "Tilt Tray Sorter System",
              subtitle: "Sorting Solutions",
              image: "https://muvro.tech2globe.co.in/uploads/Tilt_Tray_Sorter_Assy_07_1_e1741257962489_removebg_preview_925cd8dee5.png",
              url: "/tilt-tray-sorter-system"
            },
            // {
            //   name: "Fast Sorter (Micro Sorter)",
            //   subtitle: "Sorting Solutions",
            //   image: "https://muvro.tech2globe.co.in/uploads/product01_cf91e2b5ef.png",
            //   url: "/fast-sorter-micro-sorter"
            // },
            // {
            //   name: "Mini Sorter",
            //   subtitle: "Sorting Solutions",
            //   image: "/images/not_found.png",
            //   url: "/mini-sorter"
            // },
            // {
            //   name: "Flash Sorter",
            //   subtitle: "Sorting Solutions",
            //   image: "/images/not_found.png",
            //   url: "/flash-sorter"
            // },
          ],
        },
        {
          name: "Secondary Sorting Solutions",
          products: [
            {
              name: "Secondary Sorting",
              subtitle: "Flexible Integration Capabilities",
              image: "images/Secondary-Sorting-Image-1.webp",
              url: "/secondary-sorting"
            },
          ]
        },
        {
          name: "Fulfilment Solution",
          products: [
            {
              name: "Inbound",
              subtitle: "Fulfilment Solution",
              image: "/images/inbound.webp",
              url: "#"
            },
            {
              name: "Processing",
              subtitle: "Fulfilment Solution",
              image: "/images/processing.webp",
              url: "#"
            },
            {
              name: "Out Bound",
              subtitle: "Fulfilment Solution",
              image: "/images/outbound.webp",
              url: "#"
            },
          ],
        },
        {
          name: "Quick Commerce",
          products: [
            {
              name: "Micro Fulfilment",
              subtitle: "Solutions",
              image: "images/micr-fulfilment-Img.webp",
              url: "/micro-fulfilment"
            },
            {
              name: "3D Smart Sorter (ICS)",
              subtitle: "10Kg Max Weight",
              image: "https://muvro.tech2globe.co.in/uploads/3d_sorter_bg_removed_c28b208916.png",
              url: "/3d-smart-sorter-ics"
            },
            {
              name: "Good To Person (Bin to Person)",
              subtitle: "Quick Commerce",
              image: "/images/bin-to-person.webp",
              url: "/bin-to-person"
            },
            {
              name: "Pick to Light",
              subtitle: "Quick Commerce",
              image: "/images/PTL.webp",
              url: "/pick-to-light"
            },
            {
              name: "Dark Store",
              subtitle: "Quick Commerce",
              image: "/images/not_found.png",
              url: "#"
            },
            // {
            //   name: "Smart Sorter",
            //   subtitle: "Quick Commerce",
            //   image: "/images/not_found.png",
            //   url: "/smart-sorter"
            // },
            {
              name: "Packing & Put Away",
              subtitle: "Quick Commerce",
              image: "/images/pack-put.webp",
              url: "#"
            },
            // {
            //   name: "Volume Distribution System",
            //   subtitle: "Quick Commerce",
            //   image: "/images/not_found.png",
            //   url: "/volume-distribution-system"
            // },
          ],
        },
        {
          name: "Mobile Robots",
          products: [

            {
              name: "AMR",
              subtitle: "Mobile Robots",
              image: "https://muvro.tech2globe.co.in/uploads/amr_image_10436d8ec7.webp",
              url: "/autonomous-mobile-robot"
            },
            {
              name: "AGV",
              subtitle: "Mobile Robots",
              image: "https://muvro.tech2globe.co.in/uploads/agv_image_a157089136.webp",
              url: "/automated-guided-vehicle"
            },
            // {
            //   name: "AGV Stacker Crane",
            //   subtitle: "Mobile Robots",
            //   image: "/images/not_found.png",
            //   url: "/#"
            // },
            // {
            //   name: "Mini Cranes",
            //   subtitle: "Mobile Robots",
            //   image: "/images/not_found.png",
            //   url: "/#"
            // },
          ],
        },

      ]
    },
    "Automotive": {
      categories: [
        {
          name: "Automotive",
          products: [
            { name: "Assembly Lines", subtitle: "Automotive", image: "/images/not_found.png", url: "#" },
            { name: "Gearbox Assembly Lines", subtitle: "Automotive", image: "/images/not_found.png", url: "#" },
            { name: "Differential Case Assembly Lines", subtitle: "Automotive", image: "/images/not_found.png", url: "#" },
            { name: "Engine Assembly Lines", subtitle: "Automotive", image: "/images/not_found.png", url: "#" },
            { name: "Axle Line and Frame", subtitle: "Automotive", image: "/images/not_found.png", url: "#" },
            { name: "Tire & Wheel Conveyor System", subtitle: "Automotive", image: "/images/not_found.png", url: "#" },
            { name: "Sorting and Storage", subtitle: "Automotive", image: "/images/not_found.png", url: "#" },
            { name: "SPMs", subtitle: "Automotive", image: "/images/not_found.png", url: "#" },
            { name: "Ergonomic Handling System", subtitle: "Automotive", image: "/images/not_found.png", url: "#" },
            { name: "EMS System", subtitle: "Automotive", image: "/images/not_found.png", url: "#" },
            { name: "Mobile Robots", subtitle: "Automotive", image: "/images/not_found.png", url: "#" },
            { name: "Rail Guided Vehicle (RGVs)", subtitle: "Automotive", image: "/images/not_found.png", url: "#" },
            { name: "Fixtures and Gripper", subtitle: "Automotive", image: "/images/not_found.png", url: "#" }
          ],
        },
      ],
    },

    "White Goods": {
      categories: [
        {
          name: "White Goods",
          products: [
            { name: "IDU _ VRV - Assembly Lines", subtitle: "White Goods", image: "/images/not_found.png", url: "#" },
            { name: "ODU _ VRV - Assembly Lines", subtitle: "White Goods", image: "/images/not_found.png", url: "#" },
            { name: "IDU _ RA - Assembly Lines", subtitle: "White Goods", image: "/images/not_found.png", url: "#" },
            { name: "ODU_ RA - Assembly Lines", subtitle: "White Goods", image: "/images/not_found.png", url: "#" },
            { name: "Refrigerator Assembly Lines", subtitle: "White Goods", image: "/images/not_found.png", url: "#" },
            { name: "Washing Machine Assy Line", subtitle: "White Goods", image: "/images/not_found.png", url: "#" },
            { name: "Leak Testing Machines", subtitle: "White Goods", image: "/images/not_found.png", url: "#" },
            { name: "FG Transfer System", subtitle: "White Goods", image: "/images/not_found.png", url: "#" },
            { name: "Continuous Vertical Lift", subtitle: "White Goods", image: "/images/not_found.png", url: "#" },
            { name: "Robotics Palletizer", subtitle: "White Goods", image: "/images/not_found.png", url: "#" },
            { name: "ASRS System", subtitle: "White Goods", image: "/images/not_found.png", url: "#" }
          ],
        },
      ],
    },

    "Food & Beverages": {
      categories: [
        {
          name: "Food & Beverages",
          products: [
            { name: "End of Line (Conveyor Line)", subtitle: "Food & Beverages", image: "/images/not_found.png", url: "#" },
            { name: "FG Lines", subtitle: "Food & Beverages", image: "/images/not_found.png", url: "#" },
            { name: "Spiral Conveyor", subtitle: "Food & Beverages", image: "/images/not_found.png", url: "#" },
          ],
        },
      ],
    },

    "Waste Management": {
      categories: [
        {
          name: "Waste Management",
          products: [
            { name: "Bulk Handling Conveyor", subtitle: "Waste Management", image: "/images/not_found.png", url: "#" },
            { name: "Truckey Projects", subtitle: "Waste Management", image: "/images/not_found.png", url: "#" },
          ],
        },
      ],
    },

    "Packaging Industry": {
      categories: [
        {
          name: "Packaging Industry",
          products: [
            { name: "Carton Handling Conveyor", subtitle: "Packaging Industry", image: "/images/not_found.png", url: "#" },
            { name: "Special Low Profile RGV", subtitle: "Packaging Industry", image: "/images/not_found.png", url: "#" },
          ],
        },
      ],
    },

    "Airport": {
      categories: [
        {
          name: "Airport",
          products: [
            { name: "Baggage Handling Conveyor", subtitle: "Airport", image: "/images/not_found.png", url: "#" },
            { name: "Sorter System", subtitle: "Airport", image: "/images/not_found.png", url: "#" },
            { name: "Baggage Scanning Conveyor", subtitle: "Airport", image: "/images/not_found.png", url: "#" },
            { name: "Spiral Conveyor", subtitle: "Airport", image: "/images/not_found.png", url: "#" },
            { name: "Lifts", subtitle: "Airport", image: "/images/not_found.png", url: "#" },
            { name: "Continuous Vertical Lifts", subtitle: "Airport", image: "/images/not_found.png", url: "#" }
          ],
        },
      ],
    },

  },
  Technologies: {
    "Our Technologies": {
      categories: [
        {
          name: "Sorters",
          products: [
            {
              name: "3D Smart Sorter (ICS)",
              subtitle: "10Kg Max Weight",
              image: "https://muvro.tech2globe.co.in/uploads/3d_sorter_bg_removed_c28b208916.png",
              url: "/3d-smart-sorter-ics"
            },
            {
              name: "Fast Sorter (Micro Sorter)",
              subtitle: "Up to 2,000 parcels/hour",
              image: "https://muvro.tech2globe.co.in/uploads/product01_cf91e2b5ef.png",
              url: "/fast-sorter-micro-sorter"
            },
            {
              name: "High Speed Cross Belt Loop Sorter",
              subtitle: "Interalogitics",
              image: "images/high-speed-cross-belt-sorter-image.webp",
              url: "/high-speed-cross-belt-loop-sorter"
            },
            {
              name: "ZedSort™ The LIN Linear Cross Belt Sorter",
              subtitle: "Fast. Precise. Compact.",
              image: "https://muvro.tech2globe.co.in/uploads/zedsort_the_lin_linear_cross_belt_sorter_b8655352da.webp",
              url: "/zedsort-the-lin-linear-cross-belt-sorter"
            },
            {
              name: "Swing Wheel Sorter",
              subtitle: "0.1 kg to 35 kg",
              image: "https://muvro.tech2globe.co.in/uploads/Swing_Wheel_Sorter_Assemly_04_2048x1396_removebg_preview_0684caaa0e.png",
              url: "/swing-wheel-sorter"
            },
            {
              name: "Tilt Tray Sorter System",
              subtitle: "Smart. Scalable. Seamless.",
              image: "https://muvro.tech2globe.co.in/uploads/Tilt_Tray_Sorter_Assy_07_1_e1741257962489_removebg_preview_925cd8dee5.png",
              url: "/tilt-tray-sorter-system"
            }
          ]
        },
        {
          name: "Secondary Sorters",
          products: [
            {
              name: "Vertixo™ Stack Sorter",
              subtitle: "Ideal for high-density",
              image: "https://muvro.tech2globe.co.in/uploads/Vertixo_Stack_Sorter_99cec857c3.webp",
              url: "/vertixo-stack-sorter"
            },
            {
              name: "Vetro™ Micro Sort",
              subtitle: "Smart Parcel Tracking",
              image: "https://muvro.tech2globe.co.in/uploads/Micro_SORT_The_Lite_fa865eccf1.webp",
              url: "/vetro-micro-sort"
            },
            {
              name: "VOREX™",
              subtitle: "Multi-Layer High-Density Sorting",
              image: "https://muvro.tech2globe.co.in/uploads/VOREX_Image_ab070505ba.webp",
              url: "/vorex"
            },
          ]
        },
        {
          name: "ASRS",
          products: [
            {
              name: "NaviGO Pallet Shuttle ASRS System",
              subtitle: "High-Density Storage",
              image: "https://muvro.tech2globe.co.in/uploads/Combine_2_250_17d1673e5b.png",
              url: "/navigo-pallet-shuttle-asrs-system"
            },
            {
              name: "Radio Shuttle System",
              subtitle: "NaviGO ASRS Shuttle",
              image: "https://muvro.tech2globe.co.in/uploads/radio_shuttle_system_5c5b1105bb.webp",
              url: "/radio-shuttle-system"
            },
            {
              name: "Pallet ASRS Stacker Crane",
              subtitle: "Automated vertical storage crane",
              image: "https://muvro.tech2globe.co.in/uploads/asrs_crne_e3f07fc651.png",
              url: "/asrs-stacker-cranes"
            },
            {
              name: "Mini Load ASRS Shuttle System",
              subtitle: "ASRS Solutions",
              image: "images/Mini-Load-ASRS-Shuttle-System.webp",
              url: "/mini-load-asrs-shuttle-system"
            },
          ]
        },
        {
          name: "Parcel Feeding / Handling",
          products: [
            {
              name: "Singulator System",
              subtitle: "AI-Powered Detection",
              image: "https://muvro.tech2globe.co.in/uploads/Singulator_07_scaled_removebg_preview_5deced7843.png",
              url: "/parcel-singulator-system"
            },
            {
              name: "Tipper System",
              subtitle: "Automated parcel tipping system",
              image: "https://muvro.tech2globe.co.in/uploads/Tipper_Image_17edee1f23.webp",
              url: "/tipper"
            },
            {
              name: "VDS - Activated Roller Belt (ARB)",
              subtitle: "Advanced Conveying System",
              image: "https://muvro.tech2globe.co.in/uploads/ARB_Image_feb146e13b.webp",
              url: "/activated-roller-belt"
            },
            // {
            //   name: "VDS - Smart Gate",
            //   subtitle: "Integrated Gating Mechanism",
            //   image: "https://muvro.tech2globe.co.in/uploads/Gated_Tilted_Conveyor_0acfc8dc7c.webp",
            //   url: "/gated-tilted-conveyor"
            // },
            // {
            //   name: "VDS - Swing Arm",
            //   subtitle: "Baggage Handling Systems",
            //   image: "https://muvro.tech2globe.co.in/uploads/transparent_b85a297768.webp",
            //   url: "/swing-arm"
            // },

          ]
        },
        {
          name: "Diverters & POP Up",
          products: [
            { name: "Pop & Diverters", subtitle: "Diverters &POP Up", image: "/images/not_found.png", url: "#" },
          ],
        },
        {
          name: "Lifters",
          products: [
            { name: "Continuous Vertical Lift", subtitle: "Lifters", image: "/images/not_found.png", url: "#" },
            { name: "Straight / Vertical Lifter", subtitle: "Lifters", image: "/images/not_found.png", url: "#" },
            { name: "Spiral Conveyors", subtitle: "Lifters", image: "/images/not_found.png", url: "#" },
            { name: "Chain Lifter", subtitle: "Lifters", image: "/images/not_found.png", url: "#" },
            { name: "Belt Lifter", subtitle: "Lifters", image: "/images/not_found.png", url: "#" },
            { name: "Scissor Lifters", subtitle: "Lifters", image: "/images/not_found.png", url: "#" },
            { name: "Zip Chain Lifters", subtitle: "Lifters", image: "/images/not_found.png", url: "#"  },
          ],
        },
        {
          name: "Mobile Robots",
          products: [
            { name: "AGV", subtitle: "Mobile Robots", image: "https://muvro.tech2globe.co.in/uploads/agv_image_a157089136.webp", url: "/automated-guided-vehicle" },
            { name: "AMR", subtitle: "Mobile Robots", image: "https://muvro.tech2globe.co.in/uploads/amr_image_10436d8ec7.webp", url: "/autonomous-mobile-robot" },
          ],
        },
        {
          name: "Conveyor System",
          products: [
            { name: "Conveyor System", subtitle: "Conveyors", image: "/images/PVC-Belt-Conveyor_trans.webp", url: "/conveyor" },
          ],
        },
        {
          name: "SPMs",
          products: [
            { name: "Components Assembly SPMs", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Gearbox Press and Assembly", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Differential Case Testing", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Lift Tables", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Tire & Wheel Conveyor System", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Sorting and Storage Technologies", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "EMS System", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Mobile Robots", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Rail Guided Vehicle (RGVs)", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Fixtures and Gripper", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Manipulators", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Turn Tables", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "TOD Turn Over Devise", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Flipper Device", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Diverter Technologies", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Stackers and De-Stacker", subtitle: "SPMs", image: "/images/not_found.png", url: "#" },
            { name: "Gantry System", subtitle: "SPMs", image: "/images/not_found.png", url: "#" }
          ],
        },

      ],
    }
  },
};
const companyLinks = [
  { label: "Our History", href: "/company/our-history" },
  { label: "Our Values", href: "/company/our-values" },
  { label: "Quality Policy", href: "/company/quality-policy" },
  { label: "Why Muvro?", href: "/company/why-muvro" },
];
const softwareLinks = [
  { label: "WCS", href: "/software/warehouse-control-systems" },
  { label: "WMS", href: "/software/warehouse-management-system" },
  { label: "IMS", href: "/software/inventory-management-system" },
  { label: "SAP Integration", href: "/software/sap-integration" },
  { label: "SCADA", href: "/software/supervisory-control-and-data-acquisition" },
];
const resourceLinks = [
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/careers" },
  { label: "Downloads", href: "/downloads" },
  { label: "Blogs", href: "/blogs" },
];

const industriesLinks = [
  { label: "Warehousing", href: "/industries/#warehousing" },
  { label: "E-Commerce", href: "/industries/#e-commerce" },
  { label: "Parcel & Postal", href: "/industries/#parcel-postels" },
  { label: "Quick Commerce", href: "/industries/#quick-commerce" },
  { label: "Automobile & Manufacturing", href: "/industries/#automobile-manufacturing" },
  { label: "E-Mobility", href: "/industries/#e-mobility" },
  { label: "White Goods", href: "/industries/#white-goods" },
  { label: "Electronics Manufacturing", href: "/industries/#electronics-manufacturing" },
  { label: "FMCG", href: "/industries/#fmcg" },
  { label: "Food & Beverage", href: "/industries/#food-beverage" },
  { label: "Waste Management", href: "/industries/#waste-management" },
  { label: "Airport", href: "/industries/#airport" },
];


function SubmenuScreen({ title, links, onBack }) {
  return (
    <div className={styles.submenuWrapper}>
      <button className={styles.backBtn} onClick={onBack}>
        <RiArrowLeftLine /> Back
      </button>
      <h3 className={styles.submenuTitle}>{title}</h3>
      <ul className={styles.submenuLinks}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MobileMenu({ isOpenMobileMenu, onClose }) {
  const [activeSection, setActiveSection] = useState(null);
  const [topTab, setTopTab] = useState({ Solutions: "Intralogistics", Technologies: "Our Technologies" });
  const [leftTab, setLeftTab] = useState({ Solutions: 0, Technologies: 0 });

  const handleOpenSection = (menu) => setActiveSection(menu);
  const handleBack = () => setActiveSection(null);

  const renderProducts = (menu) => {
    const currentTopTab = topTab[menu];
    const categories = megaMenuData[menu][currentTopTab].categories;

    return (
      <div className={styles.productsWrapper}>
        <button className={styles.backBtn} onClick={handleBack}>
          <RiArrowLeftLine /> Back
        </button>

        {/* Show only 2 top-level tabs */}
        <div className={styles.topTabs}>
          {Object.keys(megaMenuData[menu])
            .slice(0, 2) // limit to 2
            .map((tab) => (
              <button
                key={tab}
                className={topTab[menu] === tab ? styles.activeTopTab : ""}
                onClick={() => {
                  setTopTab({ ...topTab, [menu]: tab });
                }}
              >
                {tab}
              </button>
            ))}
        </div>

        {/* Accordions for categories */}
        <div className={styles.accordions}>
          {categories.map((cat, i) => (
            <div key={cat.name} className={styles.accordionItem}>
              <button
                className={`${styles.accordionHeader} ${leftTab[menu] === i ? styles.activeCategory : ""
                  }`}
                onClick={() =>
                  setLeftTab({ ...leftTab, [menu]: leftTab[menu] === i ? null : i })
                }
              >
                {cat.name}
              </button>

              {leftTab[menu] === i && (
                <div className={styles.productList}>
                  {cat.products.map((prod) => (
                    <div className={`${styles.productCard} position-relative`} key={prod.name}>
                      <img src={prod.image} alt={prod.name} />
                      <div>
                        <h4>{prod.name}</h4>
                        {prod.subtitle && <p>{prod.subtitle}</p>}
                      </div>
                      <a
                        href={prod.url}
                        className="stretched-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };


  return (
    <div className={`${styles.offcanvas} ${isOpenMobileMenu ? styles.show : ""}`}>
      {/* Header */}
      <div className={styles.header}>
        <h3>Menu</h3>
        <button onClick={onClose} className={styles.closeBtn}>
          <RiCloseLine />
        </button>
      </div>

      {/* Main Body */}
      <div className={styles.body}>
        {!activeSection ? (
          <ul className={styles.menuList}>
            {/* <li>
                            <button onClick={() => handleOpenSection("Company")}>
                                Company <RiArrowRightSLine />
                            </button>
                        </li> */}
            <li><Link href="/about-us">About Us</Link></li>
            <li>
              <button onClick={() => handleOpenSection("Industries")}>
                Industries <RiArrowRightSLine />
              </button>
            </li>
            <li>
              <button onClick={() => handleOpenSection("Solutions")}>
                Solutions <RiArrowRightSLine />
              </button>
            </li>
            <li>
              <button onClick={() => handleOpenSection("Technologies")}>
                Technologies <RiArrowRightSLine />
              </button>
            </li>
            <li>
              <button onClick={() => handleOpenSection("Software")}>
                Software <RiArrowRightSLine />
              </button>
            </li>
            <li>
              <button onClick={() => handleOpenSection("Resources")}>
                Resources <RiArrowRightSLine />
              </button>
            </li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        ) : activeSection === "Company" ? (
          <SubmenuScreen title="Company" links={companyLinks} onBack={handleBack} />
        ) : activeSection === "Industries" ? (
          <SubmenuScreen title="Industries" links={industriesLinks} onBack={handleBack} />
        ) : activeSection === "Software" ? (
          <SubmenuScreen title="Software" links={softwareLinks} onBack={handleBack} />
        ) : activeSection === "Resources" ? (
          <SubmenuScreen title="Resources" links={resourceLinks} onBack={handleBack} />
        ) : (
          renderProducts(activeSection)
        )}
      </div>
    </div>
  );
}
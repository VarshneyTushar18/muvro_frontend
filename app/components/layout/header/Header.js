"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useRef, useEffect, useState } from "react";
import { RiArrowRightUpLine, RiMenuLine } from "@remixicon/react";
import MobileMenu from "./MobileMenu/MobileMenu";
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
            //   image: "images/3d_sorter_bg_removed_c28b208916.png",
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
              image: "images/zedsort_the_lin_linear_cross_belt_sorter_b8655352da.webp",
              url: "/zedsort-the-lin-linear-cross-belt-sorter"
            },
            {
              name: "Swing Wheel Sorter",
              subtitle: "0.1 kg to 35 kg",
              image: "images/Swing_Wheel_Sorter_Assemly_04_2048x1396_removebg_preview_0684caaa0e.png",
              url: "/swing-wheel-sorter"
            },
            {
              name: "Tilt Tray Sorter System",
              subtitle: "Sorting Solutions",
              image: "images/Tilt_Tray_Sorter_Assy_07_1_e1741257962489_removebg_preview_925cd8dee5.png",
              url: "/tilt-tray-sorter-system"
            },
            // {
            //   name: "Fast Sorter (Micro Sorter)",
            //   subtitle: "Sorting Solutions",
            //   image: "images/product01_cf91e2b5ef.png",
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
              image: "images/3d_sorter_bg_removed_c28b208916.png",
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
            // {
            //   name: "Dark Store",
            //   subtitle: "Quick Commerce",
            //   image: "/images/not_found.png",
            //   url: "#"
            // },
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
              image: "images/amr_image_10436d8ec7.webp",
              url: "/autonomous-mobile-robot"
            },
            {
              name: "AGV",
              subtitle: "Mobile Robots",
              image: "images/agv_image_a157089136.webp",
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
              image: "images/3d_sorter_bg_removed_c28b208916.png",
              url: "/3d-smart-sorter-ics"
            },
            {
              name: "Fast Sorter (Micro Sorter)",
              subtitle: "Up to 2,000 parcels/hour",
              image: "images/product01_cf91e2b5ef.png",
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
              image: "images/zedsort_the_lin_linear_cross_belt_sorter_b8655352da.webp",
              url: "/zedsort-the-lin-linear-cross-belt-sorter"
            },
            {
              name: "Swing Wheel Sorter",
              subtitle: "0.1 kg to 35 kg",
              image: "images/Swing_Wheel_Sorter_Assemly_04_2048x1396_removebg_preview_0684caaa0e.png",
              url: "/swing-wheel-sorter"
            },
            {
              name: "Tilt Tray Sorter System",
              subtitle: "Smart. Scalable. Seamless.",
              image: "images/Tilt_Tray_Sorter_Assy_07_1_e1741257962489_removebg_preview_925cd8dee5.png",
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
              image: "images/Vertixo_Stack_Sorter_99cec857c3.webp",
              url: "/vertixo-stack-sorter"
            },
            {
              name: "Vetro™ Micro Sort",
              subtitle: "Smart Parcel Tracking",
              image: "images/Micro_SORT_The_Lite_fa865eccf1.webp",
              url: "/vetro-micro-sort"
            },
            {
              name: "VOREX™",
              subtitle: "Multi-Layer High-Density Sorting",
              image: "images/VOREX_Image_ab070505ba.webp",
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
              image: "images/Combine_2_250_17d1673e5b.png",
              url: "/navigo-pallet-shuttle-asrs-system"
            },
            {
              name: "Radio Shuttle System",
              subtitle: "NaviGO ASRS Shuttle",
              image: "images/radio_shuttle_system_5c5b1105bb.webp",
              url: "/radio-shuttle-system"
            },
            {
              name: "Pallet ASRS Stacker Crane",
              subtitle: "Automated vertical storage crane",
              image: "images/asrs_crne_e3f07fc651.png",
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
              image: "images/Singulator_07_scaled_removebg_preview_5deced7843.png",
              url: "/parcel-singulator-system"
            },
            {
              name: "Tipper System",
              subtitle: "Automated parcel tipping system",
              image: "images/Tipper_Image_17edee1f23.webp",
              url: "/tipper"
            },
            {
              name: "VDS - Activated Roller Belt (ARB)",
              subtitle: "Advanced Conveying System",
              image: "images/ARB_Image_feb146e13b.webp",
              url: "/activated-roller-belt"
            },
            // {
            //   name: "VDS - Smart Gate",
            //   subtitle: "Integrated Gating Mechanism",
            //   image: "images/Gated_Tilted_Conveyor_0acfc8dc7c.webp",
            //   url: "/gated-tilted-conveyor"
            // },
            // {
            //   name: "VDS - Swing Arm",
            //   subtitle: "Baggage Handling Systems",
            //   image: "images/transparent_b85a297768.webp",
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
            { name: "Zip Chain Lifters", subtitle: "Lifters", image: "/images/not_found.png", url: "#" },
          ],
        },
        {
          name: "Mobile Robots",
          products: [
            { name: "AGV", subtitle: "Mobile Robots", image: "images/agv_image_a157089136.webp", url: "/automated-guided-vehicle" },
            { name: "AMR", subtitle: "Mobile Robots", image: "images/amr_image_10436d8ec7.webp", url: "/autonomous-mobile-robot" },
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
export default function Header() {

  const [openMenu, setOpenMenu] = useState(null);
  const [topTab, setTopTab] = useState({ Solutions: "Intralogistics", Technologies: "Our Technologies" });
  const [leftTab, setLeftTab] = useState({ Solutions: 0, Technologies: 0 });
  const menuRef = useRef(null);
  // ✅ Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleNonMegaMenuClick = () => setOpenMenu(null);
  const handleMainMenuClick = (menu) => setOpenMenu(openMenu === menu ? null : menu);
  const handleTopTabClick = (menu, tab) => {
    setTopTab({ ...topTab, [menu]: tab });
    setLeftTab({ ...leftTab, [menu]: 0 });
  };
  const handleLeftTabClick = (menu, index) => setLeftTab({ ...leftTab, [menu]: index });

  /*************  ✨ Windsurf Command 🌟  *************/
  const renderMegaMenu = (menu) => {
    const currentTopTab = topTab[menu];
    const categories = megaMenuData[menu][currentTopTab].categories;
    const selectedCategory = categories[leftTab[menu]];

    return (
      <div className={styles.megaMenu}>
        {/* Top Tabs */}
        <div className={styles.topTabs}>
          {Object.keys(megaMenuData[menu]).map((tab) => (
            <button
              key={tab}
              className={topTab[menu] === tab ? styles.activeTopTab : ""}
              onClick={() => handleTopTabClick(menu, tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.megaContent}>
          {/* Left Categories */}
          {categories.length > 1 && (
            <div className={styles.leftTabs}>
              {categories.map((cat, i) => (
                <button
                  key={cat.name}
                  className={leftTab[menu] === i ? styles.activeLeftTab : ""}
                  onClick={() => handleLeftTabClick(menu, i)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}


          {/* Right Products */}
          <div className={styles.rightContent}>
            {selectedCategory.products.length === 0 && (
              <p className="text-center">No products available</p>
            )}
            <div className={styles.productGrid}>
              {selectedCategory.products.length > 0 &&
                selectedCategory.products.map((prod) => (
                  <div className={`${styles.productCard} position-relative`} key={prod.name}>
                    <div className={styles.productCardImage}>
                      <img src={prod.image} alt={prod.name} />
                    </div>
                    <div className={styles.productCardText}>
                      <p className={styles.productName}>{prod.name}</p>
                      <div className={styles.productFooter}>
                        <p className={styles.productSubtitle}>{prod.subtitle}</p>
                        <div className={styles.arrow}>
                          <RiArrowRightUpLine />
                        </div>
                      </div>
                    </div>
                    <Link href={prod.url} className="stretched-link"></Link>
                  </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    );
  };
  /*******  cc2aced9-3d3f-45f9-804f-19648dd96749  *******/

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);


  return (
    <nav className="navbar navbar-expand-lg bg-light py-0" ref={menuRef}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            width="160"
            height="auto"
            className="d-inline-block align-text-top"
          />
        </Link>

        <button
          onClick={() => setIsOpenMobileMenu(true)}
          className={`d-lg-none ${styles.menuBtn}`} type="button" aria-label="Toggle navigation"
        >
          <RiMenuLine />
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 gap-2">
            <li className={`nav-item dropdown ${styles.navItemDropdown}`}>
              <a
                className={`${styles.navDropdown} nav-link dropdown-toggle`}
                href="#"
                id="navbarDropdown"
                role="button"
                aria-expanded="false"
              >
                Company
              </a>
              <ul
                className={`${styles.dropdownMenu} dropdown-menu`}
                aria-labelledby="navbarDropdown"
              >
                <li className={styles.dropdownSubmenu}>
                  <a
                    className={`${styles.navSubDropdown} dropdown-item dropdown-toggle`}
                    href="#"
                  >
                    Group of Companies
                  </a>
                  <ul className={`${styles.dropdownSubmenuMenu} dropdown-menu`}>
                    <li>
                      <Link className={`${styles.dropdownItem} dropdown-item`} href="/about-us">Muvro Technologies Pvt Ltd</Link>
                    </li>
                    <li>
                      <Link className={`${styles.dropdownItem} dropdown-item`} href="#">PCL Computers</Link>
                    </li>
                    <li>
                      <Link className={`${styles.dropdownItem} dropdown-item`} href="#">Upper India Pvt Ltd</Link>
                    </li>
                    <li>
                      <Link className={`${styles.dropdownItem} dropdown-item`} href="#">Venus Pack System Pvt Ltd</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/about-us">About Us</Link>
                </li >
                {/* <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/company/our-history">Our History</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/company/our-values">Our Values</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/company/quality-policy">Quality Policy</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/company/why-muvro">Why Muvro?</Link>
                </li > */}
              </ul >
            </li >
            <li className={`nav-item dropdown ${styles.navItemDropdown}`}>
              <a
                className={`${styles.navDropdown} nav-link dropdown-toggle`}
                href="#"
                id="navbarDropdown"
                role="button"
                aria-expanded="false"
              >
                Industries
              </a>
              <ul className={`${styles.dropdownMenu} dropdown-menu`} aria-labelledby="navbarDropdown">
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/industries/#warehousing">Warehousing</Link>
                </li>
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/industries/#e-commerce">E-Commerce</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/industries/#parcel-postels">Parcel & Postal</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/industries/#quick-commerce">Quick Commerce</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/industries/#automobile-manufacturing">Automobile & Manufacturing</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/industries/#e-mobility">E-Mobility</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/industries/#white-goods">White Goods</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/industries/#electronics-manufacturing">Electronics Manufacturing</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/industries/#fmcg">FMCG</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/industries/#food-beverage">Food & Beverage</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/industries/#waste-management">Waste Management</Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/industries/#airport">Airport</Link>
                </li >
              </ul >

            </li >
            <li className="nav-item" onMouseEnter={() => setOpenMenu("Solutions")} onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                className={`${styles.navDropdown} nav-link ${openMenu === "Solutions" && "show"}`}
                href="/solutions"
              >
                Solutions
              </Link>
              {openMenu === "Solutions" && renderMegaMenu("Solutions")}
            </li>
            <li className="nav-item" onMouseEnter={() => setOpenMenu("Technologies")}
              onMouseLeave={() => setOpenMenu(null)}>
              <Link
                className={`${styles.navDropdown} nav-link ${openMenu === "Technologies" && "show"}`}
                href="/technologies"
              >
                Technologies
              </Link>
              {openMenu === "Technologies" && renderMegaMenu("Technologies")}
            </li>
            <li className={`nav-item dropdown ${styles.navItemDropdown}`}>

              <a
                className={`${styles.navDropdown} nav-link dropdown-toggle`}
                href="#"
                id="navbarDropdown"
                role="button"
                aria-expanded="false"
              >
                Softwares
              </a>
              <ul className={`${styles.dropdownMenu} dropdown-menu`} aria-labelledby="navbarDropdown">
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/software/warehouse-control-systems">
                    WCS
                  </Link>
                </li>
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/software/warehouse-management-system">
                    WMS
                  </Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/software/inventory-management-system">
                    IMS
                  </Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/software/sap-integration">
                    SAP Integration
                  </Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/software/supervisory-control-and-data-acquisition">
                    SCADA
                  </Link>
                </li >
              </ul >
            </li >
            <li className={`nav-item dropdown ${styles.navItemDropdown}`}>
              <a
                className={`${styles.navDropdown} nav-link dropdown-toggle`}
                href="#"
                id="navbarDropdown"
                role="button"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className={`${styles.dropdownMenu} dropdown-menu`} aria-labelledby="navbarDropdown">
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/events">
                    Events
                  </Link>
                </li>
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/careers">
                    Careers
                  </Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/downloads">
                    Downloads
                  </Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/blogs">
                    Blogs
                  </Link>
                </li >
              </ul >
            </li >
          </ul >
        </div >

        {/* Right: Button */}
        <div className="d-none d-lg-flex mb-1" >
          <Link href="/contact" className="mbtn mbtn-small mbtn-primary">
            Contact Us
          </Link>
        </div >
      </div >
      <MobileMenu
        isOpenMobileMenu={isOpenMobileMenu}
        onClose={() => setIsOpenMobileMenu(false)}
      />
    </nav >
  );
}

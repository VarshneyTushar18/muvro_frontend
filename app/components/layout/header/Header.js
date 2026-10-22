"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useRef, useEffect, useState } from "react";
import { RiArrowRightUpLine, RiMenuLine } from "@remixicon/react";
import MobileMenu from "./MobileMenu/MobileMenu";
import megaMenuData from "./megaMenuData";
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
                    {/* <li>
                      <Link className={`${styles.dropdownItem} dropdown-item`} href="#">PCL Computers</Link>
                    </li>
                    <li>
                      <Link className={`${styles.dropdownItem} dropdown-item`} href="#">Upper India Pvt Ltd</Link>
                    </li>
                    <li>
                      <Link className={`${styles.dropdownItem} dropdown-item`} href="#">Venus Pack System Pvt Ltd</Link>
                    </li>
                    <li>
                      <Link className={`${styles.dropdownItem} dropdown-item`} href="#">Nakamura Kiko Co. Ltd</Link>
                    </li> */}
                    <li>
                      <Link className={`${styles.dropdownItem} dropdown-item`} href="#">Takumi Technologies India Pvt. Ltd.</Link>
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
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/warehouse-control-systems">
                    WCS
                  </Link>
                </li>
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/warehouse-management-system">
                    WMS
                  </Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/inventory-management-system">
                    IMS
                  </Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/sap-integration">
                    SAP Integration
                  </Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/supervisory-control-and-data-acquisition">
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
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/download">
                    Download
                  </Link>
                </li >
                <li>
                  <Link className={`${styles.dropdownItem} dropdown-item`} href="/case-study">
                    Case Study
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

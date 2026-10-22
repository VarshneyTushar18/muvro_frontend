"use client";
import { useState } from "react";
import Link from "next/link";
import { RiCloseLine, RiArrowRightSLine, RiArrowLeftLine } from "@remixicon/react";
import styles from "./MobileMenu.module.css";
import megaMenuData from "../megaMenuData";
const companyLinks = [
  { label: "Our History", href: "/company/our-history" },
  { label: "Our Values", href: "/company/our-values" },
  { label: "Quality Policy", href: "/company/quality-policy" },
  { label: "Why Muvro?", href: "/company/why-muvro" },
];
const groupCompanyLinks = [
  { label: "Muvro Technologies Pvt Ltd", href: "/about-us" },
  // { label: "PCL Computers", href: "#" },
  // { label: "Upper India Pvt Ltd", href: "#" },
  // { label: "Venus Pack System Pvt Ltd", href: "#" },
  // { label: "Nakamura Kiko Co. Ltd", href: "#" },
  { label: "Takumi Technologies India Pvt. Ltd.", href: "#" },
];
const softwareLinks = [
  { label: "WCS", href: "/warehouse-control-systems" },
  { label: "WMS", href: "/warehouse-management-system" },
  { label: "IMS", href: "/inventory-management-system" },
  { label: "SAP Integration", href: "/sap-integration" },
  { label: "SCADA", href: "/supervisory-control-and-data-acquisition" },
];
const resourceLinks = [
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/careers" },
  { label: "Download", href: "/download" },
  { label: "Case Study", href: "/case-study" },
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


function SubmenuScreen({ title, links, onBack, onClose }) {
  return (
    <div className={styles.submenuWrapper}>
      <button className={styles.backBtn} onClick={onBack}>
        <RiArrowLeftLine /> Back
      </button>
      <h3 className={styles.submenuTitle}>{title}</h3>
      <ul className={styles.submenuLinks}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} onClick={onClose}>{link.label}</a>
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
  const handleClose = () => {
    setActiveSection(null);
    onClose();
  };

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
                        rel="noopener noreferrer"
                        onClick={handleClose}
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
        <button onClick={handleClose} className={styles.closeBtn}>
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


            <li><Link href="/about-us" onClick={handleClose}>About Us</Link></li>
            <li>
              <button onClick={() => handleOpenSection("Group of Companies")}>
                Group of Companies <RiArrowRightSLine />
              </button>
            </li>
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
            <li><Link href="/contact" onClick={handleClose}>Contact Us</Link></li>
          </ul>
        ) : activeSection === "Company" ? (
          <SubmenuScreen title="Company" links={companyLinks} onBack={handleBack} onClose={handleClose} />
        ) : activeSection === "Group of Companies" ? (
          <SubmenuScreen title="Group of Companies" links={groupCompanyLinks} onBack={handleBack} onClose={handleClose} />
        ) : activeSection === "Industries" ? (
          <SubmenuScreen title="Industries" links={industriesLinks} onBack={handleBack} onClose={handleClose} />
        ) : activeSection === "Software" ? (
          <SubmenuScreen title="Software" links={softwareLinks} onBack={handleBack} onClose={handleClose} />
        ) : activeSection === "Resources" ? (
          <SubmenuScreen title="Resources" links={resourceLinks} onBack={handleBack} onClose={handleClose} />
        ) : (
          renderProducts(activeSection)
        )}
      </div>
    </div>
  );
}

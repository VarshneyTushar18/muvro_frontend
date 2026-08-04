import { notFound } from "next/navigation";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip/BreadcrumbStrip";
import DownloadCatalogue from "./DownloadCatalogue";
import Style from "./download.module.css";

async function getDownloadPage() {
  const res = await fetch(
    `${process.env.STRAPI_BACKEND_BASE_URL}/download-page?populate=*`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch values");
  }

  const data = await res.json();
  return data.data;
}

function getFileName(media) {
  if (!media) return "Catalogue.pdf";
  if (media.name) return media.name;
  if (media.url) {
    const parts = media.url.split("/");
    return decodeURIComponent(parts[parts.length - 1] || "Catalogue.pdf");
  }
  return "Catalogue.pdf";
}

export default async function DownloadPage() {
  const pageData = await getDownloadPage();

  if (!pageData) return notFound();

  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Download" },
  ];

  const sectionHeader = pageData.sectionHeader;
  const assetsBase = process.env.STRAPI_ASSETS_BASE_URL || "";
  let items = (pageData.catalougeItem ?? [])
    .filter((item) => item?.catalouge?.url)
    .map((item) => ({
      id: item.id,
      title: item.title,
      fileName: getFileName(item.catalouge),
      url: `${assetsBase}${item.catalouge.url}`,
    }));

  // Local fallback when CMS has header but no catalogue files yet
  // (local DB dump has empty catalougeItem; live site has these 30)
  if (items.length === 0) {
    const liveBase = "https://www.muvro.com";
    const catalogues = [
      ["Intralogistics Solutions", "Intralogistics_Solutions_Catalogue_V2_7_7412a64121.pdf"],
      ["Muvro Product Range", "Muvro_Product_Range_Catalogue_v1_1_5084705b31.pdf"],
      ["Sorter - ZedSORT (Loop and Lin)", "Muvro_Cross_Belt_Loop_Sorter_Catalogue_v2_2_a183a51382.pdf"],
      ["Sorter - Zed Sort-The Tilt", "Muvro_Tilt_Tray_Loop_Sorter_Catalogue_v1_1_987c7f0ed8.pdf"],
      ["Sorter - Swing wheel", "Muvro_Swing_Wheel_Sorter_Catalogue_v1_1_6479c0d5cd.pdf"],
      ["Advanced Secondary Sorting Solutions", "Muvro_Advanced_Secondary_Sorting_Solutions_Catalogue_v1_0_ae9a9eaaa0.pdf"],
      ["Secondary Sorting - 3D Smart", "Muvro_3_D_Smart_Sorter_Catalogue_v1_2_6294d31edc.pdf"],
      ["Secondary Sorting - MicroSORT-The Lite", "Muvro_Secondary_Sorter_Micro_Sort_Catalogue_v1_1_30ec944866.pdf"],
      ["ASRS - Stacker Crane", "Muvro_ASRS_Stacker_Crane_System_Catalogue_v1_1_a03650172a.pdf"],
      ["ASRS - NaviGO-Pallet", "Muvro_ASRS_Mother_Child_Shuttle_System_Catalogue_v1_1_f9d4fd2107.pdf"],
      ["Mobile Robot - AGV System", "Muvro_AGV_System_Catalogue_v1_1_4eb0b14245.pdf"],
      ["Mobile Robot - AMR System", "Muvro_AMR_System_Catalogue_v1_1_c404c3c5ea.pdf"],
      ["Automatic Parcel Infeed System", "Muvro_Automatic_Parcel_Infeed_System_Catalogue_v1_0_4135e08e29.pdf"],
      ["Parcel Singulator System", "Muvro_Parcel_Singulator_System_Catalogue_v1_2_c656e1bd72.pdf"],
      ["Parcel Tipper System", "Muvro_Parcel_Tipper_System_Catalogue_v1_0_d755db6ee0.pdf"],
      ["Chutes", "Muvro_Parcel_Hamper_Catalogue_v1_1_0ba353b95d.pdf"],
      ["PVC Plastic Belt Conveyor", "Muvro_Plastic_Modular_belt_Conveyor_Catalogue_v1_1_ce11d58f51.pdf"],
      ["PVC Straight Conveyor", "Muvro_PVC_Straight_Conveyor_Catalogue_v1_1_692f1374d3.pdf"],
      ["Side-Flexing Conveyor", "Muvro_Side_Flexing_Conveyor_Catalogue_v1_1_e317ee4827.pdf"],
      ["Zero Pressure Accumulation Roller Conveyor", "Muvro_Zero_Pressure_Accumulation_Roller_Conveyor_Catalogue_v1_1_dccc775ece.pdf"],
      ["PVC Curve Conveyor", "Muvro_PVC_Curve_Conveyor_Catalogue_v1_1_9e1e446597.pdf"],
      ["Telescopic Conveyor", "Muvro_Telescopic_Conveyor_Catalogue_v1_1_a3190b884c.pdf"],
      ["ZTR Conveyor", "Muvro_ZTR_Conveyor_Catalogue_v1_1_8423bda156.pdf"],
      ["Differential Assembly Line", "Muvro_Differential_Assembly_Line_Catalogue_V1_0_4fc660ac74.pdf"],
      ["Electric Monorail System (EMS)", "Muvro_Electric_Monorail_System_EMS_V1_0_4d329208b0.pdf"],
      ["Tyre Wheel Assembly Line", "Muvro_Tyre_Wheel_Assembly_Line_Catalogue_V1_0_11404b18cf.pdf"],
      ["e-Gearbox Assembly Line", "Muvro_e_Gearbox_Assembly_Line_Catalogue_V1_0_ae87e965b7.pdf"],
      ["Engine Assembly Line", "Muvro_Engine_Assembly_Line_V1_1_d9440c2fdb.pdf"],
      ["Continous Vertical Lifter", "Muvro_Continous_Vertical_Lifter_Catalogue_v1_1_5c000486e5.pdf"],
      ["Scissor Lift", "Scissor_Lift_Catalogue_V1_0_5e55319f6a.pdf"],
    ];

    items = catalogues.map(([title, fileName], index) => ({
      id: `fallback-${index + 1}`,
      title,
      fileName,
      url: `${liveBase}/uploads/${fileName}`,
    }));
  }

  return (
    <>
      <BreadcrumbStrip crumbs={crumbs} />

      <section
        className={Style.download_page}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-xl-8 pb-4">
              {sectionHeader && (
                <>
                  <span
                    className="section-label-center mb-3"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                  >
                    {sectionHeader.label}
                  </span>

                  <h2
                    className="text-center mb-3"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    dangerouslySetInnerHTML={{
                      __html: sectionHeader.heading.replace(
                        /\[(.*?)\]/g,
                        "<span>$1</span>"
                      ),
                    }}
                  />

                  {sectionHeader.description && (
                    <p
                      className="text-center"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      {sectionHeader.description}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          <DownloadCatalogue items={items} />
        </div>
      </section>
    </>
  );
}

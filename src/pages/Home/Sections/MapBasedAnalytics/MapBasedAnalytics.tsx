import styles from "./map-based-anatytics.module.css";

import mapImgOne from "@/assets/imgs/map-1-new3.png";

const MapBasedAnalyticsSection = () => {
  return (
    <div
      className={styles["map-based-analytics-section"]}
      id="mapBasedAnalytics"
    >
      <div className={styles["map-based-analytics-section-grid"]}>
        <div className={styles["map-based-analytics-section-grid-map"]}>
          <img src={mapImgOne} width={350} alt="map-one" />
        </div>
        <div className={styles["map-based-analytics-section-grid-details"]}>
          <div
            className={
              styles["map-based-analytics-section-grid-details-heading"]
            }
          >
            <span
              className={
                styles["map-based-analytics-section-grid-details-heading-title"]
              }
            >
              Actionable risk insights
            </span>
            <div
              className={
                styles[
                  "map-based-analytics-section-grid-details-heading-subtitle"
                ]
              }
            >
              <span
                className={
                  styles[
                    "map-based-analytics-section-grid-details-heading-subtitle-item"
                  ]
                }
              >
                AgroRisk offers advanced analytics and data-driven insights to help financial
institutions and farmers make informed decisions and transition strategies.
              </span>
              <span
                className={
                  styles[
                    "map-based-analytics-section-grid-details-heading-subtitle-item"
                  ]
                }
              >
                By leveraging AgroRisk's innovative technology, financial companies and farmers can
better understand the impact of climate risks on agricultural operations and mitigate
potential financial losses. This powerful tool enables banks and insurance providers
to enhance their risk management strategies and tailor their financial products to the
unique needs of agricultural businesses. AgroRisk plays a vital role in fostering
sustainability and resilience within the agricultural sector.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapBasedAnalyticsSection;

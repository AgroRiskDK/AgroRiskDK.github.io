import styles from "./news-story-section.module.css";

import newsStory from "@/assets/imgs/news-story.png";

const NewsStorySection = () => {
  return (
    <div
      className={styles["news-story-section"]}
      id="newsStorySection"
    >
      <div className={styles["news-story-section-grid"]}>
        <div className={styles["news-story-section-grid-details"]}>
          <div
            className={
              styles["news-story-section-grid-details-heading"]
            }
          >
            <span
              className={
                styles["news-story-section-grid-details-heading-title"]
              }
            >
              AgroRisk in the News
            </span>
            <div
              className={
                styles[
                  "news-story-section-grid-details-heading-subtitle"
                ]
              }
            >
              <span
                className={
                  styles[
                    "news-story-section-grid-details-heading-subtitle-item"
                  ]
                }
              >
                Very proud to feature our CEO <strong>Theodor Christensen</strong> on national television explaining how extreme 
                weather and climate change increasingly affect crop yields and drive financial risks for the agricultural sector.
              </span>
              <a target="_blank" href="https://www.dr.dk/drtv/se/tva_-historisk-groen-aftale-faar-blandet-modtagelse_489241"
                className={
                  styles[
                    "news-story-section-news-link"
                  ]
                }
              >
                News Link &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className={styles["news-story-section-grid-image"]}>
          <img src={newsStory} width={450} alt="news-story-image" />
        </div>
      </div>
    </div>
  );
};

export default NewsStorySection;

import { useParams } from "react-router-dom";
import styles from "./insight.module.css";
import FirstArticle from "./Articles/First/First";
import SecondArticle from "./Articles/Second/Second";
import ThirdArticle from "./Articles/Third/Third";
import { useEffect } from "react";

const articles: Record<string, JSX.Element> = {
  1: <FirstArticle />,
  2: <SecondArticle />,
  3: <ThirdArticle />,
};

const InsightPage = () => {
  const { insightId } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className={styles["insight-page"]}>
      {articles[insightId as string]}
    </div>
  );
};

export default InsightPage;

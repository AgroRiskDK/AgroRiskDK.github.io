import { useLocation } from "react-router-dom";
import SignUpSection from "./Sections/SignUp/SignUp";
import { useEffect, useState } from "react";

const TalkToUsPage = () => {
  const { hash } = useLocation();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => setIsSubmitted(true);

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
    }
  }, []);

  return (
    <>
      <SignUpSection onClick={handleSubmit} isSubmitted={isSubmitted} />
      {/* {!isSubmitted && <ContactsSection />} */}
    </>
  );
};

export default TalkToUsPage;

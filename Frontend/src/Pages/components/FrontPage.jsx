import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FrontPage.css";
import FrontanyData from "../../data/Frontany.json";
import PracticeBar from "../../Navbar/PracticeBar";
import Footer from "../../../Footer/Footer";

const FrontPage = () => {
  const { id } = useParams();
  const [Frontany, setFrontany] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFrontany = () => {
      const FrontanyDataItem = FrontanyData.find((item) => item.id === id);
      if (FrontanyDataItem) {
        setFrontany(FrontanyDataItem);
      } else {
        setError("Frontany not found");
      }
    };

    fetchFrontany();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!Frontany) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PracticeBar />
      <div className="setBack">
        <div className="head_part">
          <div className="logoImage">
            <img src={Frontany.logo} alt={Frontany.title} />
          </div>
          <div className="FrontInfo">
            <b>{Frontany.title}</b>
            <p>{Frontany.subtitle}</p>
            <div className="FrontNature">
              {Frontany.nature.map((nature, index) => (
                <div className="FrontNature_div" key={index}>
                  {nature}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="overview">
          <div className="left_one">
            <div className="moreInfo">
              <b>Overview</b>
              <p>{Frontany.about}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default FrontPage;

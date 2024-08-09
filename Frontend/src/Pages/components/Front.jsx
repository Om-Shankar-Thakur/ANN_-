import React, { useEffect } from "react";
import "./Front.css";
import { Link } from "react-router-dom";

const Front = () => {
  useEffect(() => {}, []);

  const cropMonitoringAndManagementFeatures = [
    "AI crop health monitoring",
    "Disease detection using AI",
    "Assess crop growth stages",
    "Optimal irrigation recommendations",
    "Real-time fertilization advice",
    "Pest control strategy suggestions",
  ];

  const precisionAgricultureFeatures = [
    "AI precision farming techniques",
    "Resource optimization with AI",
    "Tailored farming practices",
    "Weather pattern data analysis",
    "Customized crop management",
    "Maximize crop yield with AI",
  ];

  const cropYieldPredictionFeatures = [
    "Predictive crop yield models",
    "Historical data yield forecasts",
    "Environmental factor consideration",
    "Crop planning insights",
    "Market forecast based on yield",
    "Informed decision-making for farmers",
  ];

  const climateResilienceFeatures = [
    "Assess climate risks in agriculture",
    "AI climate change solutions",
    "Adaptive farming strategies",
    "Mitigate climate change impacts",
    "Resilience to extreme weather",
    "Climate impact mitigation measures",
  ];

  const marketIntelligenceFeatures = [
    "Analyze market trends with AI",
    "Consumer preference identification",
    "Supply chain dynamics analysis",
    "Crop selection optimization",
    "Price forecasting for profitability",
    "Market risk management tools",
  ];

  return (
    <div className="front_bg">
      <div className="container">
        <div className="top">
          <h2>AI for Sustainable Agriculture</h2>
        </div>
        <div className="Front_main">
          <div className="comp_showlist">
            <div className="companies_list">
              <Link
                to={`/models/model1`}
                className="Front_card"
                style={{ textDecoration: "none" }}
              >
                <img
                  className="logo_image"
                  src="https://media.licdn.com/dms/image/C5612AQHvdSEgNkEd9Q/article-cover_image-shrink_600_2000/0/1634099172188?e=2147483647&v=beta&t=5R87hZJO9459uAI_xoToV0Q3_zkVrGMItcRk383Vveg"
                  alt="Crop Monitoring and Management"
                />
                <div className="Front_info">
                  <p style={{ textAlign: "center" }}>
                    Crop Monitoring and Management
                  </p>
                  <div className="features_div">
                    {cropMonitoringAndManagementFeatures.map((ele, ind) => (
                      <div key={ind}>{ele}</div>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="align-right">
                <Link
                  to={`/models/model2`}
                  className="Front_card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="Front_info">
                    <p style={{ textAlign: "center" }}>Precision Agriculture</p>
                    <div className="features_div">
                      {precisionAgricultureFeatures.map((ele, ind) => (
                        <div key={ind}>{ele}</div>
                      ))}
                    </div>
                  </div>
                  <img
                    className="logo_image"
                    src="https://static.vecteezy.com/system/resources/previews/020/465/922/non_2x/woman-hand-with-potato-plantations-grow-in-field-vegetable-rows-farming-agriculture-smart-farming-and-precision-agriculture-4-0-modern-agricultural-technology-and-data-management-to-industry-farm-photo.jpg"
                    alt="Precision Agriculture"
                  />
                </Link>
              </div>
              <Link
                to={`/models/model3`}
                className="Front_card"
                style={{ textDecoration: "none" }}
              >
                <img
                  className="logo_image"
                  src="https://www.asiafarming.com/wp-content/uploads/2023/03/Different-Ways-to-Improve-Crop-Yield1-1024x678.jpg"
                  alt="Crop Yield Prediction"
                />
                <div className="Front_info">
                  <p style={{ textAlign: "center" }}>Crop Yield Prediction</p>
                  <div className="features_div">
                    {cropYieldPredictionFeatures.map((ele, ind) => (
                      <div key={ind}>{ele}</div>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="align-right">
                <Link
                  to={`/models/model4`}
                  className="Front_card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="Front_info">
                    <p style={{ textAlign: "center" }}>Climate Resilience</p>
                    <div className="features_div">
                      {climateResilienceFeatures.map((ele, ind) => (
                        <div key={ind}>{ele}</div>
                      ))}
                    </div>
                  </div>
                  <img
                    className="logo_image"
                    src="https://img.freepik.com/free-photo/climate-change-with-dry-soil_23-2149217819.jpg"
                    alt="Climate Resilience"
                  />
                </Link>
              </div>
              <Link
                to={`/models/model5`}
                className="Front_card"
                style={{ textDecoration: "none" }}
              >
                <img
                  className="logo_image"
                  src="https://www.course5i.com/wp-content/uploads/Advt_WP_thumbnails.jpg"
                  alt="Market Intelligence"
                />
                <div className="Front_info">
                  <p style={{ textAlign: "center" }}>Market Intelligence</p>
                  <div className="features_div">
                    {marketIntelligenceFeatures.map((ele, ind) => (
                      <div key={ind}>{ele}</div>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;

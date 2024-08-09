import React, { useEffect } from "react";

const Model2 = () => {
  useEffect(() => {
    window.location.href = "http://localhost:8052";
  }, []);

  return (
    <div>
      <h5>Redirecting...</h5>
    </div>
  );
};

export default Model2;

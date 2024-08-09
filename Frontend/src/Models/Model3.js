import React, { useEffect } from "react";

const Model3 = () => {
  useEffect(() => {
    window.location.href = "http://localhost:5000";
  }, []);

  return (
    <div>
      <h5>Redirecting...</h5>
    </div>
  );
};

export default Model3;

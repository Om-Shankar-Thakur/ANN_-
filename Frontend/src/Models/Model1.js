import React, { useEffect } from "react";

const Model1 = () => {
  useEffect(() => {
    window.location.href = "http://localhost:8080";
  }, []);

  return (
    <div>
      <h5>Redirecting...</h5>
    </div>
  );
};

export default Model1;

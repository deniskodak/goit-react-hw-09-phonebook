import React from "react";
import Loader from "react-loader-spinner";

const styles = {
  loaderContainer: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
  },
};
const LoaderWithContainer = () => (
  <div style={styles.loaderContainer}>
    <Loader type="Grid" color="#226a8d" height={150} width={150} />
  </div>
);

export default LoaderWithContainer;

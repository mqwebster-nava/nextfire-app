import React from "react";

interface LoaderProps {
  show: boolean;
}

const Loader: React.FC<LoaderProps> = ({ show }) => {
  return show ? <div className="loader"></div> : null;
};

export default Loader;

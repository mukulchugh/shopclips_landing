import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, link, size }) => (
  <a
    className={`button cursor-pointer bg-white flex items-center justify-center rounded-md bg-indigo-900 text-black font-semibold  ${
      size === "lg" ? "px-4 py-3 text-body-md" : "px-3 py-2 text-[12px]"
    }`}
    href={link}>
    {label}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
  </a>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Button;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Button = ({ label, link, size, className, icon = true, url = false, onPress}) => {
  return onPress ? <button className={`cursor-pointer  whitespace-nowrap flex items-center justify-center rounded-md bg-indigo-500 text-black font-semibold  ${
    size === "lg" ? "px-4 py-3 text-body-md" : "px-3 py-2 text-[12px]"} ${className} `} onClick={() => onPress()}>{label}</button> : url ? (
    <a

      href={link}
      className={`cursor-pointer whitespace-nowrap flex items-center justify-center rounded-md bg-indigo-500 text-black font-semibold  ${
        size === "lg" ? "px-4 py-3 text-body-md" : "px-3 py-2 text-[12px]"} ${className} `}
    >
      {label}
      {icon && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>}
    </a>
  ) : (
    <Link
    className={`cursor-pointer whitespace-nowrap flex items-center justify-center rounded-md bg-indigo-500 text-black font-semibold  ${
      size === "lg" ? "px-4 py-3 text-body-md" : "px-3 py-2 text-[12px]"} ${className} `}
    to={link}>
    {label}
    {icon && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>}
  </Link>
  );
}



Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Button;

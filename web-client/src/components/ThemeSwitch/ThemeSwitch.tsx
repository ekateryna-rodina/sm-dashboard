import React, { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("dark-mode");
  }, [darkMode]);
  return (
    <>
      <input
        id="themeSwither"
        type="checkbox"
        onChange={() => setDarkMode(!darkMode)}
      />
      <label htmlFor="themeSwither">
        <span>{darkMode ? "light" : "dark"}</span>
      </label>
    </>
  );
};

export default ThemeSwitch;

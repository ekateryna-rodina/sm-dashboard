import React, { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const defaultMode = () => {
    const lsMode = localStorage.getItem("darkMode");
    if (lsMode === null) return false;
    return lsMode === "true";
  };
  const [darkMode, setDarkMode] = useState(defaultMode());
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }

    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);
  const onModeChangeHandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="header__switch-container">
      <span className="header__switch-label">
        {darkMode ? "light mode" : "dark mode"}
      </span>
      <label className="header__switch" htmlFor="themeSwither">
        <input
          id="themeSwither"
          type="checkbox"
          onChange={onModeChangeHandler}
        />
        <span className="header__switch-slider"></span>
      </label>
    </div>
  );
};

export default ThemeSwitch;

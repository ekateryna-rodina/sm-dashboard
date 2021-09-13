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
    <>
      <input id="themeSwither" type="checkbox" onChange={onModeChangeHandler} />
      <label htmlFor="themeSwither">
        <span>{darkMode ? "light" : "dark"}</span>
      </label>
    </>
  );
};

export default ThemeSwitch;

import React from "react";

const Settings = ({ darkMode, toggleDarkMode }) => {
  return (
    <div>
      <h2>Settings</h2>
      <label>
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        Enable Dark Mode
      </label>
    </div>
  );
};

export default Settings;

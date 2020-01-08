import React, { memo } from "react";
import "./Header.css";

const Header = memo(() => {
  return (
    <header className="header">
      <h2 className="header_title">test app</h2>
    </header>
  );
});

export default Header;

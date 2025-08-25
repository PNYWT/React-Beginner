import React from "react";

const Footer = ({ noSpaceName }: { noSpaceName: string }) => {
  return (
    <footer className="App-footer">
      <p>&copy; 2023 {noSpaceName}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

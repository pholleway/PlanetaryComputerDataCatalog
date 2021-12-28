import React from "react";
import { registerIcons } from "@fluentui/react/lib/Styling";

const OptionIcon = (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    className="svg"
    fill="currentColor"
  >
    <path d="M6 9a2 2 0 011.94 1.5h5.56a.5.5 0 01.09 1H7.94a2 2 0 01-3.88 0H2.5a.5.5 0 01-.09-1H4.06A2 2 0 016 9zm4-6a2 2 0 011.94 1.5h1.56a.5.5 0 01.09 1H11.94a2 2 0 01-3.88 0H2.5a.5.5 0 01-.09-1H8.06A2 2 0 0110 3z"></path>
  </svg>
);

export const registerCustomIcons = () => {
  registerIcons({
    icons: {
      Options: OptionIcon,
    },
  });
};
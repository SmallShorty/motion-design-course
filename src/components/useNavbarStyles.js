import { useEffect } from "react";

export const useNavbarStyles = (bgColor, tColor, aColor) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--navbar-background", bgColor);
    document.documentElement.style.setProperty("--navbar-text-color", tColor);
    document.documentElement.style.setProperty("--navbar-accent", aColor);
  }, [bgColor, tColor, aColor]);
};

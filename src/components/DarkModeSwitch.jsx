"use client";
import React, { useEffect, useState } from "react";
import { HiLightBulb } from "react-icons/hi";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  },[])

  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <HiLightBulb
          onClick={() => setTheme("light")}
          className="cursor-pointer text-xl hover:text-amber-500"
        />
      ) : (
        <BsFillMoonFill
          className="cursor-pointer text-xl hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}

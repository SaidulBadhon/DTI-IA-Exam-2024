import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-[150px]  container flex flex-col items-center justify-center p-6 mx-auto space-y-4 sm:flex-row"
      style={{
        zIndex: 1000,
      }}
    >
      <p className="text-sm text-gray-600 p-0 !m-0">
        © {currentYear} SaidulBadhon. All rights reserved.
      </p>
    </footer>
  );
}

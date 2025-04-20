import React from "react";

export function MainCard({ children }) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-black w-[90%] max-w-[1156px] h-auto xl:h-[537px] pt-[39px] mx-auto px-5 xl:px-[326px] flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}

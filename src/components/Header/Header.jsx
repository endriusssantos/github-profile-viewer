import React from "react";

export function Header() {
  return (
    <div className="flex items-center justify-center flex-wrap text-center leading-none gap-[11px] mb-[27px]">
      <img src="../src/assets/images/logo-github.svg" alt="logo github" />
      <h1 className="text-white text-[60px] font-semibold">
        Perfil <span className="font-bold">GitHub</span>
      </h1>
    </div>
  );
}

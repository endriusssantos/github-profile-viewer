import React from "react";

export function UserCard({ user }) {
  return (
    <div className="bg-lightGray flex items-center gap-[32px] w-[90%] xl:w-[804px] px-2 xl:px-[33px] py-[19px] text-white text-center rounded-3xl">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-[100px] xl:w-[220px] h-[100px] xl:h-[220px] rounded-full border-2 border-azure"
      />
      <div className="text-start flex flex-col items-start gap-4">
        <p className="text-azure text-xl font-bold">
          {user?.name ?? "Esse usuário não tem um nome cadastrado"}
        </p>
        <p className="text-black text-sm font-light">
          {user?.bio ?? "Esse usuário não tem uma bio cadastrada"}
        </p>
      </div>
    </div>
  );
}

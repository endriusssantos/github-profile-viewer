import React from "react";

export function ErrorMessage({ message }) {
  return (
    <div className="bg-lightGray w-[90%] xl:w-[804px] px-2 xl:px-[107px] py-[17px] rounded-xl">
      <p className="text-red-500 text-xl max-w-[520px] text-center">
        {message}
      </p>
    </div>
  );
}

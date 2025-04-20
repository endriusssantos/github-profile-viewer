import React, { useState } from "react";
import { UserCard } from "../UserCard/UserCard";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { useGitHubUser } from "../../hooks/useGitHubUser";
import searchIcon from "../../assets/images/search-icon.svg";

export function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const { userData, error, isLoading, searchUser } = useGitHubUser();

  const handleSearch = () => {
    searchUser(searchValue);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="w-full flex flex-col items-center mb-[327px]">
      <div className="relative w-[300px] xl:w-[503px] h-[62px] flex items-center pl-4 mb-[27px] border bg-white rounded-xl">
        <input
          type="text"
          name="search"
          aria-label="Buscar usuário"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Digite um usuário do GitHub"
          className="bg-transparent outline-none xl:text-xl font-semibold placeholder-black placeholder:font-semibold w-full h-[62px]"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 bg-[#005CFF] w-[62px] h-[62px] flex items-center justify-center rounded-xl"
        >
          <img src={searchIcon} alt="search icon" />
        </button>
      </div>

      {isLoading && <LoadingSpinner />}
      {!isLoading && error && <ErrorMessage message={error} />}
      {!isLoading && userData && <UserCard user={userData} />}
    </div>
  );
}

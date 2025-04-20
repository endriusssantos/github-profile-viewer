import { useState } from "react";
import { fetchGitHubUser } from "../services/github";

export function useGitHubUser() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchUser = async (searchValue) => {
    if (!searchValue.trim()) {
      setError("Por favor, digite um nome de usuário");
      setUserData(null);
      return;
    }

    setIsLoading(true);
    try {
      const data = await fetchGitHubUser(searchValue);
      setUserData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { userData, error, isLoading, searchUser };
}

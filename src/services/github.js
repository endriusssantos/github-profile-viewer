export async function fetchGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error("Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

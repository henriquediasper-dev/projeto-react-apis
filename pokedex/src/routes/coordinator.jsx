export const goToHome = (navigate) => {
  // Função para redirecionar para a página inicial ("/")
  navigate("/");
};

export const goToPokedexPage = (navigate) => {
  // Função para redirecionar para a página da pokédex ("/pokedex")
  navigate("/pokedex");
};

export const goToDetailPage = (navigate, id) => {
  // Função para redirecionar para a página de detalhes ("/detail")
  navigate("/detail/" + id);
};

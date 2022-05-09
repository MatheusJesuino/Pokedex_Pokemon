export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToPokedex = (navigate) => {
  navigate("/pokedex");
};

export const goToDetalhes = (navigate, name) => {

    navigate(`/detalhes/${name}`)
}


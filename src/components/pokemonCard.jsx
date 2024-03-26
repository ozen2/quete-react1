function PokemonCard (){
    const firstPokemon = pokemonList[1];
    return <figure>
  {firstPokemon.imgSrc ? (
        <img src={firstPokemon.imgSrc} alt={firstPokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{firstPokemon.name}</figcaption>
    </figure>
}
export default PokemonCard

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
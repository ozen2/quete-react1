import PokemonCard from "./components/pokemonCard";

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
const pokemon = {
  name: "bulbasaur",
  imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
};

function App (){
  return <PokemonCard pokemon={pokemon}/>;
    
}

export default App;

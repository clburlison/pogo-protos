const POGOProtos = require('..');

const nbPokemon = Object.keys(POGOProtos.Rpc.HoloPokemonId).length;
console.log(`We have ${nbPokemon} pokemonds in protos.`);

const POGOProtos = require('..');

const nbPokemon = Object.keys(POGOProtos.Rpc.HoloPokemonId).length;
console.log(`We have ${nbPokemon} pokemons in protos.`);
const nbCostumes = Object.keys(POGOProtos.Rpc.PokemonDisplayProto.Costume).length;
console.log(`We have ${nbCostumes} costumes in protos.`);
const nbForms = Object.keys(POGOProtos.Rpc.PokemonDisplayProto.Form).length;
console.log(`We have ${nbForms} forms in protos.`);
const nbBadges = Object.keys(POGOProtos.Rpc.HoloBadgeType).length;
console.log(`We have ${nbBadges} badges in protos.`);
const nbMoves = Object.keys(POGOProtos.Rpc.HoloPokemonMove).length;
console.log(`We have ${nbMoves} moves in protos.`);
const nbItems = Object.keys(POGOProtos.Rpc.Item).length;
console.log(`We have ${nbItems} items in protos.\n`);

var myMessage = POGOProtos.Rpc.RecycleItemProto.fromObject({
    item: POGOProtos.Rpc.Item.ITEM_POTION,
    count: 50
});
  
var encoded = POGOProtos.Rpc.RecycleItemProto.encode(myMessage).finish();
var decodedAgain = POGOProtos.Rpc.RecycleItemProto.decode(encoded);
console.log('Test encode/decode:\nItem: ' + decodedAgain.item + ' count: ' + decodedAgain.count); // will print 50

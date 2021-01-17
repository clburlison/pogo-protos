const POGOProtos = require('..');

const nbPokemon = Object.keys(POGOProtos.Rpc.HoloPokemonId).length;
console.log(`We have ${nbPokemon} pokemons in protos.`);

/*
var myMessage = POGOProtos.Rpc.RecycleItemProto.fromObject({
    item_id: POGOProtos.Rpc.Item.ITEM_POTION,
    count: 50
  });
  
  var encoded = POGOProtos.Rpc.RecycleItemProto.encode(myMessage).finish();
  
  var decodedAgain = POGOProtos.Rpc.RecycleItemProto.decode(encoded);
  console.log(decodedAgain.count); // will print 50
  //*/

# pogo-protos
Uses [protobuf.js](https://github.com/dcodeIO/protobuf.js) to compile the Protobuf files from
[POGOProtos](https://github.com/Furtif/POGOProtos) into an easy to use Node module.

<!--
[![npm version](https://badge.fury.io/js/pogo-protos.svg)](https://badge.fury.io/js/pogo-protos)
![npm downloads](https://img.shields.io/npm/dt/pogo-protos.svg) --> 
[![Build Status](https://travis-ci.com/Furtif/pogo-protos.svg?branch=master)](https://travis-ci.com/Furtif/pogo-protos)
![license](https://img.shields.io/npm/l/pogo-protos.svg)


## How to use
```javascript
const POGOProtos = require('pogo-protos');

const nbPokemon = Object.keys(POGOProtos.Rpc.HoloPokemonId).length;
console.log(`We have ${nbPokemon} pokemons in protos.`);
const nbCostumes = Object.keys(POGOProtos.Rpc.PokemonDisplayProto.Costume).length;
console.log(`We have ${nbCostumes} costumes in protos.`);
const nbForms = Object.keys(POGOProtos.Rpc.PokemonDisplayProto.Form).length;
console.log(`We have ${nbForms} forms in protos.`);
const nbBadges = Object.keys(POGOProtos.Rpc.HoloBadgeType).length;
console.log(`We have ${nbBadges} badges in protos.`);
const nbItems = Object.keys(POGOProtos.Rpc.Item).length;
console.log(`We have ${nbItems} items in protos.\n`);

var myMessage = POGOProtos.Rpc.RecycleItemProto.fromObject({
    item: POGOProtos.Rpc.Item.ITEM_POTION,
    count: 50
});
  
var encoded = POGOProtos.Rpc.RecycleItemProto.encode(myMessage).finish();
var decodedAgain = POGOProtos.Rpc.RecycleItemProto.decode(encoded);
console.log('Test encode/decode:\nItem: ' + decodedAgain.item + ' count: ' + decodedAgain.count); // will print 50
```
### Out
```
We have 729 pokemons in protos.
We have 47 costumes in protos.
We have 2169 forms in protos.
We have 275 badges in protos.
We have 67 items in protos.

Test encode/decode:
Item: 101 count: 50
```

For more details see the [protobuf.js documentation](https://github.com/dcodeIO/protobuf.js/wiki).

## Usage with TypeScript
TypeScript definitions are included. Modern IDE should use them automatically.

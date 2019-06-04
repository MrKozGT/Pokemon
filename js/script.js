var = angular.module("Pokemon",[])

Pokedex.controller("Pokemon")

for(var m=1;<=500;m++){
	$https({
		method:"GET",
		url:"https://pokeapi.co/api/v2/30" +m
	}).then(){

	}
}
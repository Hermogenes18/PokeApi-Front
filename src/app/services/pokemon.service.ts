import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getByPage(){
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20");
  }

  getById(){

  }

  getDesciption(){

  }
}

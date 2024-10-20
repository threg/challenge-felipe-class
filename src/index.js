class Hero { // - Classes.
  constructor(name, age, heroClass) {
    this.name = name;
    this.age = age;
    this.heroClass = heroClass;
  }

  attack() { // - Função.
    let attackClass = "" // - Variável.

    switch (this.heroClass) { // - Estrutura de decisão.
      case "mago":
        attackClass = "usou magia"; // - Operador de atribuição.
        break;
      case "guerreiro":
        attackClass = "usou espada";
        break;
      case "monge":
        attackClass = "usou artes marciais";
        break;
      case "ninja":
        attackClass = "usou shuriken";
        break;
      default:
        console.log("Classe não encontrada.");
        break;
    }

    console.log(`O ${this.heroClass} atacou usando ${attackClass}`)
  }
}

let warriorHero = new Hero("Talles", 21, "guerreiro") // - Objetos.
let wizardHero = new Hero("Thamires", 21, "mago")
let monkHero = new Hero("Spike", 18, "monge")
let ninjaHero = new Hero("Fifi", 3, "ninja")

let heroes = [warriorHero, wizardHero, monkHero, ninjaHero] // - Vetores.

for (let i = 0; i < heroes.length; i++){ // - Estrutura de repetição.
    heroes[i].attack();
}
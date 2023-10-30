class Day {
  #taak;
  #datum;
  #dagNaam;
  #maand;
  #jaar;

  constructor(taak, datum, dagNaam, maand, jaar) {
    this.#taak = taak;
    this.#datum = datum;
    this.#dagNaam = dagNaam;
    this.#maand = maand;
    this.#jaar = jaar;
  }
}
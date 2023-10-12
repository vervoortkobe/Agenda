class Day {
  #taken;
  #datum;
  #dagNaam;
  #maand;
  #jaar;

  constructor(taken, datum, dagNaam, maand, jaar) {
    this.#taken = taken;
    this.#datum = datum;
    this.#dagNaam = dagNaam;
    this.#maand = maand;
    this.#jaar = jaar;
  }
}
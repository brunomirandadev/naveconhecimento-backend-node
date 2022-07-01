class Turma {
  constructor(idTurma, nomeTurma) {
    this.idTurma = idTurma;
    this.nomeTurma = nomeTurma;
  }

  toString() {
    return "idTurma: " + this.idTurma + " nomeTurma: " + this.nomeTurma;
  }
}
module.exports = Turma;

//main();

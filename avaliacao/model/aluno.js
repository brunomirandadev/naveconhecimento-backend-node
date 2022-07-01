class Aluno {
  constructor(matricula, nota1, nota2, nota3, idUsuario, idTurma) {
    this.matricula = matricula;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.idUsuario = idUsuario;
    this.idTurma = idTurma;
  }

  toString() {
    return (
      "matricula: " +
      this.matricula +
      " nota1: " +
      this.nota1 +
      " nota2: " +
      this.nota2 +
      " nota3: " +
      this.nota3 +
      " idUsuario: " +
      this.idUsuario +
      "idTurma: " +
      this.idTurma
    );
  }
}
module.exports = Aluno;

//main();

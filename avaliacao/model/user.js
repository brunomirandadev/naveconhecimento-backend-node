class User {
  constructor(id, nome, funcao, usuario, senha) {
    this.id = id;
    this.nome = nome;
    this.funcao = funcao;
    this.usuario = usuario;
    this.senha = senha;
  }

  toString() {
    return (
      "id: " +
      this.id +
      " nome: " +
      this.nome +
      " funcao: " +
      this.funcao +
      " usuario: " +
      this.usuario +
      " senha: " +
      this.senha
    );
  }
}

function main() {
  var user = new User(1, "Bruno", "bruno", "123");
  console.log(user.toString());
}

module.exports = User;

//main();

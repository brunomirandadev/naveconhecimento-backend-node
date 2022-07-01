const User = require("./user");
const Turma = require("./turma");
const Aluno = require("./aluno");

exports.getUsers = function () {
  let users = [];
  var user1 = new User("1", "Aluno 1", "Aluno", "aluno1", "123456");
  var user2 = new User("2", "Professor", "Professor", "professor", "123456");
  var user3 = new User("3", "Aluno 3", "Aluno", "aluno3", "123456");
  var user4 = new User("4", "Aluno 4", "Aluno", "aluno4", "123456");
  users.push(user1, user2, user3, user4);
  return users;
};

exports.getAlunos = function () {
  let alunos = [];
  var aluno1 = new Aluno(0001, 7, 7, 7, 1, 1);
  var aluno2 = new Aluno(0003, 7, 6, 5, 3, 2);
  var aluno3 = new Aluno(0002, 7, 6, 6, 4, 1);
  alunos.push(aluno1, aluno2, aluno3);
  return alunos;
};

exports.getTurmas = function () {
  let turmas = [];
  var turma1 = new Turma(1, "Turma A");
  var turma2 = new Turma(2, "Turma B");
  turmas.push(turma1, turma2);
  return turmas;
};

//let user = users.find(function (user) {
//  return user.usuario == "bruno";
//});

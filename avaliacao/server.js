var express = require("express");
var app = express();
var bp = require("body-parser");
var populate = require("./model/Populate");

var users = populate.getUsers();

var urlc = bp.urlencoded({ extended: false });
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/processar_get", function (req, res) {
  res.end("Bem vindo(a): " + req.query.nome + " Idade: " + req.query.idade);
});
app.post("/processar_post", urlc, function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });

  var users = populate.getUsers();
  var alunos = populate.getAlunos();

  let user = users.find(function (user) {
    return user.usuario == req.body.login;
  });

  if (user != undefined) {
    if (user.funcao.toUpperCase() == "Aluno".toUpperCase()) {
      if (req.body.login == user.usuario && req.body.senha == user.senha) {
        let aluno = alunos.find(function (aluno) {
          return aluno.idUsuario == user.id;
        });

        var media =
          (parseInt(aluno.nota1) +
            parseInt(aluno.nota2) +
            parseInt(aluno.nota3)) /
          3;
        var situacao;

        if (media >= 7) {
          situacao = "Aprovado";
        } else {
          situacao = "Reprovado";
        }

        var texto =
          "Bem vindo(a): " +
          user.funcao +
          " Matricula: " +
          aluno.idUsuario +
          " Nome: " +
          user.nome +
          "</br></br> Nota 1: " +
          aluno.nota1 +
          "</br> Nota 2: " +
          aluno.nota2 +
          "</br> Nota 3: " +
          aluno.nota3 +
          "</br></br> Media: " +
          media.toPrecision(3) +
          "</br></br> Situacao: " +
          situacao;

        res.end(texto);
      } else {
        res.end("Senha invalida");
      }
    }
    if (user.funcao.toUpperCase() == "Professor".toUpperCase()) {
      if (req.body.login == user.usuario && req.body.senha == user.senha) {
        let turmas = populate.getTurmas();
        res.write(
          "Bem vindo(a): " +
            user.funcao +
            "(a) " +
            user.nome +
            " </br></br></br> "
        );
        var texto = '<table border="1px solid black">';
        texto += "<tr>";
        texto += "<th>Id Turma</th>";
        texto += "<th>Nome Turma</th>";
        texto += "<th>Selecione Turma</th>";
        texto += "</tr>";
        turmas.forEach(showTurmas);
        function showTurmas(value) {
          texto +=
            "<tr><td>" +
            value.idTurma +
            "</td><td>" +
            value.nomeTurma +
            "</td><td><a href=processar_turma?idTurma=" +
            value.idTurma +
            ">Selecione</a></td>" +
            "</tr>";
        }
        texto += "</table>";

        res.write(texto);
        res.end();
      } else {
        res.end("Senha invalida");
      }
    }
  } else {
    res.end("Usuario ou senha invalida");
  }
});

app.get("/processar_turma", urlc, function (req, res) {
  var users = populate.getUsers();

  var alunos = populate.getAlunos();
  let alunosByTurma = alunos.filter(function (aluno) {
    return aluno.idTurma == req.query.idTurma;
  });

  var texto = '<table border="1px solid black">';
  texto += "<tr>";
  texto += "<th>Nome aluno</th>";
  texto += "<th>Nota 1</th>";
  texto += "<th>Nota 2</th>";
  texto += "<th>Nota 3</th>";
  texto += "<th>Media</th>";
  texto += "<th>Situacao</th>";
  texto += "</tr>";
  alunosByTurma.forEach(showAlunosByTurma);
  function showAlunosByTurma(value) {
    var media =
      (parseInt(value.nota1) + parseInt(value.nota2) + parseInt(value.nota3)) /
      3;

    var situacao;

    if (media >= 7) {
      situacao = "Aprovado";
    } else {
      situacao = "Reprovado";
    }

    let user = users.find(function (user) {
      return user.id == value.idUsuario;
    });

    texto +=
      "<tr><td>" +
      user.nome +
      "</td><td>" +
      value.nota1 +
      "</td><td>" +
      value.nota2 +
      "</td><td>" +
      value.nota3 +
      "</td><td>" +
      media.toPrecision(3) +
      "</td><td>" +
      situacao;
    ("</td></tr>");
  }
  texto += "</table>";

  res.write(texto);
  res.end();
});

app.listen(8080);

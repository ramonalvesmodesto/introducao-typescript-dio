"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
};
pessoa.idade = 29;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 27,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: "Jessica",
    idade: 27,
    profissao: Profissao.Desenvolvedora,
    materias: ["Biologia"]
};

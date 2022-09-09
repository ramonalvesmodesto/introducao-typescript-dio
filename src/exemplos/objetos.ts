const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadorDeFutebol
}

interface Pessoa {
    nome: string, 
    idade: number, 
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[],
}

const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 27,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: "Jessica",
    idade: 27,
    profissao: Profissao.Desenvolvedora,
    materias: ["Biologia"]
}
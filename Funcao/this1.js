const pessoa = { saudacao: 'Bom dia',
falar(){
    console.log(this.saudacao)
}
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito de paradima

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()
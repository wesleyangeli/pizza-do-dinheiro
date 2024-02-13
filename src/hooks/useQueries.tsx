import { useState } from "react";

export const useQueries = () => {
  const [queries] = useState([
    {
      name: "comportamento",
      title: "I COMPORTAMENTO",
      query: `Dê uma nota de 0 a 10 para seu nível de satisfação sobre
        seu comportamento frente ao seu dinheiro. Você manda no
        seu dinheiro ou deixa ele te dominar? Você sabe exatamente
        o que fazer com todo dinheiro que você ganha, ou ainda não
        sabe administrar esse aspecto? Como se sente em relação a
        esse pilar?`,
    },
    {
      name: "planejamento",
      title: "II PLANEJAMENTO",
      query: `Dê uma nota de 0 a 10 para seu nível de
          satisfação sobre o seu planejamento financeiro. Ele funciona?
          Você está cada vez mais rico? Você tem clareza do que está
          seguindo? As metas são boas e tangíveis? Ou, na verdade, você
          não tem planejamento nenhum?`,
    },
    {
      name: "conhecimento",
      title: "III CONHECIMENTO",
      query: `Dê uma nota de 0 a 10 para seu nível de
          satisfação sobre o seu conhecimento em como manejar todo o
          dinheiro que você recebe e produz. Você tem conhecimento
          técnico sobre investimentos e maneiras de como aumentar
          progressivamente sua riqueza? Ou você reconhece que não tem
          conhecimento suficiente para isso e que, se tivesse, já estaria em
          outro patamar financeiro?`,
    },
    {
      name: "investimentos",
      title: "IV INVESTIMENTOS",
      query: `Dê uma nota de 0 a 10 para seu nível de
          satisfação sobre os seus investimentos. Você já faz investimentos
          inteligentes ou nunca fez e nem tem ideia de como começar? Você
          é um bom investidor ou um mal investidor? Elenque com as notas
          de 0 a 10 o seu nível de satisfação com relação a esse pilar
          fundamental.`,
    },
    {
      name: "poupanca",
      title: "V POUPANÇA",
      query: `Dê uma nota de 0 a 10 para seu nível de
          satisfação sobre a quantidade de dinheiro que você conseguiu
          juntar e quanto tem poupado até hoje. Você entende que você
          poupou bem seus rendimentos até agora ou que não poupou o
          suficiente?`,
    },
    {
      name: "consumo",
      title: "VI CONSUMO",
      query: `Dê uma nota de 0 a 10 para seu nível de
          satisfação sobre a forma e qualidade do seu consumo. Como você
          utiliza seu dinheiro? Você consome de maneira criteriosa ou sem
          nenhuma noção coerente? Você é um bom consumidor,
          inteligente, estratégico e procura as melhores oportunidades
          quando de fato é necessário? Ou você é um consumidor
          compulsivo? Compra todas as vezes que lhe são oferecidos um
          produto ou serviço? Elenque o seu nível de satisfação em relação
          a esse aspecto pessoal de consumo do seu dinheiro.`,
    },
    {
      name: "mentalidade",
      title: "VII MENTALIDADE",
      query: `Dê uma nota de 0 a 10 para seu nível de
          satisfação sobre como você pensa sobre dinheiro. Você tem uma
          mentalidade aberta para ficar rico ou é a pessoa que não quer ficar
          pobre? Você acredita que a riqueza pode ajudar muitas pessoas
          ou acredita que aquelas pessoas que são ricas começam a ter
          problemas por conta do seu dinheiro? Como anda sua satisfação
          quando o assunto é dinheiro?`,
    },
    {
      name: "patrimonio",
      title: "VII PATRIMÔNIO",
      query: `Dê uma nota de 0 a 10 para seu nível de
          satisfação sobre o seu patrimônio constituído. Você está satisfeito
          com tudo que criou até agora, ou seu nível para esse pilar ainda
          continua baixo?`,
    },
    {
      name: "aposentadoria",
      title: "IX APOSENTADORIA",
      query: `Dê uma nota de 0 a 10 para seu nível de
          satisfação sobre como você vai se aposentar. Está claro para você
          quando e como vai ser sua aposentadoria? Isso te agrada em qual
          nível de 0 a 10?`,
    },
    {
      name: "estadoAtual",
      title: "X ESTADO ATUAL",
      query: `Dê uma nota de 0 a 10 para seu nível de
          satisfação sobre seu estado atual financeiro. Você está feliz e
          satisfeito com os seus rendimentos mensais e anuais? Coloque
          abaixo, de 0 a 10, seu nível de satisfação com relação esse pilar
          de fundamental importância.`,
    },
  ]);

  return queries;
};

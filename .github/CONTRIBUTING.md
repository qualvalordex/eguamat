# Guia de contribuição do Console EguaMat

Olá! Estamos muito felizes que você quer contribuir com nosso projeto. Antes de contribuir, por favor tenha certeza de seguir todas as recomendações e submeter.

## Introdução

O EguaMat é uma ferramenta da Linguagem Egua com grande foco nas áreas educacional e cinetífica, portando para implementar uma função nova no EguaMat, ou aprimorar quaisquer funções existentes, são exigidas algumas etapas para que sua contribuição seja aceita. 

## Contribuindo com funções para o EguaMat

### Parte Computacional

Quando se trata da logística computacional para a implementação de funções no EguaMat, o usuário deve possuir um conhecimento razoável me Javascript para compreender adequadamente a sintaxe e os padrões existentes nas funções já implementadas.
Caso deseja aprender um pouco mais sobre Javascript, recomendamos as seguintes obras, as mesmas são apresentam conteúdo suficiente para que o usuário contribua com o progresso do EguaMat.

Portanto temos as seguintes recomendações:

| Artigos | Vídeos |
|---|---|
| [Como é desenvolvida uma linguagem de programação?](https://pt.stackoverflow.com/questions/124436/como-%C3%A9-desenvolvida-uma-linguagem-de-programa%C3%A7%C3%A3o#:~:text=Criar%20uma%20linguagem%20de%20programa%C3%A7%C3%A3o,%C3%A9%20algo%20conceitual%2C%20%C3%A9%20abstrata.) | [Tutorial criando uma linguagem de programação em Python](https://www.youtube.com/watch?v=9tSuJzwe9Ok&list=PLP7hn9TNf1CEl8A8jQfZSRYcgUIqBhIJU) |
| [Criando linguagem de programação em Node.js](https://repl.it/talk/learn/Making-your-own-programming-language-with-NodeJS/45779) | [Criando uma linguagem de programação em JavaScript](https://youtu.be/YpT-GpcHf2g) |

#### Implementação de Função
```javascript
if (!(foo == false || bar == false)) {
  //...
}
```

Após o desenvolvimento ser concluído, é necessário ter a build web do projeto, que é feita com o comando: 
```sh
npm run build-web
```

> Sugerimos que você abra o arquivo `index.html` em seu navegador para testar as funcionalidades implementadas por você! 

Solicitamos também que você atualize a chave `version` do arquivo `package.json`, pois só assim a ferramenta de CD será capaz de implementar suas atualizações em produção.

Por fim, seu PR deve ser efetuado na branch `desenvolvimento` e solicitamos que você abra uma issue no repositório [Docs](https://github.com/eguatech/docs) informando a sua implementação e uma breve explicação para ser adicionado na documentação.


## Resumo

De maneira bem resumida eis o que precisa ser feito:

- [ ] Montar o ambiente.

- [ ] Efetuar as suas alterações.

- [ ] Executar os testes unitários.

- [ ] Executar a build para web do projeto.

- [ ] Testar localmente suas alterações.

- [ ] Atualizar versão no arquivo `package.json`

- [ ] Abrir issue no repositório Docs.

## Agradecimentos

Desde já agradecemos de coração pela sua contribuição ao projeto. xD

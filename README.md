## VUTTR - Very useful tools to remember
A aplicação é um simples repositório para gerenciar ferramentas digitais com seus respectivos nomes, links, descrições e tags. Feita usando [create-react-app](https://create-react-app.dev/ "create-react-app") e [Typescript](https://www.typescriptlang.org/ "Typescript")
- Live demo: [veryusefultools.herokuapp.com](http://veryusefultools.herokuapp.com "veryusefultools.herokuapp.com")
- Instruções: [Notion](https://www.notion.so/VUTTR-f1869c62a7c54abbb1f974b68694b1ac "Notion")
- Layout das telas: [Figma](https://www.figma.com/file/dNY4qi1Jo5XzIwLsyS0OOb/VUTTR?node-id=0%3A1 "Figma")

------------

### Instalação
Baixe o código ou faça um clone desse repositório. A seguir, rode os seguintes comandos em seu terminal:
#### Instalando com [Yarn](https://yarnpkg.com/ "Yarn")
```shell
cd vuttr
yarn
cd client
yarn
```

#### Instalando com [NodeJs](https://nodejs.org/ "NodeJs")
```shell
cd vuttr
npm install
cd client
npm install
```
------------
### Configurando localmente
Abaixo estão as instruções para rodar o projeto na sua máquina.
#### Rodando com [Yarn](https://yarnpkg.com/ "Yarn")
```shell
cd vuttr
yarn start
cd client
yarn start
```
#### Rodando com [NodeJs](https://nodejs.org/ "NodeJs")
```shell
cd vuttr
npm start
cd client
npm start
```
Com isso você terá a API online em `htpps://localhost:8080` e o client em `htpps://localhost:3000`

------------

### Ferramentas utilizadas
| Ferramenta | Descrição |
| ------------ | ------------ |
| [json-server](https://www.npmjs.com/package/json-server "json-server") |  Fake API Rest para mockar os dados da aplicação |
| [express](https://expressjs.com/ "express") |  Framework que facilita a criação de um servidor para deploy da aplicação no Heroku e para conexão das rotas criadas pelo json-server |
| [cors](https://www.npmjs.com/package/cors "cors") |  Habilitar conexão com o servidor backend de várias origens |
| [lodash](https://lodash.com/ "lodash") |  Utilizou-se a função uniqueId() já que as tags não vinham com id do backend e ele é necessário para passar como key ao componente |
| [axios](https://www.npmjs.com/package/axios "axios") |  Ferramenta que facilita requisições HTTP |
| [react-loading](https://www.npmjs.com/package/react-loading "react-loading") |  Componente para sinalizar carregamento de dados ao usuário |
| [react-modal](https://www.npmjs.com/package/react-modal "react-modal") |  Componente de modal utilizado para adicionar/excluir ferramenta |
| [react-toastify](https://www.npmjs.com/package/react-toastify "react-toastify") |  Componente para informar erros nas requisições |
| [styled-components](https://styled-components.com/ "styled-components") |  Ferramenta para facilitar a estilização e customização dos componentes |

------------

### Melhorias feitas à proposta original
- No wireframe o botão de adicionar estava à direita, porém, por ser a ação principal da aplicação, fica melhor localizado à esquerda do layout. Isso porque é uma aplicação pensada no mundo ocidental e o ponto da esquerda tem maior prioridade na percepção visual.
- Ainda sobre o botão de adicionar, a label no wirefame estava como "Add" porém o título da modal estava como "Add new tool". Para trazer consistência e ter uma aplicação mais explicativa, a label do botão foi alterada para "Add new tool".
- A barra de busca não apresentava um botão de buscar, tampouco de limpar busca. Isso poderia dificultar a compreensão do usuário em como realizar tais ações - mesmo que a busca pelo Enter já seja bem difundida, pistas visuais são sempre interessantes.
- A API retornava as ferramentas cadastradas ordenada da mais antiga para mais nova. O que vemos de boas práticas é - caso a customização de ordenação não seja possível - ordenar do mais novo para o mais antigo. Para isso o retorno da API foi invertida no front-end.
- Os wireframes não mostravam nenhum estado de carregamento ou de erro. Isso é importante para o usuário e segue uma das [heurísticas de design de Jakob Nielsen](https://www.nngroup.com/articles/ten-usability-heuristics/ "heurísticas de design de Jakob Nielsen"): visibilidade de sistema.
- A fim de evitar envio de dados vazios para a API, foi implementado um sistema de validação na modal de adicionar ferramenta.
- As modais não apresentavam um botão de fechar, isso poderia dificultar a compreensão do usuário sobre como sair daquele estado.
- Com a adição de um botão de fechar à direita do título da modal - em forma de X -, foi alterado o ícone do botão de remover ferramenta. Foi usado um ícone de lixo para que não confunda com o X das modais.
- A aplicação se adapta à diversos tamanhos de tela, tornando-se 100% responsiva.

------------

### Sugestão para a aplicação
O maior questionamento sobre a proposta é sobre a busca ser feita no backend. A API sempre nos retorna todas as ferramentas - não há qualquer limitação como paginação ou perfil de usuário. Por isso, uma vez que todas as ferramentas já estão carregadas, vejo que a melhor forma de buscar esses dados seria pelo front-end. Isso evita novas requisições, possíveis erros e além disso traz os dados requisitados com muito mais velocidade para o usuário.

------------

### Próximos passos
Abaixo estão albuns bugs encontrados após alguns testes em cenários diversos - devices e browsers.
- **[Chrome]** - Foi identificado um bug no posicionamento da label do botão de adicionar ferramenta.
- **[Edge]** - Não dá suporte à função `addEventListener` para o tipo `MediaQueryList` - usado para adaptar os botões na modal de remover ferramenta

------------

### Comentários e feedbacks
Adoraria saber sua opinião sobre o que foi desenvolvido. [Me adicione no LinkedIn](http://linkedin.com/in/mugasparetto "Me adicione no LinkedIn") para podermos entrar em contato.

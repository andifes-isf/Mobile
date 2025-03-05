## Mobile - RedeIsF
Este projeto foi realizado utilizando ReactNative como principal tecnologia para o desenvolvimento de um aplicativo mobile para a comunicação com os serviços do Idiomas sem Fronteiras. O usuário principal é o aluno IsF, porém todos os cargos poderão utilizar o mesmo aplicativo para realizarem suas tarefas

## Pré-requisitos

- [git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Backend](https://github.com/Arata2703/backend_projeto_andifes)
- [AndroidStudio](https://developer.android.com/studio) Todos os testes foram realizados em dispositivos android
- [Expo](https://expo.dev/) Pode ser instalado no seu próprio celular caso queira testar nele.

Compatível com a última versão de todas as tecnologias, atualizado pela ultima vez em Fevereiro de 2025.

## Para compilar o projeto

Certifique-se de possuir todos os pré-requisitos instalados, esteja com alguma instância Android ou IOS com Expo conectado na mesma rede que seu computador.

#### Na pasta backend do projeto:
1. `Siga a documentação do projeto`
2. `Faça seu próprio arquivo .env`
3. `Certifique-se de que a conexão esteja sendo feito no canal 8800`


#### Na pasta do projeto mobile
1. `npm install`
2. `npm start`
3.  `Selecione qual dispositivo deve se conectar pela CLI do Expo`

## Login de usuário

A primeira tela do sistema é a de login, e é necessário fazer a certificação de usuário com uma das contas existentes no banco de teste, segue alguns possíveis usuários:

- Login: `Balla`	Role: `alunoisf`
- Login: `Bruno` Role: `alunoisf`
- Login: `Carlos` Role: `professorisf`
- Login: `Enio` Role: `docenteministrante`

Em todos os casos, a senha do usuário será `senha`

## Descrição das telas

- `Curso.tsx`: Demonstra a turma atual que o aluno IsF participa, retorna dados como nome, trilha, componente. Possui botões para a tela de CursoFeedback e para CursoHistoricos
- `CursoFeedback.tsx`: Tela em que o usuário pode enviar sua avaliação sobre o ensino da matéria, recolhe uma lista json que será contabilizada como o feedback do aluno.
- `CursoHistoricos.tsx`: Retorna uma lista de histórico de todas as turmas que este aluno já participou, ele também pode trocar a visão de acordo com o componente curricular que cada turma aborda.
- `Login.tsx`: Tela inicial, possui requisição dos dados de login de usuário e armazena o token de certificação para as próximas telas.
- `Ofertas.tsx`: Retorna a lista de ofertas disponíveis no momento, possui uma filtragem de acordo com o idioma no momento, porém deve ser trocado para uma filtragem de proficiência.
- `Ouvidoria.tsx`: Canal de comunicação direta com a coordenação do curso, enviará um json diretamente para os usuários que possuirem este cargo, deve possuir a opção de envio anônimo ou não.
- `Perfil.tsx`: Perfil do usuário, retorna suas informações pessoais como email, telefone, nome completo e login, também retorna dados acadêmicos como nível de proficiência no idioma, documento comprobatório e horas totais de curso, também retorna dados sobre sua instituição de ensino e possui um botão para entrar na tela de edição de dados.
- `PerfilEdit.tsx`: Possibilita o usuário modificar seus dados pessoais, sendo eles email, telefone, etnia, gênero e nome.
- `RelatorioEdit.tsx`: Possibilita a edição do relatório caso o orientador não tenha aprovado a entrega anterior.
- `RelatorioHistorico.tsx`: Listagem de todos os relatórios que este usuário enviou, possui uma caixa de status da entrega (aprovado, pendente, reprovado) e um botão para abrir a edição daquela entrega.
- `RelatorioOrientacao.tsx`: Tela de envio do relatório de orientação, possui os dados do orientador responsável no fim da página.
- `RelatorioPratico.tsx`: Tela de envio do relatório prático, também possui os dados do orientador responsável no fim da página, possui um botão para o histórico de entregas do usuário.
- `Turmas.tsx`: Tela embrionária, não é mais utilizada.

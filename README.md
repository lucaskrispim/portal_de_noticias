# portal_de_noticias

Code review

### Modificado:

1- Adicionei um docker-compose para subir um container com o MySQL Server

2- Adicionei o pacote nodemon

3- Adicionei o pacote dotenv

4- Adicionei o gitignore

5- Modifiquei a versão dos pacotes da aplicação

### Sugestões

1- Arrumar o README file com informações dos requísitos e como rodar o projeto. 

Um exemplo para esse branch. 

Para executar o container: docker-compose up -b
Para executar a aplicação: 

npm i

npm run start:dev

Outro exemplo: https://github.com/lesimoes/COVID-MG

O melhor é executar a aplicação direto no container mas não se preocupe com isso agora.

2- Adicionei um script no package.json com o pacote nodemon, ele reiniciar a aplicação sempre que há mudanças, isso agiliza durante o desenvolvimento.

3- Centralizei todas as suas variaveis de ambiente, isto é, variaveis sua aplicação precisa mas não são de responsabilidade dela, por exemplo, variaveis do banco e a porta da aplicação (variável de configuração).

4- O arquivo gitignore são todos os arquivos, ou diretórios, que o git irá ignorar. Não precisa subir o node_modules para o git.

5- Em produção é recomendável executar a versão específica do pacote, por isso tirei todos os ˆ dos pacotes.

6- A aplicação executou mas retorna quando acesso http://localhost:3000 
Parece que deve existir dados no banco para executar, se for o caso adicionar um arquivo com os scripts sql para adicionar os dados básicos.
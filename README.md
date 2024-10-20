# CodeWord

CodeWord é uma plataforma de compartilhamento e aprendizado colaborativo de projetos de programação.

## Descrição

CodeWord é uma aplicação web que permite aos usuários compartilhar, colaborar e aprender com projetos de programação. A plataforma oferece um ambiente interativo onde desenvolvedores podem criar, editar e compartilhar seus projetos, além de receber feedback e colaborar com outros membros da comunidade.

## Funcionalidades

- Autenticação de usuários
- Criação e gerenciamento de projetos
- Compartilhamento de código
- Sistema de comentários e feedback
- Colaboração em tempo real (em desenvolvimento)

## Tecnologias Utilizadas

- Node.js
- Express.js
- MySQL
- JSON Web Tokens (JWT) para autenticação
- Bcrypt.js para criptografia de senhas
- Dotenv para gerenciamento de variáveis de ambiente
- CORS para permitir requisições de diferentes origens

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/codeword.git
   ```

2. Instale as dependências:
   ```
   cd codeword
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   ```
   PORT=3000
   DB_HOST=localhost
   DB_USER=seu_usuario_mysql
   DB_PASSWORD=sua_senha_mysql
   DB_DATABASE=codeword
   JWT_SECRET=seu_segredo_jwt
   ```

4. Inicie o servidor:
   ```
   npm start
   ```

   Para desenvolvimento, use:
   ```
   npm run dev
   ```

## Contribuição

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

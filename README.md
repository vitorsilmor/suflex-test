
# Suflex Products

Projeto escrito por Vitor Morais para vaga de desenvolvedor backend.


# Instalação

- Faça o clone do projet: git clone git@github.com:vitorsilmor/suflex-test.git
- Crie o arquivo .env dentro da pasta "environments" com os valores do arquivo .env.example que está na mesma pasta.
- Rode o docker compose: docker-compose up --build ou docker compose up --build

Obs: Isto não deverá acontecer, porém, caso exista algum problema na primeira vez a rodar o projeto a causa possivelmente será a dependência do banco de dados que precisa ser construído antes da aplicação subir. Para resolver esse problema, após o container do banco subir, derrube e rode novamente o container da aplicação.

# Notas de pós instalação

- Um container de banco de dados será criado.
- Um container de aplicação será criado.
- Uma rede será criada permitindo a comunicação entre os dois containers.
- Um banco de dados será criado.
- Migrations rodarão.
- Seeds serão enviados para a tabela products.
- A aplicação ficará exposta na porta 3000.

# Como testar a funcionalidade de produtos

- Visualizar todos os produtos em ordem alfabetica: Acesse http://localhost:3000/products
- Visualizar todos os produtos que vencem hoje: Acesse http://localhost:3000/products?daysToExpire=0
- Visualizar todos os produtos que vencerão amanhã: Acesse http://localhost:3000/products?daysToExpire=1
- Visualizar todos os produtos que vencerão depois de amanhã: Acesse http://localhost:3000/products?daysToExpire=2

# Considerações

- Fiz apenas testes unitários.
- Não cobri todos os cenários com testes, apenas o suficiente para demonstrar os conhecimentos.

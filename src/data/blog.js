export const posts = [
  {
    slug: 'designing-with-restraint',
    title: 'Projetando com Contenção',
    date: 'Abr 21, 2026',
    category: 'Frontend',
    excerpt:
      'Como reduzir excessos visuais pode tornar interfaces web mais claras, consistentes e fáceis de manter.',
    readTime: '5 min read',
    content: `
Reparei uma coisa nos projetos que fui revisitando depois de meses: as interfaces que continuavam fáceis de mexer eram sempre as mais enxutas. Menos cor, menos ruído, menos decisão visual tomada só pra preencher espaço vazio. Nem é questão de gostar de minimalismo: uma interface mais contida acaba ficando mais fácil de entender e de evoluir depois.

## De onde vem o excesso

Isso costuma começar de um jeito bem inocente. Um botão não chama atenção o suficiente, então ganha uma cor nova. Uma seção parece "sem vida", então entra mais contraste. Cada uma dessas escolhas, isoladamente, parece pequena, mas na prática ela vira uma regra nova pro projeto, mesmo que ninguém tenha decidido isso de propósito. Com o tempo essas regras se empilham, a interface fica mais difícil de manter e começam a aparecer inconsistências entre componentes que deveriam se parecer.

## Trabalhando com menos

Quando eu me obrigo a usar uma paleta mais restrita, as decisões ficam mais conscientes por necessidade. A hierarquia passa a depender mais da tipografia e do espaçamento do que de cor, e isso acaba deixando os componentes mais consistentes entre si, o que ajuda bastante na hora de reaproveitar peça de um lugar no outro sem retrabalho.

Do lado do código, o reflexo é direto: menos variações de estilo significam menos exceções e menos remendo pra fazer um componente se encaixar num contexto que ele não foi pensado pra atender. No fim, contenção visual e organização de código andam mais juntas do que parece.

## O teste que uso

Antes de criar uma cor ou variação nova, costumo parar e pensar se aquilo resolve o problema de verdade ou só disfarça ele por um tempo. Na maioria das vezes, ajustar a estrutura, revisar o espaçamento ou refinar a hierarquia resolve melhor do que adicionar mais uma opção visual. Interface que envelhece bem é a que continua clara e fácil de usar depois de meses sem ninguém mexer nela, mesmo sem ser a mais chamativa.
`.trim(),
  },
  {
    slug: 'building-rest-api-spring-boot',
    title: 'Criando uma API REST com Spring Boot',
    date: 'Abr 21, 2026',
    category: 'Backend',
    excerpt:
      'Uma visão prática de como estruturar uma API REST com Java e Spring Boot, com foco em organização, clareza e evolução do projeto.',
    readTime: '6 min read',
    content: `
Quando a gente começa a estudar Spring Boot, é comum querer apenas **fazer a API funcionar**.

- Criar endpoints  
- Conectar com o banco  
- Testar o mais rápido possível  

Mas conforme a aplicação cresce, o desafio muda:  
não é mais só rodar, é **manter organizado**.

## Estrutura básica

Uma API bem organizada separa responsabilidades de forma clara:

- **Controller:** Lida com a requisição  
- **Service:** Contém a lógica de negócio  
- **Repository:** Comunicação com o banco  

Essa divisão:
- facilita manutenção  
- evita código confuso  
- ajuda na escalabilidade  

## Criando endpoints REST

Uma API REST segue padrões simples:

- \`GET /items\`
- \`GET /items/{id}\`
- \`POST /items\`
- \`PUT /items/{id}\`
- \`DELETE /items/{id}\`

Mais importante que decorar métodos é manter **consistência**.

Isso deixa a API:
- previsível para quem consome  
- fácil de manter  

## O papel do Service

Erro comum:

> colocar toda a lógica no controller

O \`service\` existe para:
- centralizar regras de negócio  
- validar dados  
- processar informações  

Resultado:
- código mais limpo  
- melhor organização  
- maior reaproveitamento  

## Integração com banco

Com **Spring Data JPA**, trabalhar com banco fica mais direto.

Exemplo:

\`\`\`java
repository.save(entity);
repository.findById(id);
repository.delete(entity);
\`\`\`

Isso reduz código boilerplate e permite focar no que importa:  
**a lógica da aplicação**.

## Pensando além do básico

Mesmo em projetos pequenos, vale investir em:

- tratamento de erros  
- padronização de respostas  
- separação de responsabilidades  

Esses pontos fazem diferença quando o sistema cresce.

## Conclusão

Aprender Spring Boot não é só criar endpoints.

É entender como estruturar uma aplicação backend que seja:

- clara  
- organizada  
- fácil de evoluir  

com o passar do tempo.
`.trim(),
  },
{
  slug: 'guia-estudos-mongodb',
  title: 'Guia de Estudos MongoDB',
  date: 'Jun 22, 2026',
  category: 'Banco de Dados',
  excerpt:
    'Aprenda os fundamentos do MongoDB, incluindo CRUD, operadores, índices e gerenciamento de coleções.',
  readTime: '15 min read',
  content: `

**Introdução**

MongoDB é um banco de dados NoSQL orientado a documentos que armazena informações em formato BSON, semelhante ao JSON.

**Acessando o MongoDB**

**Abrir terminal do host**

\`\`\`bash
flatpak-spawn --host bash
\`\`\`

Abre um terminal do sistema host.

**Verificar instalação do MongoDB Shell**

\`\`\`bash
which mongosh
\`\`\`

Verifica onde o MongoDB Shell está instalado.

**Iniciar MongoDB Shell**

\`\`\`bash
mongosh
\`\`\`

Inicia o shell do MongoDB.

**Limpar terminal**

\`\`\`bash
cls
\`\`\`

Limpa a tela.

**Bancos de Dados**

**Listar bancos existentes**

\`\`\`mongodb
show dbs
\`\`\`

Lista todos os bancos de dados disponíveis.

**Selecionar ou criar banco**

\`\`\`mongodb
use schol
\`\`\`

Seleciona ou cria o banco de dados chamado schol.

**Excluir banco atual**

\`\`\`mongodb
db.dropDatabase()
\`\`\`

Remove o banco de dados atualmente selecionado.

**Coleções**

**Criar coleção**

\`\`\`mongodb
db.createCollection("students")
\`\`\`

Cria a coleção students.

**Listar coleções**

\`\`\`mongodb
show collections
\`\`\`

Exibe todas as coleções do banco atual.

**Inserindo Dados**

**Inserir um documento**

\`\`\`mongodb
db.students.insertOne({
  name: "Spongebob",
  age: 30,
  gpa: 3.2
})
\`\`\`

Insere um único documento na coleção.

**Inserir vários documentos**

\`\`\`mongodb
db.students.insertMany([
  { name: "Patrick", age: 38, gpa: 1.5 },
  { name: "Sandy", age: 27, gpa: 4.0 },
  { name: "Gary", age: 18, gpa: 2.5 }
])
\`\`\`

Insere vários documentos de uma só vez.

**Visualizar documentos**

\`\`\`mongodb
db.students.find()
\`\`\`

Exibe todos os documentos da coleção.

**Tipos de Dados**

MongoDB suporta diversos tipos de dados:

- String
- Number
- Boolean
- Date
- Null
- Array
- Object

**Exemplo completo**

\`\`\`mongodb
db.students.insertOne({
  name: "Larry123",
  age: 32,
  gpa: 2.8,
  fullTime: false,
  registerDate: {
    "$date": "2023-01-02T03:00:00.000Z"
  },
  graduationDate: null,
  courses: [
    "Biology",
    "Chemistry",
    "Calculus"
  ],
  address: {
    street: "123 fake st.",
    city: "Bikini Bot",
    zip: 1234
  }
})
\`\`\`

**Ordenação e Limitação**

**Ordenar por nome**

\`\`\`mongodb
db.students.find().sort({name:-1})
\`\`\`

Ordena os resultados por nome em ordem decrescente.

**Ordenar GPA crescente**

\`\`\`mongodb
db.students.find().sort({gpa:1})
\`\`\`

Ordena os resultados por GPA crescente.

**Ordenar GPA decrescente**

\`\`\`mongodb
db.students.find().sort({gpa:-1})
\`\`\`

Ordena os resultados por GPA decrescente.

**Limitar resultados**

\`\`\`mongodb
db.students.find().limit(1)
\`\`\`

Retorna apenas um documento.

**Retornar maior GPA**

\`\`\`mongodb
db.students.find().sort({gpa:-1}).limit(1)
\`\`\`

Retorna o aluno com maior GPA.

**Consultas**

**Buscar por nome**

\`\`\`mongodb
db.students.find({name:"Patrick"})
\`\`\`

Busca documentos pelo nome.

**Buscar por período parcial**

\`\`\`mongodb
db.students.find({fullTime:false})
\`\`\`

Retorna alunos com fullTime igual a false.

**Buscar múltiplas condições**

\`\`\`mongodb
db.students.find({gpa:4.0, fullTime:true})
\`\`\`

Busca alunos com GPA 4.0 e fullTime true.

**Projeções**

**Exibir apenas nome**

\`\`\`mongodb
db.students.find({}, {name:true})
\`\`\`

Mostra apenas o campo name.

**Ocultar ID**

\`\`\`mongodb
db.students.find({}, {_id:false, name:true})
\`\`\`

Oculta o campo _id.

**Exibir nome e GPA**

\`\`\`mongodb
db.students.find({}, {_id:false, name:true, gpa:true})
\`\`\`

Mostra apenas os campos name e gpa.

**Atualização**

**Atualizar documento**

\`\`\`mongodb
db.students.updateOne(
  {name:"Sandy"},
  {$set:{fullTime:true}}
)
\`\`\`

Atualiza ou cria o campo fullTime.

**Atualizar vários documentos**

\`\`\`mongodb
db.students.updateMany(
  {},
  {$set:{fullTime:false}}
)
\`\`\`

Atualiza todos os documentos.

**Remover campo**

\`\`\`mongodb
db.students.updateOne(
  {name:"Gary"},
  {$unset:{fullTime:""}}
)
\`\`\`

Remove o campo fullTime.

**Exclusão**

**Excluir um documento**

\`\`\`mongodb
db.students.deleteOne({name:"Larry"})
\`\`\`

Remove um único documento.

**Excluir vários documentos**

\`\`\`mongodb
db.students.deleteMany({fullTime:false})
\`\`\`

Remove vários documentos.

**Operadores de Comparação**

| Operador | Função |
|-----------|---------|
| $ne | Diferente de |
| $lt | Menor que |
| $lte | Menor ou igual |
| $gt | Maior que |
| $gte | Maior ou igual |
| $in | Dentro de uma lista |
| $nin | Fora de uma lista |


**Operadores Lógicos**

| Operador | Função |
|-----------|---------|
| $and | Todas as condições devem ser verdadeiras |
| $or | Pelo menos uma condição deve ser verdadeira |
| $nor | Nenhuma condição pode ser verdadeira |
| $not | Inverte uma condição |

**Índices**

**Criar índice**

\`\`\`mongodb
db.students.createIndex({name:-1})
\`\`\`

Cria um índice para acelerar buscas.

**Listar índices**

\`\`\`mongodb
db.students.getIndexes()
\`\`\`

Mostra todos os índices da coleção.

**Remover índice**

\`\`\`mongodb
db.students.dropIndex("name_-1")
\`\`\`

Remove o índice especificado.

**Gerenciamento de Coleções**

**Criar coleção capped**

\`\`\`mongodb
db.createCollection("teacher",{
  capped:true,
  size:1000000,
  max:100
})
\`\`\`

Cria uma coleção limitada por tamanho.

**Criar coleção comum**

\`\`\`mongodb
db.createCollection("courses")
\`\`\`

Cria a coleção courses.

**Excluir coleção**

\`\`\`mongodb
db.courses.drop()
\`\`\`

Remove a coleção courses.

**Resumo**

MongoDB é um banco de dados NoSQL flexível e orientado a documentos. Com ele é possível realizar operações CRUD, utilizar operadores avançados, criar índices para melhorar desempenho e gerenciar coleções de forma simples e eficiente.

`.trim(),
  },
  {
    slug: 'guia-estudos-nodejs',
    title: 'Guia de Estudos Node.js',
    date: 'Jul 14, 2026',
    category: 'Backend',
    excerpt:
      'Minhas anotações de Node.js, do event loop até streams, passando por módulos, npm, servidor HTTP e testes.',
    readTime: '14 min read',
    content: `
Juntei aqui o que fui anotando enquanto estudava Node.js. Está na ordem em que as coisas fizeram sentido pra mim, que nem sempre é a ordem dos cursos.

![As cinco fases do event loop do Node.js, de timers até close callbacks](/diagramas/event-loop.svg)

## O que é o Node.js

Node.js é um ambiente que roda JavaScript fora do navegador. Ele usa o V8, o mesmo motor do Chrome, pra executar o código, e uma biblioteca chamada libuv pra cuidar de entrada e saída: arquivo, rede, temporizador.

O código JavaScript roda em uma única thread. O que demora, como ler um arquivo ou esperar uma resposta do banco, é entregue pro sistema operacional ou pra um conjunto de threads da libuv, e o Node segue atendendo outras coisas enquanto espera.

## Event loop

O event loop é o laço que decide qual callback roda agora. Ele passa por fases, sempre na mesma ordem:

- timers, onde rodam os callbacks de \`setTimeout\` e \`setInterval\`
- pending callbacks, com alguns callbacks de sistema que ficaram pra depois
- poll, onde o Node busca eventos novos de entrada e saída
- check, onde roda o \`setImmediate\`
- close callbacks, como o evento \`close\` de um socket

Entre uma fase e outra o Node esvazia duas filas menores: a do \`process.nextTick\` e a das promises. Por isso o exemplo abaixo imprime nessa ordem:

\`\`\`js
setTimeout(() => console.log('timeout'), 0)
setImmediate(() => console.log('immediate'))
Promise.resolve().then(() => console.log('promise'))
process.nextTick(() => console.log('nextTick'))
console.log('sync')

// sync, nextTick, promise, e depois timeout e immediate
\`\`\`

A consequência prática é simples. Se eu colocar um cálculo pesado no meio de uma rota, nenhuma outra requisição é atendida até ele terminar.

## Módulos

Existem dois sistemas de módulos. O CommonJS é o antigo, com \`require\` e \`module.exports\`. O ES Modules é o padrão da linguagem, com \`import\` e \`export\`.

\`\`\`js
// CommonJS
const fs = require('node:fs')
module.exports = { soma }

// ES Modules
import fs from 'node:fs'
export function soma(a, b) {
  return a + b
}
\`\`\`

Pra usar ES Modules em arquivos \`.js\`, coloco \`"type": "module"\` no \`package.json\`. O prefixo \`node:\` deixa claro que o módulo vem do próprio Node e não de um pacote instalado.

## npm e package.json

O \`package.json\` guarda o nome do projeto, os scripts e as dependências. O \`package-lock.json\` trava a versão exata de cada pacote, e é ele que garante que a instalação na minha máquina e no servidor seja igual.

\`\`\`bash
npm init -y
npm install express
npm install --save-dev typescript
npm ci
npm run dev
\`\`\`

O \`npm ci\` instala exatamente o que está no lock e apaga a \`node_modules\` antes. É o comando que uso em pipeline e em Dockerfile.

## Módulos nativos que mais uso

O \`fs\` lê e escreve arquivos. O \`path\` monta caminhos sem eu me preocupar com barra de Windows ou de Linux. O \`events\` tem o \`EventEmitter\`, que é a base de muita coisa dentro do Node.

\`\`\`js
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const arquivo = path.join(import.meta.dirname, 'dados.json')
const texto = await readFile(arquivo, 'utf8')
const dados = JSON.parse(texto)

dados.atualizadoEm = new Date().toISOString()
await writeFile(arquivo, JSON.stringify(dados, null, 2))
\`\`\`

\`\`\`js
import { EventEmitter } from 'node:events'

const pedidos = new EventEmitter()
pedidos.on('criado', (pedido) => console.log('novo pedido', pedido.id))
pedidos.emit('criado', { id: 1 })
\`\`\`

## Código assíncrono

O Node começou com callbacks, em que o primeiro argumento é sempre o erro. Depois vieram as promises, e hoje quase tudo que escrevo usa \`async\` e \`await\`.

\`\`\`js
async function buscarUsuario(id) {
  const resposta = await fetch('https://api.exemplo.com/usuarios/' + id)
  if (!resposta.ok) {
    throw new Error('Falha ao buscar usuário: ' + resposta.status)
  }
  return resposta.json()
}
\`\`\`

Quando as chamadas não dependem uma da outra, rodo todas juntas com \`Promise.all\`. Fazer um \`await\` atrás do outro nesse caso só soma o tempo de espera.

\`\`\`js
const [usuario, pedidos] = await Promise.all([
  buscarUsuario(id),
  buscarPedidos(id),
])
\`\`\`

## Servidor HTTP

Dá pra subir um servidor só com o módulo \`http\`, sem framework nenhum. Vale fazer pelo menos uma vez pra entender o que o Express e o NestJS escondem.

\`\`\`js
import { createServer } from 'node:http'

const servidor = createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ status: 'ok' }))
    return
  }
  res.writeHead(404)
  res.end()
})

servidor.listen(3000, () => console.log('ouvindo na porta 3000'))
\`\`\`

## Streams

Stream é um jeito de processar dados aos poucos em vez de carregar tudo na memória. Ler um arquivo de 2 GB com \`readFile\` derruba o processo. Com stream, ele passa em pedaços pequenos.

\`\`\`js
import { createReadStream, createWriteStream } from 'node:fs'
import { createGzip } from 'node:zlib'
import { pipeline } from 'node:stream/promises'

await pipeline(
  createReadStream('log.txt'),
  createGzip(),
  createWriteStream('log.txt.gz'),
)
\`\`\`

O \`pipeline\` liga as etapas e fecha tudo se alguma falhar. Requisição e resposta HTTP também são streams.

## Variáveis de ambiente

Senha e chave não vão no código. Ficam em variáveis de ambiente, lidas por \`process.env\`. Desde a versão 20.6 o Node lê um arquivo \`.env\` sem precisar de pacote:

\`\`\`bash
node --env-file=.env app.js
\`\`\`

O \`.env\` fica no \`.gitignore\`. No repositório vai só um \`.env.example\` com os nomes das variáveis e sem os valores.

## Erros

Em função assíncrona uso \`try\` e \`catch\`. Um erro que ninguém trata dentro de uma promise derruba o processo nas versões atuais do Node, então é melhor tratar perto de onde ele acontece e deixar um registro.

\`\`\`js
try {
  const usuario = await buscarUsuario(42)
  console.log(usuario.nome)
} catch (erro) {
  console.error('não consegui buscar o usuário', erro)
}
\`\`\`

## Trabalho pesado de CPU

Como o JavaScript roda em uma thread só, cálculo pesado trava o servidor. Pra isso existem as \`worker_threads\`, que rodam código em outra thread, e o módulo \`cluster\`, que sobe vários processos dividindo a mesma porta. Em produção é comum deixar essa parte com o orquestrador e subir várias cópias do contêiner.

## Testes e modo watch

O Node já vem com um executor de testes. Pra projeto pequeno ele resolve sem instalar nada.

\`\`\`js
import test from 'node:test'
import assert from 'node:assert/strict'
import { soma } from './soma.js'

test('soma dois números', () => {
  assert.equal(soma(2, 3), 5)
})
\`\`\`

\`\`\`bash
node --test
node --watch app.js
\`\`\`

O \`--watch\` reinicia a aplicação quando um arquivo muda, o que substitui o nodemon na maior parte dos casos.

## O que ainda quero estudar

Ainda preciso entender melhor como investigar vazamento de memória e como ler um perfil de CPU. Por enquanto só segui exemplos prontos nesses dois assuntos.
`.trim(),
  },
  {
    slug: 'anotacoes-docker',
    title: 'Docker na Prática',
    date: 'Ago 05, 2026',
    category: 'DevOps',
    excerpt:
      'Imagem, contêiner, Dockerfile em estágios, volumes e Compose, com os comandos que mais uso.',
    readTime: '8 min read',
    content: `
Com Docker eu rodo banco de dados e outros serviços sem instalar nada direto na máquina. Hoje é o jeito padrão de rodar e entregar os meus projetos.

![Etapas do Dockerfile até o contêiner em execução](/diagramas/docker.svg)

## Imagem e contêiner

A imagem é um pacote somente leitura com o sistema de arquivos, as dependências e o comando de início da aplicação. O contêiner é uma imagem em execução, isolado do resto da máquina, mas usando o mesmo kernel do host. Por isso ele sobe em segundos, bem mais rápido que uma máquina virtual.

\`\`\`bash
docker pull postgres:16
docker run -d --name banco -e POSTGRES_PASSWORD=senha -p 5432:5432 postgres:16
docker ps
docker logs -f banco
docker exec -it banco psql -U postgres
docker stop banco
docker rm banco
\`\`\`

## Dockerfile

O Dockerfile é a receita da imagem. Cada instrução vira uma camada, e o Docker guarda as camadas em cache. A ordem importa por causa disso: copio primeiro o \`package.json\` e instalo as dependências, e só depois copio o código. Assim, quando mudo uma linha de código, ele não reinstala tudo.

\`\`\`dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
USER node
CMD ["node", "dist/main.js"]
\`\`\`

Esse arquivo tem dois estágios. O primeiro tem compilador e dependências de desenvolvimento. O segundo recebe só o resultado do build e as dependências de produção, então a imagem final fica menor e leva menos coisa que possa ter falha de segurança.

A linha \`USER node\` faz a aplicação rodar sem ser root dentro do contêiner.

\`\`\`bash
docker build -t minha-api:1.0.0 .
docker run --rm -p 3000:3000 minha-api:1.0.0
\`\`\`

## .dockerignore

Funciona como o \`.gitignore\`, só que pro build. Sem ele, a \`node_modules\` e o \`.env\` da minha máquina iam parar dentro da imagem.

\`\`\`
node_modules
dist
.git
.env
\`\`\`

## Volumes

Tudo que o contêiner grava some quando ele é removido. Pra dado que precisa ficar, como o de um banco, uso volume.

\`\`\`bash
docker volume create dados-banco
docker run -d -v dados-banco:/var/lib/postgresql/data postgres:16
\`\`\`

## Redes

Contêineres na mesma rede se enxergam pelo nome. A API acessa o banco em \`banco:5432\`, sem IP fixo. Vale lembrar que \`localhost\` dentro do contêiner é o próprio contêiner, e não a minha máquina.

## Docker Compose

Com mais de um contêiner, os comandos ficam longos demais. O Compose descreve tudo em um arquivo.

\`\`\`yaml
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgres://postgres:senha@banco:5432/app
    depends_on:
      banco:
        condition: service_healthy

  banco:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: senha
      POSTGRES_DB: app
    volumes:
      - dados-banco:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      retries: 5

volumes:
  dados-banco:
\`\`\`

\`\`\`bash
docker compose up -d
docker compose logs -f api
docker compose down
\`\`\`

O \`healthcheck\` junto com o \`depends_on\` faz a API esperar o banco aceitar conexão antes de subir. Sem isso ela inicia antes da hora e cai com erro de conexão.

## Limpeza

Imagem antiga e contêiner parado ocupam disco rápido.

\`\`\`bash
docker system df
docker image prune
docker system prune
\`\`\`
`.trim(),
  },
  {
    slug: 'anotacoes-ci-cd',
    title: 'CI/CD com GitHub Actions',
    date: 'Ago 27, 2026',
    category: 'DevOps',
    excerpt:
      'Como montei um pipeline que testa, publica a imagem, faz o deploy e volta sozinho pra versão anterior quando a nova não responde.',
    readTime: '7 min read',
    content: `
CI é rodar verificação automática a cada mudança de código. CD é levar essa mudança até o servidor sem alguém copiar arquivo na mão. Estudei os dois montando o pipeline da minha API de marketplace.

![Etapas do pipeline, do push na main até o health check](/diagramas/ci-cd.svg)

## Integração contínua

Todo push e todo pull request disparam o mesmo conjunto de passos: instalar dependências, rodar o lint, rodar os testes e fazer o build. Se um passo falha, o commit fica marcado com erro e eu fico sabendo antes de mesclar.

\`\`\`yaml
name: ci

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
\`\`\`

O \`cache: npm\` guarda o download dos pacotes entre uma execução e outra, o que tira um bom tempo de cada rodada.

## Testes que precisam de banco

Teste de integração precisa de um PostgreSQL de verdade. O Actions sobe um contêiner de serviço ao lado do job:

\`\`\`yaml
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_PASSWORD: postgres
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 5s
          --health-retries 5
\`\`\`

## Segredos

Token e senha ficam em Settings, Secrets and variables, no próprio repositório. No arquivo do workflow aparece só a referência, como \`secrets.DEPLOY_TOKEN\`, e o Actions esconde o valor nos logs. Nenhuma chave vai pro Git.

## Entrega

Quando o CI passa na \`main\`, um segundo job constrói a imagem Docker e publica no registro com a tag do commit.

\`\`\`yaml
  publish:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}
      - uses: docker/build-push-action@v6
        with:
          push: true
          tags: ghcr.io/\${{ github.repository }}:\${{ github.sha }}
\`\`\`

Usar o hash do commit como tag me deixa saber exatamente qual código está em cada ambiente. A tag \`latest\` não diz isso.

## Deploy e rollback automático

O deploy troca a imagem em execução pela nova e depois consulta a rota de health check algumas vezes. Se ela não responder com sucesso dentro do tempo, o script sobe de novo a imagem anterior e o job termina com falha.

\`\`\`bash
for tentativa in 1 2 3 4 5 6; do
  if curl -fs http://localhost:3000/health > /dev/null; then
    echo "versão nova respondendo"
    exit 0
  fi
  sleep 5
done

echo "health check falhou, voltando pra versão anterior"
IMAGE_TAG="$TAG_ANTERIOR" docker compose up -d api
exit 1
\`\`\`

O health check só confirma que a aplicação subiu. Ele não pega uma rota que ficou lenta nem um erro que aparece só com tráfego real. Essa parte eu confiro no Grafana depois de cada deploy, e escrevi sobre isso em outra anotação.

## Tempo do pipeline

Pipeline lento acaba sendo ignorado, porque a tentação de mesclar sem esperar o resultado cresce a cada minuto. As duas mudanças que mais reduzem o tempo são ligar o cache de dependências e separar lint e teste em jobs paralelos.
`.trim(),
  },
  {
    slug: 'verificacao-no-grafana',
    title: 'Verificando um Deploy no Grafana',
    date: 'Set 16, 2026',
    category: 'Observabilidade',
    excerpt:
      'O que eu olho no Grafana depois de publicar uma versão nova, com as consultas de Prometheus que uso.',
    readTime: '6 min read',
    content: `
Pipeline verde diz que o código compilou e os testes passaram. Pra saber se a aplicação está bem em produção eu abro o Grafana.

![Caminho das métricas, da API até o alerta por email](/diagramas/grafana.svg)

## Como as peças se ligam

A aplicação expõe uma rota \`/metrics\` com contadores e histogramas em texto. O Prometheus visita essa rota de tempos em tempos e guarda os valores como séries temporais. O Grafana não guarda métrica nenhuma: ele consulta o Prometheus e desenha os gráficos.

\`\`\`yaml
scrape_configs:
  - job_name: api
    scrape_interval: 15s
    static_configs:
      - targets: ["api:3000"]
\`\`\`

## O que olho depois de um deploy

Olho três números, sempre comparando com os minutos antes do deploy.

O primeiro é a taxa de requisições. Se ela cai pra zero, o tráfego não está chegando na versão nova.

\`\`\`promql
sum(rate(http_requests_total[5m]))
\`\`\`

O segundo é a proporção de respostas com erro 5xx. É o número que mais me interessa nos primeiros minutos.

\`\`\`promql
sum(rate(http_requests_total{status=~"5.."}[5m]))
/
sum(rate(http_requests_total[5m]))
\`\`\`

O terceiro é a latência no percentil 95. A média esconde as requisições lentas, e o p95 mostra o tempo que os 5% mais lentos estão levando.

\`\`\`promql
histogram_quantile(
  0.95,
  sum(rate(http_request_duration_seconds_bucket[5m])) by (le)
)
\`\`\`

Os nomes das métricas dependem de como a aplicação exporta. Esses são os mais comuns em bibliotecas de Node.

![Painel de demonstração do Grafana com gráficos de requisições por servidor, memória e CPU, tempo de carregamento de página, logins e tráfego de rede](/imagens/grafana-painel.png)

*Imagem: [Joel Kennedy, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Grafana_screenshot_(2018).png), domínio público. É o painel de demonstração do Grafana, não o meu.*

## Marcar o deploy no gráfico

O Grafana tem anotações, que são linhas verticais no gráfico com um texto. Marco cada deploy com uma. Quando a latência sobe, dá pra ver na hora se foi logo depois de uma versão nova ou se não tem relação.

## Recursos do processo

Além das três métricas de tráfego, deixo no painel o uso de memória e o atraso do event loop do Node. Memória que só sobe a cada hora costuma ser vazamento. Atraso alto no event loop quer dizer que algum código está segurando a thread principal.

\`\`\`promql
process_resident_memory_bytes
nodejs_eventloop_lag_seconds
\`\`\`

## Alertas

Ninguém fica olhando painel o dia inteiro, então as mesmas consultas viram regra de alerta. A regra abaixo dispara quando a taxa de erro passa de 5% por cinco minutos seguidos, e o aviso chega por email.

\`\`\`yaml
groups:
  - name: api
    rules:
      - alert: TaxaDeErroAlta
        expr: |
          sum(rate(http_requests_total{status=~"5.."}[5m]))
          / sum(rate(http_requests_total[5m])) > 0.05
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: Mais de 5% das requisições retornando erro
\`\`\`

O \`for: 5m\` evita alerta por um pico de poucos segundos. Sem essa linha, qualquer oscilação vira email.

## Um limite que encontrei

Métrica mostra que algo está errado, mas raramente mostra o motivo. Pra chegar na causa ainda preciso dos logs da aplicação, e ligar um gráfico ao log daquele mesmo minuto ainda dá trabalho.
`.trim(),
  },
  {
    slug: 'anotacoes-kubernetes',
    title: 'Primeiros Passos com Kubernetes',
    date: 'Out 09, 2026',
    category: 'DevOps',
    excerpt:
      'Pod, Deployment, Service, ConfigMap, Secret e probes, com os manifests e os comandos de kubectl que anotei.',
    readTime: '8 min read',
    content: `
Docker roda um contêiner. Kubernetes cuida de muitos: decide em qual máquina cada um roda, reinicia o que cai e troca a versão sem derrubar o serviço. Dá pra estudar tudo em um cluster local, com minikube ou kind.

![Caminho de uma requisição pelo Ingress, pelo Service e pelos Pods](/diagramas/kubernetes.svg)

## As peças

O cluster é o conjunto de máquinas. Cada máquina é um node. O control plane é a parte que recebe os pedidos e decide o que roda onde.

O Pod é a menor unidade. Ele tem um ou mais contêineres que dividem rede e disco. Na prática eu quase nunca crio um Pod direto, porque um Pod sozinho não volta se a máquina dele cair.

O Deployment resolve isso. Eu declaro quantas cópias quero e qual imagem usar, e ele mantém esse número de Pods rodando.

O Service dá um endereço estável pra um grupo de Pods. Os Pods mudam de IP toda vez que são recriados, e o Service fica na frente deles distribuindo as requisições.

## Deployment

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
        - name: api
          image: ghcr.io/usuario/api:1.0.0
          ports:
            - containerPort: 3000
          envFrom:
            - configMapRef:
                name: api-config
            - secretRef:
                name: api-secret
          readinessProbe:
            httpGet:
              path: /health
              port: 3000
            periodSeconds: 5
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 10
          resources:
            requests:
              cpu: 100m
              memory: 128Mi
            limits:
              memory: 256Mi
\`\`\`

O \`selector\` precisa bater com os \`labels\` do template. Se não bater, o Kubernetes recusa o arquivo.

## Probes

A \`readinessProbe\` diz se o Pod pode receber tráfego. Enquanto ela falha, o Service não manda requisição pra ele. A \`livenessProbe\` diz se o contêiner travou. Quando ela falha várias vezes seguidas, o Kubernetes reinicia o contêiner.

## Service

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: api
spec:
  selector:
    app: api
  ports:
    - port: 80
      targetPort: 3000
\`\`\`

Sem o campo \`type\`, o Service é do tipo ClusterIP e só pode ser acessado de dentro do cluster. Pra receber tráfego de fora por HTTP, com domínio e caminho, entra o Ingress.

![Arquitetura do Kubernetes: o master com API Server, Scheduler, Controller Manager e etcd, e dois nodes com Kubelet, Kube Proxy e Pods](/imagens/kubernetes-arquitetura.png)

*Imagem: [Khtan66, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kubernetes.png), licença CC BY-SA 4.0. O diagrama chama de master o que hoje a documentação chama de control plane.*

## ConfigMap e Secret

Configuração fica fora da imagem. O ConfigMap guarda valores comuns e o Secret guarda os sensíveis.

\`\`\`bash
kubectl create configmap api-config --from-literal=NODE_ENV=production
kubectl create secret generic api-secret --from-literal=DATABASE_URL='postgres://usuario:senha@banco:5432/app'
\`\`\`

Um detalhe que me surpreendeu: o Secret vem só codificado em base64. Qualquer pessoa com acesso de leitura ao namespace consegue ver o valor. Por isso o arquivo de Secret não vai pro Git, e o acesso ao namespace precisa ser restrito.

## Comandos que mais uso

\`\`\`bash
kubectl apply -f deployment.yaml
kubectl get pods
kubectl describe pod NOME
kubectl logs -f deployment/api
kubectl exec -it NOME -- sh
kubectl port-forward service/api 8080:80
\`\`\`

O \`describe\` é o primeiro que rodo quando um Pod não sobe. A seção de eventos no final quase sempre traz o motivo, como imagem não encontrada ou falta de memória.

## Atualização e rollback

Quando mudo a imagem do Deployment, o Kubernetes faz uma atualização gradual. Ele cria Pods novos, espera a \`readinessProbe\` passar e só depois remove os antigos.

\`\`\`bash
kubectl set image deployment/api api=ghcr.io/usuario/api:1.1.0
kubectl rollout status deployment/api
kubectl rollout history deployment/api
kubectl rollout undo deployment/api
\`\`\`

O \`rollout undo\` volta pra versão anterior. Se a versão nova nunca fica pronta, os Pods antigos continuam atendendo, e é pra isso que a probe precisa estar bem configurada.

## Escala

\`\`\`bash
kubectl scale deployment/api --replicas=5
kubectl autoscale deployment/api --min=2 --max=6 --cpu-percent=70
\`\`\`

O segundo comando cria um HorizontalPodAutoscaler, que aumenta ou diminui o número de Pods conforme o uso de CPU. Ele depende do \`requests\` de CPU estar declarado no Deployment.

## O que ficou pra depois

Ainda não estudei Helm nem StatefulSet a fundo. Por enquanto deixo banco de dados fora do cluster.
`.trim(),
  },
  {
    slug: 'anotacoes-aws-s3-guardduty',
    title: 'AWS: IAM, S3, EC2, Load Balancer e GuardDuty',
    date: 'Nov 03, 2026',
    category: 'Cloud',
    excerpt:
      'Anotações dos meus estudos de AWS: permissões, buckets S3 seguros, instâncias EC2, load balancer, caminho do tráfego e detecção de ameaças com o GuardDuty.',
    readTime: '14 min read',
    content: `
Estas são as anotações dos meus estudos de AWS pra certificação. Foquei nos assuntos mais ligados a segurança, que é a área que mais me interessa.

![Fontes de log analisadas pelo GuardDuty e o caminho de um finding até o aviso](/diagramas/guardduty.svg)

## Responsabilidade compartilhada

A AWS cuida da segurança da nuvem: datacenter, hardware, rede física e a camada de virtualização. O cliente cuida da segurança do que coloca na nuvem, como permissões, configuração dos serviços, criptografia e os próprios dados.

Um bucket aberto pra internet é responsabilidade de quem configurou. Configuração errada é a origem mais comum de vazamento de dados no S3.

## IAM

O IAM controla quem pode fazer o quê. As regras que anotei:

- a conta root fica com MFA ligado e não é usada no dia a dia
- cada permissão começa negada, e eu libero só o que a tarefa precisa
- aplicação recebe uma role com credencial temporária em vez de chave fixa
- chave de acesso nunca vai pra repositório

Uma policy é um documento JSON. Esta permite só leitura em um bucket específico:

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:ListBucket"],
      "Resource": [
        "arn:aws:s3:::meu-bucket-de-estudo",
        "arn:aws:s3:::meu-bucket-de-estudo/*"
      ]
    }
  ]
}
\`\`\`

O \`ListBucket\` vale pro bucket e o \`GetObject\` vale pros objetos, por isso os dois ARNs. Com só um deles a policy falha de um jeito difícil de perceber.

## S3

O S3 guarda objetos dentro de buckets. Cada objeto tem uma chave, que parece um caminho de arquivo, mas não existe pasta de verdade. O nome do bucket é único no mundo inteiro.

\`\`\`bash
aws s3api create-bucket \\
  --bucket meu-bucket-de-estudo \\
  --region sa-east-1 \\
  --create-bucket-configuration LocationConstraint=sa-east-1

aws s3 cp relatorio.pdf s3://meu-bucket-de-estudo/relatorios/relatorio.pdf
aws s3 ls s3://meu-bucket-de-estudo/relatorios/
\`\`\`

## Deixando o bucket seguro

O Block Public Access impede que uma policy ou ACL torne o bucket público por engano. Bucket novo já vem com ele ligado, e eu confirmo mesmo assim.

\`\`\`bash
aws s3api put-public-access-block \\
  --bucket meu-bucket-de-estudo \\
  --public-access-block-configuration \\
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
\`\`\`

O versionamento guarda as versões antigas de cada objeto. Se alguém apaga ou sobrescreve um arquivo, dá pra recuperar.

\`\`\`bash
aws s3api put-bucket-versioning \\
  --bucket meu-bucket-de-estudo \\
  --versioning-configuration Status=Enabled
\`\`\`

Todo objeto novo já é criptografado em repouso com chaves gerenciadas pelo S3. Quando preciso controlar quem pode usar a chave, troco pra uma chave do KMS.

Pra compartilhar um arquivo privado por pouco tempo, uso uma URL assinada, que expira sozinha:

\`\`\`bash
aws s3 presign s3://meu-bucket-de-estudo/relatorios/relatorio.pdf --expires-in 900
\`\`\`

## Ciclo de vida e custo

Regra de ciclo de vida move objeto antigo pra uma classe de armazenamento mais barata ou apaga depois de um prazo. Com versionamento ligado isso é obrigatório na prática, porque as versões antigas continuam sendo cobradas.

## EC2

Uma instância EC2 é uma máquina virtual. Pra criar uma eu escolho a AMI, que é a imagem do sistema operacional, o tipo, que define CPU e memória, a subnet onde ela fica e o security group que controla o tráfego.

O nome do tipo segue um padrão. Em \`t3.micro\`, a letra é a família, o número é a geração e a palavra é o tamanho.

\`\`\`bash
aws ec2 run-instances \\
  --image-id ami-0123456789abcdef0 \\
  --instance-type t3.micro \\
  --subnet-id subnet-0123456789abcdef0 \\
  --security-group-ids sg-0123456789abcdef0 \\
  --iam-instance-profile Name=api-role \\
  --user-data file://setup.sh \\
  --metadata-options HttpTokens=required \\
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=api-1}]'
\`\`\`

## Configuração da instância

O user data é um script que roda como root na primeira vez que a instância liga. É nele que a máquina se configura sozinha, sem eu entrar por SSH.

\`\`\`bash
#!/bin/bash
dnf update -y
dnf install -y docker
systemctl enable --now docker
docker run -d --restart unless-stopped -p 80:3000 ghcr.io/usuario/api:1.0.0
\`\`\`

Três configurações que anotei como padrão:

- a instância recebe uma role pelo instance profile, e a aplicação usa credencial temporária em vez de chave gravada no disco
- \`HttpTokens=required\` obriga o uso do IMDSv2, que protege o serviço de metadados contra requisição forjada
- o acesso administrativo é pelo Session Manager, então a porta 22 fica fechada

Quando a configuração está certa, ela vira um launch template. O template guarda AMI, tipo, security group e user data, e toda instância nova nasce igual.

## Security group

O security group é um firewall com estado ligado à instância. Tudo que entra é bloqueado até eu liberar, e a resposta de uma conexão liberada volta sem regra extra.

A regra que mais importa: a instância só aceita tráfego vindo do security group do load balancer, e não da internet inteira.

\`\`\`bash
aws ec2 authorize-security-group-ingress \\
  --group-id sg-INSTANCIA \\
  --protocol tcp \\
  --port 80 \\
  --source-group sg-LOADBALANCER
\`\`\`

## Load balancer

O load balancer recebe as requisições e distribui entre várias instâncias. Se uma cai, ele para de mandar tráfego pra ela.

![Diagrama de balanceamento de carga: terminais ligados a um comutador, um balanceador entre a rede pública e a rede privada e dois servidores atrás dele](/imagens/balanceador-de-carga.png)

*Imagem: [HFWMan, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Load_Balancing_Cluster_(NAT)_pt.svg), licença CC BY-SA 4.0.*

Na AWS existem dois tipos principais. O Application Load Balancer trabalha na camada 7, entende HTTP e roteia por domínio ou por caminho da URL. O Network Load Balancer trabalha na camada 4, com TCP e UDP, tem IP fixo e aguenta volume muito alto com latência baixa.

As peças do ALB são três. O listener escuta uma porta, como a 443. O target group é o conjunto de instâncias que recebe o tráfego. O health check consulta uma rota de cada instância e tira do grupo a que não responde.

\`\`\`bash
aws elbv2 create-target-group \\
  --name api-tg \\
  --protocol HTTP \\
  --port 80 \\
  --vpc-id vpc-0123456789abcdef0 \\
  --health-check-path /health

aws elbv2 register-targets \\
  --target-group-arn ARN_DO_TARGET_GROUP \\
  --targets Id=i-0123456789abcdef0
\`\`\`

## Caminho do tráfego

Anotei o caminho de uma requisição do navegador até a aplicação:

- o Route 53 resolve o domínio pro endereço do load balancer
- o ALB fica em subnets públicas, em pelo menos duas zonas de disponibilidade, e recebe o HTTPS com um certificado do ACM
- o ALB escolhe uma instância saudável do target group
- as instâncias ficam em subnets privadas, sem IP público
- quando a instância precisa sair pra internet, pra baixar um pacote por exemplo, o tráfego passa por um NAT gateway

O internet gateway é a porta da VPC pra internet, e só as subnets públicas têm rota pra ele. Deixar a aplicação em subnet privada significa que ninguém de fora chega nela sem passar pelo load balancer.

## Auto Scaling

O Auto Scaling group mantém um número de instâncias rodando a partir do launch template. Ele substitui a instância que falha no health check e cria ou remove instâncias conforme a carga.

\`\`\`bash
aws autoscaling create-auto-scaling-group \\
  --auto-scaling-group-name api-asg \\
  --launch-template LaunchTemplateName=api-lt \\
  --min-size 2 \\
  --max-size 6 \\
  --vpc-zone-identifier "subnet-a,subnet-b" \\
  --target-group-arns ARN_DO_TARGET_GROUP \\
  --health-check-type ELB
\`\`\`

Com \`--health-check-type ELB\`, o grupo usa o health check do load balancer. Sem isso ele só olha se a máquina está ligada, e uma instância com a aplicação travada continua contando como saudável.

## GuardDuty

O GuardDuty é o serviço de detecção de ameaças da AWS. Ele analisa os eventos do CloudTrail, os VPC Flow Logs e os logs de DNS sem eu precisar instalar agente. Com essas fontes ele procura comportamento suspeito e gera um achado, que a AWS chama de finding.

\`\`\`bash
aws guardduty create-detector --enable
aws guardduty list-detectors
aws guardduty list-findings --detector-id ID_DO_DETECTOR
\`\`\`

Cada finding tem um tipo e uma severidade. Alguns exemplos do que ele detecta:

- credencial de uma instância EC2 sendo usada de fora da AWS
- instância conversando com endereço conhecido de mineração de criptomoeda
- chamada de API vinda de um país onde a conta nunca operou
- alguém desligando o Block Public Access de um bucket

A proteção de S3 do GuardDuty olha os eventos de dados dos buckets, como leitura em massa de objetos por uma credencial que nunca fez isso antes.

O GuardDuty só detecta. Ele não bloqueia nada sozinho. Pra reagir, o caminho é uma regra no EventBridge que recebe o finding e avisa por SNS ou dispara uma função Lambda.

## O que mais cai nos simulados

Nos simulados, os assuntos que mais se repetem são o modelo de responsabilidade compartilhada, a diferença entre os serviços de segurança e as classes de armazenamento do S3. É fácil confundir GuardDuty com Inspector e Macie, então anotei assim: o GuardDuty detecta ameaça em andamento, o Inspector procura vulnerabilidade em instância e imagem, e o Macie encontra dado sensível dentro do S3.
`.trim(),
  },
  {
    slug: 'agentes-de-ia-no-desenvolvimento',
    title: 'Como Uso Agentes de IA no Desenvolvimento',
    date: 'Nov 10, 2026',
    category: 'IA',
    excerpt:
      'O que são tokens, o que é o harness e onde fica a inteligência, como os agentes melhoram com o tempo, como gastar menos e o que papers de 2026 da ETH Zurich e da Carnegie Mellon dizem sobre isso.',
    readTime: '14 min read',
    content: `
Uso o Claude Code e o Codex no desenvolvimento dos meus projetos. Antes de contar como, anotei o que aprendi sobre o funcionamento deles, porque só passei a usar bem depois de entender onde os tokens vão parar. Os exemplos são do Claude Code, mas a lógica de tokens, contexto e harness vale pros dois.

## O que é um token

O modelo não lê letras nem palavras. O texto é quebrado em pedaços chamados tokens, e cada token vira um número. Uma palavra curta e comum costuma ser um token só. Uma palavra longa ou rara vira vários. Em inglês, um token dá em média três quartos de uma palavra, e em português a conta costuma sair um pouco pior.

Tudo é medido em tokens: o tamanho do que o modelo consegue ler, o limite do plano e o preço. Existem dois tipos. Os tokens de entrada são tudo que o modelo recebe, e os de saída são o que ele escreve. Os de saída custam mais caro.

## Janela de contexto

A janela de contexto é o total de tokens que o modelo enxerga de uma vez. O modelo não guarda memória de uma chamada pra outra. A cada resposta, ele recebe de novo a conversa inteira: as instruções do sistema, a descrição das ferramentas, todas as mensagens e o resultado de cada comando que rodou.

Isso explica por que uma sessão longa fica cara e pior. Um arquivo de 2 mil linhas lido no começo continua sendo enviado em todas as chamadas seguintes, até a conversa ser limpa ou resumida.

## Onde fica a inteligência

A inteligência está no modelo. Ele é uma rede neural treinada pra prever o próximo token, e é dessa previsão que saem o raciocínio, o plano e o código. Todo o resto do que eu vejo um agente fazer vem de outro lugar.

O modelo sozinho só produz texto. Ele não abre arquivo, não roda teste e não lembra do que fez ontem. Durante uma sessão os pesos dele não mudam, então ele também não aprende com a minha conversa. O que parece aprendizado dentro de uma sessão é só o contexto crescendo.

## O que é o harness

Harness é o programa em volta do modelo. O Claude Code é um harness, e o Codex é outro. Ele transforma um modelo que escreve texto em um agente que trabalha no meu repositório.

![Ciclo do agente: o pedido vai pro modelo, o modelo chama uma ferramenta, o harness executa e o resultado volta pro contexto](/diagramas/ciclo-agente.svg)

O funcionamento é um ciclo. O harness monta o contexto e manda pro modelo. O modelo responde com texto ou com um pedido de ferramenta, como ler um arquivo ou rodar um comando. O harness executa esse pedido na minha máquina e devolve o resultado como mais uma mensagem. O modelo lê, decide o próximo passo, e o ciclo se repete até a tarefa acabar.

O harness é responsável por tudo que fica fora da previsão de tokens:

- as ferramentas, que são a lista do que o modelo pode pedir: ler, buscar, editar, rodar comando, abrir navegador
- as permissões, que definem o que roda sem me perguntar e o que precisa da minha aprovação
- o contexto, que ele monta a cada chamada e compacta quando chega perto do limite
- a memória, que são anotações gravadas em arquivo e carregadas de novo na sessão seguinte
- os subagentes, que fazem uma parte do trabalho em um contexto separado e devolvem só o resumo
- os hooks, que são comandos meus disparados antes ou depois de uma ferramenta

O mesmo modelo rende resultados bem diferentes dependendo do harness. Ferramenta de busca ruim faz o modelo ler arquivo demais. Compactação ruim faz ele esquecer o que já decidiu.

## Como os agentes melhoram com o tempo

A melhora vem de três lugares diferentes, e demorei pra separar um do outro.

O primeiro é o modelo. Cada versão nova é treinada de novo e chega raciocinando melhor, errando menos chamada de ferramenta e aguentando tarefas mais longas. Essa melhora chega pra mim sem eu fazer nada.

O segundo é o harness. As ferramentas ficam mais precisas, a compactação perde menos informação e o cache fica mais eficiente. O benchmark mais usado da área, o SWE-bench, mostra o tamanho disso: no fim de 2023 o melhor modelo resolvia menos de 2% das issues, e em 2024 um harness desenhado pro agente levou esse número a cerca de 12% sem trocar a geração do modelo.

O terceiro é o que eu acumulo. O modelo não aprende comigo, mas o harness guarda o que eu ensino. Cada erro que se repete vira uma regra em uma skill ou uma anotação na memória, e na sessão seguinte o agente já começa sabendo. É a parte que depende de mim, e é a que mais muda o resultado no meu projeto.

## Skills

Uma skill é um pacote de instruções que ensina o agente a fazer um tipo de tarefa, como planejar, depurar ou revisar. No começo da sessão só o nome e a descrição de cada skill entram no contexto. O corpo é carregado quando a tarefa combina com a descrição, e é isso que deixa ter dezenas de skills instaladas sem pagar por todas a cada mensagem.

Eu não escrevo esse tipo de coisa do zero. Já existem conjuntos prontos e bem testados, mantidos por gente que usa isso todo dia.

## Superpowers e Spec Kit

O Superpowers é um plugin com skills que cobrem o ciclo inteiro de uma tarefa. Ele conversa comigo pra fechar o que eu quero antes de construir, escreve o plano, executa com testes primeiro, depura com método e pede revisão antes de mesclar. Em vez de eu lembrar o agente de cada etapa, a skill certa entra na hora certa.

O Spec Kit é o kit do GitHub pra desenvolvimento guiado por especificação. Ele organiza o trabalho em etapas, com uma skill pra cada uma:

\`\`\`
constitution   princípios do projeto, uma vez só
specify        o que vai ser construído e por quê
plan           como, com a stack e a arquitetura
tasks          a lista de tarefas
implement      a execução
converge       repete com implement até fechar com a especificação
\`\`\`

A ideia dos dois é a mesma: a especificação vem antes do código e fica registrada. Uso o Superpowers no dia a dia e deixo o Spec Kit pra quando o projeto é maior e precisa de um documento que outras pessoas vão ler.

## Plugins

Um plugin é um pacote que junta skills, comandos, subagentes, hooks e servidores MCP, que são as conexões com ferramentas externas. Ele é instalado de um marketplace, que na prática é um repositório Git com a lista dos plugins. O Superpowers chega assim, e os dois plugins de economia que explico abaixo também.

## Gastando menos tokens

O que mais reduziu o meu consumo:

- começar uma conversa nova a cada tarefa com \`/clear\`, em vez de carregar o histórico da anterior
- usar \`/compact\` quando a conversa precisa continuar, mas já está longa
- olhar \`/context\` pra ver o que está ocupando a janela
- trocar pra um modelo menor com \`/model\` em tarefa simples
- baixar o nível de esforço de raciocínio quando a tarefa é mecânica
- mandar buscas grandes pra um subagente, que devolve só a conclusão
- pedir um trecho do arquivo ou do log, em vez do arquivo inteiro
- deixar regra específica em skill, que só carrega quando precisa

O harness também usa cache de prompt. O começo da conversa, que se repete igual a cada chamada, é cobrado mais barato nas chamadas seguintes. Mudar as instruções ou trocar de modelo no meio da sessão invalida esse cache.

## Skills e plugins que economizam

Dois plugins que deixo ligados em todas as sessões atacam direto o gasto de tokens.

O ponytail faz o agente agir como um dev sênior preguiçoso: a menor mudança que resolve a tarefa, sem abstração nem opção que ninguém pediu. Menos código gerado significa menos tokens de saída e menos diff pra eu revisar.

O caveman encurta a resposta em texto. Ele corta saudação, repetição do que eu pedi e resumo no final, e mantém os termos técnicos e o código intactos.

Os dois funcionam com regras curtas carregadas no começo da sessão. Essas regras também ocupam contexto em toda chamada, então só compensam porque são poucas linhas e o que elas cortam é muito maior.

## O que os papers dizem

Fui atrás de estudos deste ano sobre as peças que uso todo dia: arquivo de contexto, skills, compactação e cache. Estes quatro batem com o jeito que trabalho.

[Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?](https://arxiv.org/abs/2602.11988), da ETH Zurich, de fevereiro de 2026. É o estudo mais citado sobre os arquivos de contexto que o agente lê no começo de cada sessão. Os autores mediram que esses arquivos, em geral, não aumentam a taxa de tarefas resolvidas e elevam o custo de inferência em mais de 20% na média. As instruções são seguidas pelo agente, mas o resumo do repositório, que quase todo mundo coloca, não ajuda. A conclusão deles é que o arquivo serve pra registrar práticas fora do padrão. Por isso prefiro regra em skill, que só entra quando a tarefa pede.

[What Keeps Agent Skills from Being Reusable? Evidence from 138K SKILL.md Files](https://arxiv.org/abs/2608.08453), de pesquisadores da City University of New York e da Ohio State, de agosto de 2026. Analisa 138.133 arquivos \`SKILL.md\` públicos e encontra pelo menos um defeito em 91,8% deles. Os problemas mais comuns são descrição fraca, corpo inchado e recursos mal organizados. Skills com nome e descrição bem escritos são encontradas pelo agente com mais confiabilidade. É mais um motivo pra usar conjuntos prontos e bem mantidos em vez de escrever os meus.

[CliffCompaction: Cost-Efficient Compaction for Long-Horizon Coding Agents](https://arxiv.org/abs/2609.26779), da Carnegie Mellon, de setembro de 2026. Propõe uma compactação que reduz o custo em até 50% mantendo o desempenho no Terminal-Bench. O ponto central é que ela só corta ou descarta conteúdo e nunca reescreve, e também nunca compacta um resumo que já foi compactado. Por isso prefiro começar conversa nova a empilhar resumo em cima de resumo.

[The Physical Cost of Context: Quality-Constrained Resource Accounting for Coding Agents](https://arxiv.org/abs/2610.34763), da Universidade da Califórnia e da UMass Amherst, de outubro de 2026. Mostra que contar tokens de prompt engana. Um prompt mais curto pode custar mais se ele reescreve o histórico que estava em cache, e apagar histórico pode transformar economia de tokens em trabalho extra. É o motivo de eu não mexer nas instruções no meio da sessão.

## Como eu uso pra desenvolver

Começo pela especificação. A skill de brainstorming do Superpowers me faz perguntas até o objetivo, o que fica de fora e o critério de pronto estarem claros, e depois escreve o plano. Sem essa etapa o agente preenche as lacunas com suposições, e eu só descubro quais foram na revisão.

Depois abro um worktree pra tarefa. O \`git worktree\` cria outra pasta de trabalho ligada ao mesmo repositório, cada uma na sua branch. Dois agentes editando a mesma pasta atropelam o trabalho um do outro, e com worktree cada um fica isolado.

\`\`\`bash
git worktree add ../projeto-fix-login -b fix/login
cd ../projeto-fix-login
claude
\`\`\`

![Fluxo da spec até o merge, passando pelo agente no worktree, pelos testes, pelo PR e pela minha revisão](/diagramas/agentes.svg)

Quando o agente termina, o trabalho sobe como um PR normal.

\`\`\`bash
git push -u origin fix/login
gh pr create --fill
git worktree remove ../projeto-fix-login
\`\`\`

O PR passa pelo mesmo pipeline de qualquer outro: lint, testes e build. Eu leio o diff inteiro antes de mesclar. Os erros mais comuns que encontro são código a mais do que foi pedido e teste que passa sem testar o que importa.

## Segurança

O agente roda comandos na minha máquina. O \`.env\` fica fora do repositório, as permissões de comando ficam restritas ao que a tarefa precisa, e nenhuma chave entra em prompt ou em arquivo de instrução.
`.trim(),
  },
];

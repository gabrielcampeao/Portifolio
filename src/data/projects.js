import helpdesk from '../assets/HelpDeskPrint1.png'
import stoneGym from '../assets/stonegym.png'

export const projects = [
  {
    slug: 'helpdesk-system',
    title: 'ST Suporte Técnico',
    role: 'Fullstack',
    year: '2026',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    preview: helpdesk,
    previewPosition: 'object-top',
    liveURL: 'https://help-sepia-ten.vercel.app/tickets',
    summary:
      'Sistema de help desk pra gerenciar chamados internos, usuários e fluxo de atendimento, com autenticação de verdade, controle de acesso por perfil e no ar em produção.',
    description:
      'Reescrevi de uma versão antiga que eu tinha feito em PHP + MySQL, migrando tudo pra Next.js 15 com App Router, Prisma e PostgreSQL (Neon). No caminho, entrou autenticação por sessão com cookie HttpOnly e JWT, permissões por papel (admin, técnico, comum), histórico de alterações nos chamados, um dashboard com Recharts e upload de avatar via Supabase Storage. Deploy contínuo na Vercel.',
    details: [
      { label: 'Tipo', value: 'Sistema Web' },
      { label: 'Stack', value: 'Next.js 15 + React 19 + TypeScript + Prisma/PostgreSQL' },
      { label: 'Escopo', value: 'CRUD completo, autenticação e controle de acesso' },
      { label: 'Ano', value: '2026' },
    ],
    highlights: [
      'Autenticação com JWT em cookie HttpOnly e controle de acesso baseado em perfis de usuário',
      'Quer testar a aplicação online? Use uma das contas de demonstração abaixo:',
    ],
  },
  {
    slug: 'stone-gym',
    title: 'Stone Gym',
    role: 'Fullstack',
    year: '2026',
    tags: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS'],
    preview: stoneGym,
    previewPosition: 'object-top',
    githubURL: 'https://github.com/gabrielcampeao/site-gym',
    liveURL: 'https://site-gym-lilac.vercel.app/',
    summary:
      'Site de uma academia fictícia, feito pra testar algumas ideias: busca de unidades por geolocalização, catálogo de equipamentos com vídeos e um checkout com cupons.',
    description:
      'Construído em Next.js 14 (App Router) com React 18 e TypeScript, com Tailwind CSS v3 numa paleta escura com detalhes roxos. Tem busca de unidades por geolocalização (distância calculada via fórmula de Haversine), catálogo de equipamentos com vídeos do YouTube incorporados, checkout em duas etapas com cupons de desconto e order bump, formulário de contato que manda email de verdade via Nodemailer/Gmail SMTP, e um chat de suporte flutuante com respostas automáticas.',
    details: [
      { label: 'Tipo', value: 'Site Institucional' },
      { label: 'Stack', value: 'Next.js 14 + React 18 + TypeScript + Tailwind CSS' },
      { label: 'Escopo', value: 'Catálogo, checkout, geolocalização e envio de email' },
      { label: 'Ano', value: '2026' },
    ],
    highlights: [
      'Busca de unidades por geolocalização com cálculo de distância em tempo real (Haversine)',
      'Checkout em 2 etapas com cupons de desconto, order bump e pagamento por cartão ou Pix',
    ],
  },
  {
    slug: 'marketplace-api',
    title: 'Marketplace API',
    role: 'Backend',
    year: '2026',
    tags: ['NestJS', 'PostgreSQL', 'Prisma', 'Redis'],
    githubURL: 'https://github.com/gabrielcampeao/api-market',
    summary:
      'Backend de um marketplace com usuários, produtos, carrinho, checkout, pedidos e pagamentos, exposto em REST e GraphQL.',
    description:
      'Feito em NestJS 11 com PostgreSQL, Prisma e Redis. Gastei a maior parte do tempo nas partes fáceis de errar: duas requisições de pagamento chegando juntas, disputa de estoque no checkout, webhook da Stripe entregue em dobro e pagamento que fica preso em processamento quando a Stripe e o banco local discordam. Os pagamentos passam pela Stripe quando ela está configurada e por um provedor falso no ambiente local. O repositório também tem métricas no Prometheus, painéis no Grafana, CI/CD com rollback automático e as decisões de arquitetura documentadas.',
    details: [
      { label: 'Tipo', value: 'API' },
      { label: 'Stack', value: 'NestJS 11 + PostgreSQL 16 + Prisma + Redis' },
      { label: 'Escopo', value: 'Checkout, pagamentos, concorrência e observabilidade' },
      { label: 'Ano', value: '2026' },
    ],
    highlights: [
      'Testes de concorrência com várias instâncias rodando contra o mesmo banco',
      'Testes de carga e ensaios de backup e restauração',
    ],
  },
  {
    slug: 'conversor-online',
    title: 'Conversor Online',
    role: 'Fullstack',
    year: '2026',
    tags: ['Next.js 16', 'React 19', 'Tailwind 4', 'ffmpeg'],
    githubURL: 'https://github.com/gabrielcampeao/conversor',
    summary:
      'Baixador de vídeos do YouTube em MP4 ou MP3 direto pelo navegador. Cola o link, escolhe formato e qualidade, baixa.',
    description:
      'A interface manda a URL para uma rota que chama o yt-dlp e devolve título, thumbnail e as resoluções disponíveis. No MP3, o áudio passa do yt-dlp para o ffmpeg por pipe e sai sem gravar nada em disco. Até 720p o vídeo já vem com áudio junto e é só repassar. Acima disso o YouTube entrega vídeo e áudio separados, então baixo os dois, junto com ffmpeg num arquivo temporário e apago assim que o download termina. Não tem banco de dados.',
    details: [
      { label: 'Tipo', value: 'Aplicação Web' },
      { label: 'Stack', value: 'Next.js 16 + React 19 + Tailwind 4 + yt-dlp + ffmpeg' },
      { label: 'Escopo', value: 'Download e conversão de vídeo e áudio' },
      { label: 'Ano', value: '2026' },
    ],
    highlights: [
      'Só aceita domínios do YouTube e confere o ID do vídeo antes de qualquer chamada externa, pra evitar injeção de argumentos no yt-dlp',
      'Dockerfile que já instala ffmpeg, python3 e o yt-dlp mais recente',
    ],
  },
  {
    slug: 'objetivos-do-ano',
    title: 'Meus Objetivos do Ano',
    role: 'Frontend',
    year: '2024',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubURL: 'https://github.com/gabrielcampeao/SITE-ALURA-PROJECT',
    summary:
      'Página feita durante o curso de HTML da Alura: um painel com abas para quatro metas pessoais, cada uma com contador regressivo até a data limite.',
    description:
      'Fiz pra treinar HTML, CSS e JavaScript puro. As abas trocam de objetivo no clique e a contagem mostra dias, horas, minutos e segundos, atualizando a cada segundo. Não tem build nem dependência, é só abrir o index.html no navegador.',
    details: [
      { label: 'Tipo', value: 'Página Estática' },
      { label: 'Stack', value: 'HTML + CSS + JavaScript' },
      { label: 'Escopo', value: 'Abas e contagem regressiva' },
      { label: 'Ano', value: '2024' },
    ],
    highlights: [
      'Sem frameworks, com todo o estilo em um único style.css',
      'As datas ficam em constantes no main.js, fáceis de trocar por metas próprias',
    ],
  },
]

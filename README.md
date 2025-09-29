# Time Machine - Aplicação Desktop com Electron e React

Uma aplicação desktop moderna construída com Electron, React e TypeScript para gerenciamento de tempo e projetos.

## 🚀 Tecnologias Utilizadas

- **Electron** - Framework para aplicações desktop multiplataforma
- **React** - Biblioteca para construção de interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Ferramenta de build rápida e moderna
- **CSS3** - Estilização com gradientes e animações modernas

## 📋 Funcionalidades Implementadas

### ✅ Tela de Login
- Interface moderna e responsiva
- Validação de formulário
- Animações suaves
- Feedback visual para o usuário
- Tratamento de erros

### ✅ Sistema de Autenticação
- Context API para gerenciamento de estado
- Autenticação mock/placeholder
- Persistência de sessão
- Logout funcional

### ✅ Dashboard
- Interface pós-login
- Cards informativos
- Header com informações do usuário
- Design responsivo

## 🛠️ Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/arthur-uds/timemachine.git

# Entre no diretório
cd timemachine

# Instale as dependências
npm install
```

### Desenvolvimento
```bash
# Executar em modo de desenvolvimento
npm run dev

# Executar apenas o React (para desenvolvimento web)
npm run dev:vite

# Executar apenas o Electron
npm run dev:electron
```

### Build
```bash
# Build completo
npm run build

# Build apenas do React
npm run build:vite

# Build apenas do Electron
npm run build:electron

# Gerar executável
npm run dist
```

## 📁 Estrutura do Projeto

```
time-machine-react/
├── electron/           # Código do processo principal do Electron
│   ├── main.ts         # Arquivo principal do Electron
│   └── preload.ts      # Script de preload
├── src/                # Código fonte do React
│   ├── components/     # Componentes React
│   │   ├── Login.tsx   # Componente de login
│   │   ├── Login.css   # Estilos do login
│   │   ├── Dashboard.tsx # Componente do dashboard
│   │   └── Dashboard.css # Estilos do dashboard
│   ├── contexts/       # Contextos React
│   │   └── AuthContext.tsx # Contexto de autenticação
│   ├── App.tsx         # Componente principal
│   ├── App.css         # Estilos globais do App
│   ├── main.tsx        # Ponto de entrada do React
│   └── index.css       # Estilos globais
├── dist-renderer/      # Build do React (gerado)
├── dist-electron/      # Build do Electron (gerado)
├── index.html          # Template HTML
├── package.json        # Dependências e scripts
├── tsconfig.json       # Configuração do TypeScript
├── vite.config.ts      # Configuração do Vite
└── README.md           # Este arquivo
```

## 🎯 Próximos Passos

- [ ] Implementar autenticação real com API
- [ ] Adicionar gerenciamento de projetos
- [ ] Implementar sistema de tarefas
- [ ] Adicionar controle de ponto
- [ ] Criar relatórios de tempo
- [ ] Implementar notificações
- [ ] Adicionar temas (claro/escuro)

## 🤝 Contribuição

Este projeto está em desenvolvimento ativo. Contribuições são bem-vindas!

## 📄 Licença

Este projeto está sob a licença ISC.

# TheGlobal - Corporate Landing Page (B2B/Comex)

Status: Produção & Performance Otimizada 

Este projeto é uma Landing Page Full-Scroll de alta performance, desenvolvida para o setor de Comércio Exterior (Comex). O foco central foi criar uma vitrine digital que transmita autoridade global, suporte multilinguagem nativo e uma experiência de usuário (UX) fluida, sem o inchaço de bibliotecas externas pesadas.

🎯 Diferenciais de Negócio
Comunicação Global: Suporte nativo a 4 idiomas (Português, Inglês, Espanhol e Chinês), permitindo expansão imediata para mercados internacionais.

Performance "Lightweight": Carregamento instantâneo. A aplicação foi construída para renderizar o conteúdo crítico em milissegundos, essencial para retenção de leads B2B.

Design Responsivo & Fluido: Experiência consistente desde desktops UltraWide até dispositivos móveis de entrada.

Privacidade por Design: Ausência de rastreamento invasivo e conformidade técnica com diretrizes de performance modernas (Core Web Vitals).

🛠️ Decisões de Engenharia (Tech Stack)
A escolha das ferramentas foi guiada pelo princípio de Máxima Eficiência com Mínima Dependência.

React + TypeScript: Garantia de código tipado, reduzindo bugs em produção e facilitando a manutenção a longo prazo.

Context API para i18n (Custom): Implementação de um sistema de tradução próprio.

Por que não usei bibliotecas externas? Para manter o bundle size reduzido e evitar complexidade desnecessária em uma aplicação de página única.

Clean Code: Uso da função universal t() para manter o JSX limpo e legível.

Arquitetura de Dados (JSON): Separação total entre a lógica de apresentação e o conteúdo textual.

CSS Avançado (Geometria Customizada): Carrossel de serviços desenvolvido do zero, utilizando cálculos matemáticos para distribuição de ícones em formato circular responsivo.

💡 Filosofia de Desenvolvimento
Princípio YAGNI (You Aren't Gonna Need It): Diferente de sistemas complexos, optamos por não persistir o idioma em localStorage. Isso mantém a aplicação leve e evita a necessidade de políticas de cookies complexas para uma página meramente institucional.

Responsabilidade Única (SRP): Componentes pequenos, reutilizáveis e fáceis de testar.

Performance de Borda: Deploy otimizado via Vercel Edge Network.

🚀 Demonstração
O projeto está disponível para visualização online:

🔗 [[LINK DA SUA VERCEL AQUI](https://theglobal.vercel.app/)]

(Nota: Este é um projeto de demonstração com dados anonimizados para proteção de propriedade intelectual).

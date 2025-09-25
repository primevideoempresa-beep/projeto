
import type { SiteData } from './types';

export const siteData: SiteData = {
  "site_name": "Studio IA Video",
  "description": "Crie vídeos e imagens personalizados com a ajuda de Inteligência Artificial. Escolha o tipo de mídia e geramos automaticamente a sua criação.",
  "contact_email": "contato@studioiavideo.com",
  "features": [
    "Criação de vídeos em 3D",
    "Geração de imagens realistas",
    "Personalização de conteúdo com prompts de IA",
    "Exportação de arquivos em diferentes formatos"
  ],
  "plans": [
    {
      "name": "Plano Básico",
      "price": 29.99,
      "features": [
        "Geração de até 10 imagens por mês",
        "Acesso a templates básicos",
        "Exportação em resolução padrão"
      ]
    },
    {
      "name": "Plano Profissional",
      "price": 99.99,
      "features": [
        "Geração ilimitada de imagens e vídeos",
        "Templates premium",
        "Exportação em alta resolução (4K)",
        "Suporte prioritário"
      ]
    }
  ],
  "services": [
    {
      "name": "Criação de Vídeos",
      "description": "Gere vídeos em 3D com base em descrições ou ideias fornecidas. Perfeito para marketing e conteúdos visuais.",
      "url": "/video-creation"
    },
    {
      "name": "Geração de Imagens",
      "description": "Crie imagens incríveis em alta resolução com IA. Ideal para campanhas publicitárias, redes sociais e design gráfico.",
      "url": "/image-generation"
    }
  ],
  "about_us": {
    "title": "Sobre o Studio IA Video",
    "content": "No Studio IA Video, utilizamos as mais avançadas tecnologias de Inteligência Artificial para criar vídeos e imagens personalizadas, atendendo às necessidades de empresas e criadores de conteúdo."
  }
};

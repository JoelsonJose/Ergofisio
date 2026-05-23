/**
 * ==========================================================
 * ERGOFISIO - SAÚDE E ERGONOMIA NO TRABALHO
 * JavaScript Interativo & Funcionalidades Premium
 * Sourced strictly from UNIFG Ergofisio Brochure
 * ==========================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de Ícones Lucide
  lucide.createIcons();

  // ==========================================
  // 1. BANCO DE DADOS DE DICAS DIÁRIAS (31 Dicas)
  // Baseado estritamente e somente no conteúdo do panfleto
  // ==========================================
  const DICAS_ERGONOMIA = [
    {
      titulo: "Objetivo da Ergonomia",
      desc: "A ergonomia tem como objetivo principal modificar as ferramentas, os móveis e o ambiente para que você trabalhe com conforto, segurança e eficiência, evitando dores e lesões.",
      icon: "shield"
    },
    {
      titulo: "O que é o Ergofisio?",
      desc: "É um projeto desenvolvido pelo curso de fisioterapia com o foco principal de preservar a integridade física e mental dos colaboradores da UNIFG.",
      icon: "activity"
    },
    {
      titulo: "Cadeira Ergonômica",
      desc: "O uso da cadeira ergonômica ajuda a reduzir a sobrecarga lombar durante a jornada laboral.",
      icon: "armchair"
    },
    {
      titulo: "Suporte para Notebook",
      desc: "Ajustar a altura do monitor para ficar na linha dos olhos, e assim evitar a flexão da cervical e sobrecarga lombar.",
      icon: "laptop"
    },
    {
      titulo: "Suporte para os Pés",
      desc: "Adicionar o apoio aos pés para garantir o retorno venoso, alinhamento adequado da coluna e quadril e evitar a compressão vascular.",
      icon: "footprints"
    },
    {
      titulo: "Mouse Pad e Teclado Pad",
      desc: "Usar esses equipamentos evita a fadiga muscular e aumenta a estabilidade do punho.",
      icon: "keyboard"
    },
    {
      titulo: "Alívio de Dores e Lesões",
      desc: "Um dos grandes benefícios do alongamento é que ele alivia dores e previne lesões no seu dia a dia.",
      icon: "heart"
    },
    {
      titulo: "Alívio do Estresse",
      desc: "Realizar alongamentos periodicamente alivia o estresse gerado pela rotina de trabalho.",
      icon: "smile"
    },
    {
      titulo: "Correção de Postura",
      desc: "Fazer pausas ativas para se alongar corrige a postura e evita vícios posturais nocivos.",
      icon: "accessibility"
    },
    {
      titulo: "Redução da Rigidez",
      desc: "O alongamento sistemático reduz a rigidez muscular, devolvendo a flexibilidade ao corpo.",
      icon: "activity"
    },
    {
      titulo: "Circulação Sanguínea",
      desc: "Os exercícios fisioterapêuticos do Ergofisio melhoram a circulação sanguínea, oxigenando os músculos.",
      icon: "refresh-cw"
    },
    {
      titulo: "Redução do Cansaço",
      desc: "Alongar-se ao longo da jornada laboral reduz significativamente o cansaço físico geral.",
      icon: "zap"
    },
    {
      titulo: "Mais Disposição",
      desc: "A prática diária dos alongamentos do panfleto traz mais disposição para as suas atividades.",
      icon: "sparkles"
    },
    {
      titulo: "Prevenção de Tendinites",
      desc: "A falta de ergonomia no trabalho pode levar a Lesões por Esforço Repetitivo (LER), como as dolorosas tendinites.",
      icon: "alert-triangle"
    },
    {
      titulo: "Prevenção de Bursites",
      desc: "Trabalhar sem as adaptações adequadas no posto de trabalho pode causar bursites (LER).",
      icon: "alert-triangle"
    },
    {
      titulo: "Síndrome do Túnel do Carpo",
      desc: "O esforço repetitivo sem o uso de mouse pad e teclado pad pode ocasionar a Síndrome do Túnel do Carpo.",
      icon: "alert-circle"
    },
    {
      titulo: "Lombalgia e Cervicalgia",
      desc: "Sentar-se de forma incorreta ou sem suporte cervical sobrecarrega a coluna, gerando lombalgia e cervicalgia.",
      icon: "shield-alert"
    },
    {
      titulo: "Prevenção de Varizes",
      desc: "Ficar longos períodos sem movimentar as pernas ou sem apoio para os pés pode gerar problemas circulatórios, como varizes.",
      icon: "heart"
    },
    {
      titulo: "Prevenção de Fadiga Visual",
      desc: "Ajustar a altura da tela na linha dos olhos evita a fadiga visual e a flexão constante do pescoço.",
      icon: "eye"
    },
    {
      titulo: "Ansiedade e Depressão",
      desc: "A falta de ergonomia e pausas saudáveis pode colaborar para transtornos psicológicos ocupacionais, como ansiedade e depressão.",
      icon: "brain"
    },
    {
      titulo: "Síndrome de Burnout",
      desc: "Preservar a integridade física e mental é vital para evitar o esgotamento extremo ou Síndrome de Burnout.",
      icon: "flame"
    },
    {
      titulo: "Postura para Levantar Peso",
      desc: "Ao levantar peso, dobre os joelhos e use a força das pernas mantendo a coluna totalmente ereta e a carga próxima ao corpo.",
      icon: "arrow-up"
    },
    {
      titulo: "Alinhamento Corporal de Pé",
      desc: "Mantenha o alinhamento adequado dos ombros, pescoço e coluna durante a realização de atividades em pé.",
      icon: "accessibility"
    },
    {
      titulo: "Ajustes do Computador",
      desc: "Ajuste seus móveis e ferramentas ergonômicas (como cadeira, monitor e suportes) de acordo com seu biotipo.",
      icon: "monitor"
    },
    {
      titulo: "Postura na Direção",
      desc: "Ao dirigir, mantenha braços e pernas levemente flexionados, quadris apoiados e o encosto firme na coluna.",
      icon: "car"
    },
    {
      titulo: "Alongamento Vertical (#1)",
      desc: "Alongamento 1: Entrelace os dedos e estenda os braços verticalmente acima da cabeça para alongar braços e ombros.",
      icon: "arrow-up"
    },
    {
      titulo: "Alongamento de Ombros (#2)",
      desc: "Alongamento 2: Estenda um braço horizontalmente à frente do peito e puxe-o com a outra mão para alongar o ombro.",
      icon: "activity"
    },
    {
      titulo: "Alongamento de Peitoral (#3)",
      desc: "Alongamento 3: Em pé ou sentado, entrelace as mãos atrás das costas e estique os braços, abrindo bem o peito.",
      icon: "heart"
    },
    {
      titulo: "Alongamento de Tríceps (#4)",
      desc: "Alongamento 4: Dobre o cotovelo atrás da cabeça e use a outra mão para puxar suavemente o cotovelo para baixo.",
      icon: "heart"
    },
    {
      titulo: "Alongamento Cervical (#5)",
      desc: "Alongamento 5: Puxe suavemente a cabeça com a mão em direção ao ombro lateral para aliviar a tensão cervical.",
      icon: "smile"
    },
    {
      titulo: "Alongamento cruzado (#6)",
      desc: "Alongamento 6: Estenda um braço horizontalmente à frente do peito e puxe o cotovelo para evitar fadiga e dores.",
      icon: "user"
    },
    {
      titulo: "Alongamento de Panturrilha (#10)",
      desc: "Alongamento 10: Dê um passo largo à frente, mantendo o calcanhar traseiro firme no chão para alongar a panturrilha.",
      icon: "activity"
    },
    {
      titulo: "Técnica de Relaxamento: Biquinho",
      desc: "Sente-se ereto. Puxe o ar de forma lenta pelo nariz. Na hora de soltar, faça um biquinho com a boca para soltar o ar devagar. Repita 10 vezes.",
      icon: "wind"
    },
    {
      titulo: "Técnica de Relaxamento: Respiração Diafragmática",
      desc: "Coloque as mãos sobre a barriga. Respire devagar, inflando a barriga, contando até 5. Pause por 2 segundos e solte lentamente contando até 6.",
      icon: "activity"
    },
    {
      titulo: "Técnica de Relaxamento: Respiração Alternada",
      desc: "Tampe a narina esquerda com o dedo e inspire pela direita contando até 5. Em seguida, solte o ar pela narina esquerda. Repita esse ciclo 5 vezes.",
      icon: "waves"
    }
  ];

  // ==========================================
  // 2. CONTROLE DO LOGOUT / DRAWER MÓVEL
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('active');
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
  }

  mobileMenuBtn.addEventListener('click', openDrawer);
  closeDrawerBtn.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });



  // ==========================================
  // 3. SEÇÃO DICA DO DIA - FLIP, OUTRA DICA & CONTROLES
  // ==========================================
  const dailyTipCard = document.getElementById('daily-tip-card');
  const tipDateBadge = document.getElementById('tip-date-badge');
  const tipNumber = document.getElementById('tip-number');
  const tipTitleText = document.getElementById('tip-title-text');
  const tipDescriptionText = document.getElementById('tip-description-text');
  const tipIcon = document.getElementById('tip-icon');
  const copyTipBtn = document.getElementById('copy-tip-btn');
  const shareTipBtn = document.getElementById('share-tip-btn');
  const drawTipBtn = document.getElementById('draw-tip-btn');

  // Determinar dica do dia com base nos dias absolutos para não quebrar em meses curtos ou com o limite de 31 dias
  const hoje = new Date();
  const diaDoMes = hoje.getDate(); 
  const mesesText = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const dataFormatada = `${diaDoMes} de ${mesesText[hoje.getMonth()]} de ${hoje.getFullYear()}`;
  
  // Calcular dias totais corridos (Epoch) garante rotação contínua perfeita por todo o array de 34 dicas
  const diasCorridos = Math.floor(hoje.getTime() / (1000 * 60 * 60 * 24));
  const tipIndex = diasCorridos % DICAS_ERGONOMIA.length;
  const dicaDeHoje = DICAS_ERGONOMIA[tipIndex];
  
  // Rastrear a dica exibida no momento para copiar/compartilhar
  let dicaExibida = dicaDeHoje;

  // Injetar dados na carta se os elementos existirem
  if (tipDateBadge && tipNumber && tipTitleText && tipDescriptionText && tipIcon) {
    tipDateBadge.textContent = dataFormatada;
    tipNumber.textContent = `Dica #${tipIndex + 1}`;
    tipTitleText.textContent = dicaDeHoje.titulo;
    tipDescriptionText.textContent = dicaDeHoje.desc;
    tipIcon.setAttribute('data-lucide', dicaDeHoje.icon);
  }
  
  // Flip Card Action
  if (dailyTipCard) {
    dailyTipCard.addEventListener('click', function(e) {
      // Evitar que cliques nos botões internos virem o card novamente
      if (e.target.closest('#copy-tip-btn') || e.target.closest('#share-tip-btn') || e.target.closest('#draw-tip-btn')) {
        return;
      }
      this.classList.toggle('flipped');
    });
  }

  // Interatividade: Sorteador de outra dica com micro-animação
  if (drawTipBtn) {
    drawTipBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita virar a carta ao clicar no botão
      
      const drawRandomTip = () => {
        const idxRandom = Math.floor(Math.random() * DICAS_ERGONOMIA.length);
        const randomTip = DICAS_ERGONOMIA[idxRandom];
        dicaExibida = randomTip;
        
        if (tipNumber && tipTitleText && tipDescriptionText && tipIcon) {
          tipNumber.textContent = `Dica Sorteada`;
          tipTitleText.textContent = randomTip.titulo;
          tipDescriptionText.textContent = randomTip.desc;
          tipIcon.setAttribute('data-lucide', randomTip.icon);
          lucide.createIcons();
        }
      };

      if (dailyTipCard && dailyTipCard.classList.contains('flipped')) {
        // Se a carta já estiver virada (verso visível), desvira suavemente,
        // troca o conteúdo no meio do caminho, e vira de novo para revelar!
        dailyTipCard.classList.remove('flipped');
        setTimeout(() => {
          drawRandomTip();
          setTimeout(() => {
            dailyTipCard.classList.add('flipped');
          }, 100);
        }, 400);
      } else {
        // Se a carta estiver de frente, apenas carrega a dica sorteada e vira para revelar
        drawRandomTip();
        dailyTipCard.classList.add('flipped');
      }
    });
  }

  // Copiar Dica Exibida
  if (copyTipBtn) {
    copyTipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textoParaCopiar = `Ergofisio - Dica de Fisioterapia: ${dicaExibida.titulo} - ${dicaExibida.desc}`;
      navigator.clipboard.writeText(textoParaCopiar).then(() => {
        // Feedback Visual Temporário
        const originalText = copyTipBtn.innerHTML;
        copyTipBtn.innerHTML = `<i data-lucide="check" class="text-success"></i> Copiado!`;
        lucide.createIcons();
        setTimeout(() => {
          copyTipBtn.innerHTML = originalText;
          lucide.createIcons();
        }, 2000);
      });
    });
  }

  // Compartilhar Dica Exibida
  if (shareTipBtn) {
    shareTipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const shareData = {
        title: 'Ergofisio | Dica de Ergonomia',
        text: `Dica de Fisioterapia: ${dicaExibida.titulo} - ${dicaExibida.desc}`,
        url: window.location.href
      };
      
      if (navigator.share) {
        navigator.share(shareData).catch(err => console.log(err));
      } else {
        // Fallback WhatsApp
        const textToShare = encodeURIComponent(`*Ergofisio - Dica de Fisioterapia*\n\n*${dicaExibida.titulo}*\n${dicaExibida.desc}`);
        window.open(`https://api.whatsapp.com/send?text=${textToShare}`, '_blank');
      }
    });
  }

  // ==========================================
  // 4. BANCO DE DADOS DE EXERCÍCIOS PREVENTIVOS (12 Alongamentos Oficiais)
  // ==========================================
  const EXERCICIOS = [
    {
      id: "ex-1",
      titulo: "1. Alongamento Vertical de Braços",
      categoria: "membros-sup",
      categoriaLbl: "Membros Superiores",
      foco: "Braços e Ombros",
      duracao: "10 segundos",
      desc: "Estende toda a cadeia muscular superior e laterais do tronco, ajudando a realinhar a coluna após horas de postura sentada.",
      instrucao: "Levante os braços verticalmente para cima, acima da cabeça,  entrelace os dedos das mãos mantendo os cotovelos esticados e a coluna bem alinhada. Pode ser feito em pé ou sentado",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-2",
      titulo: "2. Alongamento de Punhos",
      categoria: "membros-sup",
      categoriaLbl: "Membros Superiores",
      foco: "Punhos e Dedos",
      duracao: "10s cada lado",
      desc: "Alonga os músculos flexores dos punhos e dedos, prevenindo lesões por esforço repetitivo (LER/DORT).",
      instrucao: "Alongamento de Punhos - Estenda um dos braços à frente com a palma da mão voltada para fora., com a outra mão puxe os dedos suavemente para trás (incluindo o dedão). Depois repita no outro lado. Pode ser feito em pé ou sentado",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-3",
      titulo: "3. Alongamento de Peitoral e Ombros",
      categoria: "membros-sup",
      categoriaLbl: "Membros Superiores",
      foco: "Peitoral e Ombros",
      duracao: "10 segundos",
      desc: "Melhora a mobilidade dos braços, alivia tensões e melhora a postura",
      instrucao: "Entrelace as mãos atrás das costas e estique os braços, abrindo bem o peito e elevando suavemente as mãos. Pode ser feito em pé ou sentado.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-4",
      titulo: "4. Alongamento de Tríceps atrás da Nuca",
      categoria: "membros-sup",
      categoriaLbl: "Membros Superiores",
      foco: "Região Superior",
      duracao: "10s cada lado",
      desc: "Melhorar a mobilidade dos ombros e aliviar tensões musculares da região superior",
      instrucao: "Leve um dos braços atrás da cabeça e use a outra mão para empurrar suavemente o cotovelo para baixo. Mantenha o tronco reto e respire fundo. Depois repita no outro lado. Pode ser feito em pé ou sentado.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-5",
      titulo: "5. Alongamento Cervical Lateral",
      categoria: "membros-sup",
      categoriaLbl: "Membros Superiores",
      foco: "Pescoço e Cervical",
      duracao: "10s cada lado",
      desc: "Diminui as tensões cervicais provocada pela inclinação constante da cabeça",
      instrucao: "Puxe suavemente a cabeça com a mão em direção ao ombro correspondente até sentir alongar a lateral oposta do pescoço. Repita do outro lado. Pode ser feito em pé ou sentado.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-6",
      titulo: "6. Alongamento cruzado de Ombro",
      categoria: "membros-sup",
      categoriaLbl: "Membros Superiores",
      foco: "Ombros e Articulações",
      duracao: "10s cada lado",
      desc: "Evita a fadiga e desconfortos musculares na região, previne dores e lesões causadas por movimento repetitivo",
      instrucao: "Estenda um braço horizontalmente à frente do peito e, com a outra mão, puxe suavemente o cotovelo em direção ao corpo, mantendo o ombro relaxado. Pode ser feito em pé ou sentado.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-7",
      titulo: "7. Alongamento de Cadeia Posterior",
      categoria: "coluna-tronco",
      categoriaLbl: "Coluna e Tronco",
      foco: "Coluna e Posterior",
      duracao: "10 segundos",
      desc: "Alongamento global que relaxa a lombar, glúteos e a parte de trás das pernas de uma só vez.",
      instrucao: "Em pé, mantenha as pernas levemente afastadas e incline o tronco para frente tentando alcançar os pés.",
      tempoSegundos: 10,
      dificuldade: "Médio"
    },
    {
      id: "ex-8",
      titulo: "8. Alongamento Lateral do Tronco",
      categoria: "coluna-tronco",
      categoriaLbl: "Coluna e Tronco",
      foco: "Oblíquos e Lombar",
      duracao: "10s cada lado",
      desc: "Promove o aumento do espaço intercostal e melhora a mobilidade lateral da lombar e cintura",
      instrucao: "Em pé, eleve um braço acima da cabeça e incline o tronco para o lado oposto, apoiando a outra mão no quadril para estabilização.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-9",
      titulo: "9. Alongamento de Quadríceps de Pé",
      categoria: "membros-inf",
      categoriaLbl: "Membros Inferiores",
      foco: "Coxas e Quadril",
      duracao: "10s cada perna",
      desc: "Alonga a parte anterior da coxa e melhorar a flexibilidade das pernas e postura enquanto ajuda a combater o encurtamento causado por passar muito tempo sentado",
      instrucao: "Em pé, segure o pé atrás do corpo em direção ao glúteo, mantendo os joelhos alinhados. Apoie uma das mãos na parede ou cadeira se necessitar de apoio.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-10",
      titulo: "10. Alongamento de Panturrilha",
      categoria: "membros-inf",
      categoriaLbl: "Membros Inferiores",
      foco: "Panturrilhas e Pés",
      duracao: "10s cada perna",
      desc: "elimina a assimetria do corpo e alongar os músculos da panturrilha e pés",
      instrucao: "Em pé, fique de frente para uma parede e apoie as mãos nela. Coloque uma perna à frente flexionada e a outra atrás estendida, mantendo o calcanhar da perna de trás apoiado no chão. Incline o corpo levemente para frente até sentir o alongamento na parte posterior da perna.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-11",
      titulo: "11. Alongamento de Isquiotibiais Com Apoio",
      categoria: "membros-inf",
      categoriaLbl: "Membros Inferiores",
      foco: "Posterior de Coxa",
      duracao: "10s cada perna",
      desc: "Ajuda a liberar a tensão ciática e lombar ao alongar os isquiotibiais e aumenta a flexibilidade e mobilidade da articulação do quadril",
      instrucao: "Estenda uma perna à frente apoiando o calcanhar em uma superfície. Incline levemente o tronco para frente mantendo as costas retas.",
      tempoSegundos: 10,
      dificuldade: "Médio"
    },
    {
      id: "ex-12",
      titulo: "12. Alongamento de Joelho ao Peito",
      categoria: "membros-inf",
      categoriaLbl: "Membros Inferiores",
      foco: "Glúteos e Lombar",
      duracao: "10s cada perna",
      desc: "Melhora equilíbrio e estabilidade, alivia a tensão e melhora a postura",
      instrucao: "Puxe um joelho em direção ao peito com as duas mãos, mantendo a outra perna estendida e a coluna alinhada. Pode ser feito de pé ou deitado.",
      tempoSegundos: 10,
      dificuldade: "Médio"
    }
  ];

  // ==========================================
  // 4.5. GERADOR DE ANIMAÇÕES VETORIAIS (SVG + CSS ANIMADOS)
  // Código nativo de alta performance para os bonecos de alongamento
  // ==========================================
  function generateExerciseSVG(id) {
    let animStyles = '';
    let svgContent = '';
    
    // Coordenadas base
    const headX = 50, headY = 30, headR = 6;
    const spineStartX = 50, spineStartY = 36;
    const spineEndX = 50, spineEndY = 60;
    
    switch(id) {
      case "ex-1": // Alongamento Vertical de Braços
        animStyles = `
          @keyframes ex1-deep-stretch-3d {
            0%, 100% { transform: translateY(0) scaleY(1); }
            50% { transform: translateY(-5px) scaleY(1.05); }
          }
          @keyframes ex1-shadow-pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.15); opacity: 0.65; }
          }
          .ex1-upper-body-3d {
            transform-origin: 50px 66px;
            animation: ex1-deep-stretch-3d 3s ease-in-out infinite;
          }
          .ex1-shadow-3d {
            transform-origin: 50px 85px;
            animation: ex1-shadow-pulse 3s ease-in-out infinite;
          }
        `;
        svgContent = `
          <defs>
            <radialGradient id="ex1-head-grad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#a3d9b8" />
              <stop offset="60%" stop-color="var(--primary)" />
              <stop offset="100%" stop-color="#143020" />
            </radialGradient>
            <radialGradient id="ex1-shadow-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="rgba(46, 107, 74, 0.25)" />
              <stop offset="100%" stop-color="rgba(0, 0, 0, 0)" />
            </radialGradient>
          </defs>

          <!-- Sombra Projetada no Chão (Efeito 3D de profundidade) -->
          <ellipse cx="50" cy="85" rx="18" ry="4" fill="url(#ex1-shadow-grad)" class="ex1-shadow-3d" />

          <!-- Membros Traseiros (Em segundo plano / Sombreados) -->
          <!-- Perna Esquerda (Traseira) -->
          <path d="M 47 66 L 44 76 L 45 84" fill="none" stroke="#48785c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M 42 84 L 46 84" fill="none" stroke="#48785c" stroke-width="3" stroke-linecap="round" />

          <!-- Tronco superior que realiza o alongamento profundo para cima -->
          <g class="ex1-upper-body-3d">
            <!-- Braço Esquerdo (Traseiro - Esticado para cima) -->
            <path d="M 44 46 L 46 28 L 48 16" fill="none" stroke="#48785c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            
            <!-- Coluna / Eixo Central 3D -->
            <line x1="50" y1="46" x2="50" y2="66" stroke="var(--primary)" stroke-width="4.5" stroke-linecap="round" />
            
            <!-- Costelas (Gaiola Torácica 3D / Efeito de profundidade de Manequim) -->
            <path d="M 45 51 Q 50 49 55 51" fill="none" stroke="rgba(46, 107, 74, 0.25)" stroke-width="2" stroke-linecap="round" />
            <path d="M 45 56 Q 50 54 55 56" fill="none" stroke="rgba(46, 107, 74, 0.25)" stroke-width="2" stroke-linecap="round" />
            <path d="M 46 61 Q 50 59 54 61" fill="none" stroke="rgba(46, 107, 74, 0.25)" stroke-width="2" stroke-linecap="round" />
            
            <!-- Ombros (Alinhamento em perspectiva 3D) -->
            <line x1="43" y1="46" x2="57" y2="46" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
            
            <!-- Pescoço -->
            <line x1="50" y1="40" x2="50" y2="46" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
            
            <!-- Cabeça Esférica (Com gradiente 3D) -->
            <circle cx="50" cy="33" r="5.5" fill="url(#ex1-head-grad)" />
            
            <!-- Braço Direito (Dianteiro - Esticado para cima) -->
            <path d="M 56 46 L 54 28 L 52 16" fill="none" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            
            <!-- Mãos Entrelaçadas no Topo -->
            <path d="M 47 16 C 48 13, 52 13, 53 16" fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          </g>

          <!-- Membros Dianteiros (Em primeiro plano / Cores vivas) -->
          <!-- Perna Direita (Dianteira) -->
          <path d="M 53 66 L 55 76 L 54 85" fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M 51 85 L 56 85" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" />
        `;
        break;
        
      case "ex-2": // Alongamento de Deltoide
        animStyles = `
          @keyframes ex2-pulse {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(8deg); }
          }
          .ex2-arm-across { transform-origin: 47px 38px; animation: ex2-pulse 2.5s ease-in-out infinite; }
        `;
        svgContent = `
          <circle cx="${headX}" cy="${headY}" r="${headR}" fill="var(--primary)" />
          <line x1="50" y1="36" x2="50" y2="39" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineStartX}" y1="38" x2="${spineEndX}" y2="${spineEndY}" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineEndX}" y1="${spineEndY}" x2="42" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineEndX}" y1="${spineEndY}" x2="58" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <g class="ex2-arm-across">
            <line x1="50" y1="38" x2="28" y2="38" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" />
          </g>
          <path d="M 50 38 L 40 45 L 35 34" fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        `;
        break;

      case "ex-3": // Alongamento de Peitoral e Ombros
        animStyles = `
          @keyframes ex3-peitoral {
            0%, 100% { transform: scaleX(1); }
            50% { transform: scaleX(0.85) translateX(3px); }
          }
          .ex3-arms-back { transform-origin: 50px 38px; animation: ex3-peitoral 2.8s ease-in-out infinite; }
        `;
        svgContent = `
          <circle cx="${headX}" cy="${headY}" r="${headR}" fill="var(--primary)" />
          <line x1="50" y1="36" x2="50" y2="39" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineStartX}" y1="38" x2="${spineEndX}" y2="${spineEndY}" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineEndX}" y1="${spineEndY}" x2="44" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineEndX}" y1="${spineEndY}" x2="56" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <g class="ex3-arms-back">
            <path d="M 50 38 L 36 46 L 40 56" fill="none" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M 50 38 L 64 46 L 60 56" fill="none" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        `;
        break;

      case "ex-4": // Alongamento de Tríceps atrás da Nuca
        animStyles = `
          @keyframes ex4-triceps {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(2px) scaleY(0.97); }
          }
          .ex4-triceps-arms { transform-origin: 50px 38px; animation: ex4-triceps 2.5s ease-in-out infinite; }
        `;
        svgContent = `
          <circle cx="${headX}" cy="${headY}" r="${headR}" fill="var(--primary)" />
          <line x1="50" y1="36" x2="50" y2="39" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineStartX}" y1="38" x2="${spineEndX}" y2="${spineEndY}" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineEndX}" y1="${spineEndY}" x2="42" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineEndX}" y1="${spineEndY}" x2="58" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <g class="ex4-triceps-arms">
            <path d="M 50 38 L 56 22 L 48 18" fill="none" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M 50 38 L 62 38 L 56 22" fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        `;
        break;

      case "ex-5": // Alongamento Cervical Lateral
        animStyles = `
          @keyframes ex5-head-tilt {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(28deg); }
          }
          .ex5-head { transform-origin: 50px 36px; animation: ex5-head-tilt 2.5s ease-in-out infinite; }
        `;
        svgContent = `
          <line x1="${spineStartX}" y1="38" x2="${spineEndX}" y2="${spineEndY}" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineEndX}" y1="${spineEndY}" x2="42" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineEndX}" y1="${spineEndY}" x2="58" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="50" y1="38" x2="40" y2="54" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <g class="ex5-head">
            <circle cx="${headX}" cy="${headY}" r="${headR}" fill="var(--secondary)" />
            <line x1="50" y1="36" x2="50" y2="30" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" />
            <path d="M 50 38 L 60 28 L 54 24" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        `;
        break;

      case "ex-6": // Alongamento cruzado de Ombro
        animStyles = `
          @keyframes ex6-shoulder {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-8deg); }
          }
          .ex6-arm-across { transform-origin: 50px 38px; animation: ex6-shoulder 2.5s ease-in-out infinite; }
        `;
        svgContent = `
          <circle cx="${headX}" cy="${headY}" r="${headR}" fill="var(--primary)" />
          <line x1="50" y1="36" x2="50" y2="39" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineStartX}" y1="38" x2="${spineEndX}" y2="${spineEndY}" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineEndX}" y1="${spineEndY}" x2="42" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineEndX}" y1="${spineEndY}" x2="58" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <g class="ex6-arm-across">
            <line x1="50" y1="38" x2="72" y2="38" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" />
          </g>
          <path d="M 50 38 L 60 45 L 65 34" fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        `;
        break;

      case "ex-8": // Alongamento Lateral do Tronco
        animStyles = `
          @keyframes ex8-lateral-bend {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(18deg); }
          }
          @keyframes ex8-arm-over {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(40deg); }
          }
          .ex8-torso { transform-origin: 50px 60px; animation: ex8-lateral-bend 2.8s ease-in-out infinite; }
          .ex8-arm-r-group { transform-origin: 50px 38px; animation: ex8-arm-over 2.8s ease-in-out infinite; }
        `;
        svgContent = `
          <g class="ex8-torso">
            <circle cx="${headX}" cy="${headY}" r="${headR}" fill="var(--primary)" />
            <line x1="50" y1="36" x2="50" y2="39" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
            <line x1="${spineStartX}" y1="38" x2="${spineEndX}" y2="${spineEndY}" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" />
            <path d="M 50 38 L 42 44 L 47 48" fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <g class="ex8-arm-r-group">
              <path d="M 50 38 L 58 18 L 44 14" fill="none" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </g>
          <line x1="${spineEndX}" y1="${spineEndY}" x2="43" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineEndX}" y1="${spineEndY}" x2="57" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
        `;
        break;

      case "ex-9": // Alongamento de Quadríceps
        animStyles = `
          @keyframes ex9-pulse {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-5deg); }
          }
          .ex9-quadriceps { transform-origin: 50px 60px; animation: ex9-pulse 2.5s ease-in-out infinite; }
        `;
        svgContent = `
          <circle cx="${headX}" cy="${headY}" r="${headR}" fill="var(--primary)" />
          <line x1="50" y1="36" x2="50" y2="39" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineStartX}" y1="38" x2="${spineEndX}" y2="${spineEndY}" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="50" y1="38" x2="35" y2="38" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="50" y1="60" x2="46" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <g class="ex9-quadriceps">
            <path d="M 50 60 L 58 72 L 52 72" fill="none" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M 50 38 L 60 50 L 52 72" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        `;
        break;

      case "ex-10": // Alongamento de Panturrilha
        animStyles = `
          @keyframes ex10-lunge-pulse {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-3px, 1px); }
          }
          .ex10-body-pulse { animation: ex10-lunge-pulse 2.5s ease-in-out infinite; }
        `;
        svgContent = `
          <g class="ex10-body-pulse">
            <circle cx="46" cy="30" r="${headR}" fill="var(--primary)" />
            <line x1="46" y1="36" x2="46" y2="39" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
            <line x1="46" y1="38" x2="46" y2="60" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
            <path d="M 46 38 L 38 46 L 44 50" fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M 46 60 L 36 68 L 36 82" fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M 46 60 L 64 72 L 68 82" fill="none" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        `;
        break;

      case "ex-11": // Alongamento Posterior Apoiado
        animStyles = `
          @keyframes ex11-hamstrings-reach {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(15deg); }
          }
          .ex11-upper { transform-origin: 48px 60px; animation: ex11-hamstrings-reach 2.8s ease-in-out infinite; }
        `;
        svgContent = `
          <rect x="62" y="72" width="16" height="10" fill="rgba(46, 107, 74, 0.1)" stroke="var(--primary)" stroke-width="2" rx="2" />
          <path d="M 48 60 L 44 70 L 44 82" fill="none" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M 48 60 L 68 72" fill="none" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <g class="ex11-upper">
            <line x1="48" y1="38" x2="48" y2="60" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
            <circle cx="48" cy="30" r="${headR}" fill="var(--primary)" />
            <line x1="48" y1="38" x2="62" y2="46" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" />
          </g>
        `;
        break;

      case "ex-12": // Alongamento de Joelho ao Peito
        animStyles = `
          @keyframes ex12-knee-up {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-4px) rotate(-10deg); }
          }
          .ex12-leg-up { transform-origin: 50px 60px; animation: ex12-knee-up 2.8s ease-in-out infinite; }
        `;
        svgContent = `
          <circle cx="${headX}" cy="${headY}" r="${headR}" fill="var(--primary)" />
          <line x1="50" y1="36" x2="50" y2="39" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineStartX}" y1="38" x2="${spineEndX}" y2="${spineEndY}" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <line x1="${spineEndX}" y1="${spineEndY}" x2="44" y2="82" stroke="var(--primary)" stroke-width="4" stroke-linecap="round" />
          <g class="ex12-leg-up">
            <path d="M 50 60 L 62 50 L 58 38" fill="none" stroke="var(--secondary)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <path d="M 50 38 L 56 46 L 58 38" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        `;
        break;
    }

    return `
      <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block;">
        <style>
          .stretching-bg-circle {
            fill: none;
            stroke: rgba(46, 107, 74, 0.02);
            stroke-width: 2;
          }
          ${animStyles}
        </style>
        <circle cx="50" cy="50" r="44" class="stretching-bg-circle" />
        <line x1="15" y1="82" x2="85" y2="82" stroke="rgba(46, 107, 74, 0.06)" stroke-width="3" stroke-linecap="round" />
        ${svgContent}
      </svg>
    `;
  }

  // ==========================================
  // 5. RENDERIZAÇÃO E FILTRO DE EXERCÍCIOS
  // ==========================================
  const exercisesListContainer = document.getElementById('exercises-list');
  const exerciseFilters = document.getElementById('exercise-filters');

  function renderExercises(filterCategory = 'todos') {
    if (!exercisesListContainer) return;
    
    exercisesListContainer.innerHTML = '';
    
    const exerciciosFiltrados = filterCategory === 'todos' 
      ? EXERCICIOS 
      : EXERCICIOS.filter(ex => ex.categoria === filterCategory);

    exerciciosFiltrados.forEach(ex => {
      const card = document.createElement('article');
      card.className = 'exercise-card';
      card.setAttribute('data-id', ex.id);
      
      card.innerHTML = `
        <div class="exercise-visual-frame" style="position: relative; width: 100%; height: 160px; overflow: hidden; background: #fff; display: flex; align-items: center; justify-content: center;">
          <!-- Vídeo em loop de alta performance (WebM/MP4) -->
          <video class="exercise-gif" autoplay loop muted playsinline style="display:none; width:100%; height:100%; object-fit:cover; position:absolute; top:0; left:0; z-index:10;" onloadeddata="this.style.display='block';">
            <source src="img/${ex.id}.webm" type="video/webm">
            <source src="img/${ex.id}.mp4" type="video/mp4">
          </video>
          <!-- Ilustração Anatômica Padronizada Premium -->
          <img src="img/${ex.id}.png" alt="${ex.titulo}" class="exercise-illustration" style="width:100%; height:100%; object-fit:contain; display:block; position:absolute; top:0; left:0; z-index:2; transition: transform 0.5s ease;" />
        </div>
        <div class="exercise-body">
          <div>
            <div class="exercise-header">
              <span class="exercise-category">${ex.categoriaLbl}</span>
              <span class="exercise-body-target">${ex.foco}</span>
            </div>
            <h3 class="exercise-title">${ex.titulo}</h3>
            <p class="exercise-desc">${ex.desc}</p>
          </div>
          <div class="exercise-footer">
            <div class="exercise-meta">
              <i data-lucide="clock"></i>
              <span>${ex.duracao}</span>
              <span style="opacity:0.3; margin:0 4px;">•</span>
              <span>${ex.dificuldade}</span>
            </div>
            <button class="exercise-action-btn" aria-label="Iniciar timer para ${ex.titulo}">
              <i data-lucide="play"></i>
            </button>
          </div>
        </div>
      `;
      
      exercisesListContainer.appendChild(card);
    });

    lucide.createIcons();

    // Reatribuir cliques nos botões de ação (play) do card
    const actionBtns = exercisesListContainer.querySelectorAll('.exercise-action-btn');
    actionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.exercise-card');
        const exId = card.getAttribute('data-id');
        openExerciseTimer(exId);
      });
    });
  }

  // Event Listeners para Filtros
  if (exerciseFilters) {
    exerciseFilters.addEventListener('click', (e) => {
      const tab = e.target.closest('.filter-tab');
      if (!tab) return;
      // Atualizar classe ativa
      exerciseFilters.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const categoria = tab.getAttribute('data-category');
      renderExercises(categoria);
    });
  }

  // Renderização inicial
  renderExercises();

  // ==========================================
  // 6. MODAL DO CRONÔMETRO DE ALONGAMENTO ATIVO
  // ==========================================
  function init3DScene(exerciseId) {
    const container = document.getElementById('exercise-3d-mannequin-container');
    if (!container) return;

    container.innerHTML = '';
    const img = document.createElement('img');
    img.src = `img/${exerciseId}.png`;
    img.alt = 'Exercício de Alongamento';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.style.display = 'block';
    container.appendChild(img);
    
    // Remover o cursor grab, agora que é imagem estática
    container.style.cursor = 'default';
  }

  function destroy3DScene() {
    const container = document.getElementById('exercise-3d-mannequin-container');
    if (container) {
      container.innerHTML = '';
      container.innerHTML = `
        <div class="loading-3d-text" style="font-size: 0.85rem; font-weight: 500; color: var(--primary); display: flex; align-items: center; gap: 8px;">
          <i data-lucide="loader" class="animate-spin" style="width: 16px; height: 16px;"></i>
          Carregando...
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
  }

  const exTimerModal = document.getElementById('exercise-timer-modal');
  const closeExTimerBtn = document.getElementById('close-exercise-timer-btn');
  const exTimerCategory = document.getElementById('ex-timer-category');
  const exTimerTitle = document.getElementById('ex-timer-title');
  const exTimerInstruction = document.getElementById('ex-timer-instruction');
  const exTimerCountdown = document.getElementById('ex-timer-countdown');
  const exTimerPlayBtn = document.getElementById('ex-timer-play-btn');
  const exTimerResetBtn = document.getElementById('ex-timer-reset-btn');
  const exTimerStroke = document.getElementById('ex-timer-stroke');

  let activeExObj = null;
  let exTimerInterval = null;
  let exSecondsLeft = 10;
  let isExTimerRunning = false;
  const CIRCLE_CIRCUMFERENCE = 326.7; // Calculado de 2 * Math.PI * 52 (raio)

  function openExerciseTimer(id) {
    activeExObj = EXERCICIOS.find(ex => ex.id === id);
    if (!activeExObj) return;

    // Preencher dados no modal
    exTimerCategory.textContent = activeExObj.categoriaLbl;
    exTimerTitle.textContent = activeExObj.titulo;
    exTimerInstruction.textContent = activeExObj.instrucao;
    exSecondsLeft = activeExObj.tempoSegundos;
    exTimerCountdown.textContent = exSecondsLeft;
    exTimerCountdown.style.color = "var(--primary)";

    // Reset de estado
    isExTimerRunning = false;
    clearInterval(exTimerInterval);
    updateExTimerStroke(exSecondsLeft);
    setPlayBtnIcon(false);

    // Exibir Modal
    if (exTimerModal) {
      exTimerModal.classList.add('active');
    }

    // Inicializar Manequim 3D Real-time interativo
    init3DScene(id);
  }

  function closeExerciseTimer() {
    if (exTimerModal) {
      exTimerModal.classList.remove('active');
    }
    clearInterval(exTimerInterval);
    isExTimerRunning = false;
    activeExObj = null;

    // Destruir e liberar memória do Manequim 3D
    destroy3DScene();
  }

  function setPlayBtnIcon(running) {
    if (!exTimerPlayBtn) return;
    exTimerPlayBtn.innerHTML = running 
      ? `<i data-lucide="pause" style="width: 24px; height: 24px;"></i>` 
      : `<i data-lucide="play" style="width: 24px; height: 24px;"></i>`;
    lucide.createIcons();
  }

  function updateExTimerStroke(seconds) {
    if (!activeExObj || !exTimerStroke) return;
    const ratio = seconds / activeExObj.tempoSegundos;
    const offset = CIRCLE_CIRCUMFERENCE - (ratio * CIRCLE_CIRCUMFERENCE);
    exTimerStroke.style.strokeDashoffset = offset;
  }

  // Sintetizador Web Audio API - Alerta Sonoro Suave e Premium
  function playChime() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      // Chime suave de sino harmônico em A5 -> E6
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime); // A5
      osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.18); // E6
      
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.2);
    } catch (e) {
      console.log("AudioContext blocked or failed:", e);
    }
  }

  function toggleExTimer() {
    if (!activeExObj) return;
    
    if (isExTimerRunning) {
      // Pausar
      clearInterval(exTimerInterval);
      isExTimerRunning = false;
      setPlayBtnIcon(false);
    } else {
      // Iniciar
      isExTimerRunning = true;
      setPlayBtnIcon(true);
      
      exTimerInterval = setInterval(() => {
        exSecondsLeft--;
        exTimerCountdown.textContent = exSecondsLeft;
        updateExTimerStroke(exSecondsLeft);

        if (exSecondsLeft <= 0) {
          // Concluir temporizador
          clearInterval(exTimerInterval);
          isExTimerRunning = false;
          setPlayBtnIcon(false);
          playChime();
          
          // Feedback de sucesso
          exTimerCountdown.textContent = "✔";
          exTimerCountdown.style.color = "var(--success)";
          setTimeout(() => {
            exTimerCountdown.style.color = "var(--primary)";
            resetExTimer();
          }, 3000);
        }
      }, 1000);
    }
  }

  function resetExTimer() {
    if (!activeExObj) return;
    clearInterval(exTimerInterval);
    isExTimerRunning = false;
    exSecondsLeft = activeExObj.tempoSegundos;
    exTimerCountdown.textContent = exSecondsLeft;
    exTimerCountdown.style.color = "var(--primary)";
    updateExTimerStroke(exSecondsLeft);
    setPlayBtnIcon(false);
  }

  if (closeExTimerBtn) closeExTimerBtn.addEventListener('click', closeExerciseTimer);
  if (exTimerPlayBtn) exTimerPlayBtn.addEventListener('click', toggleExTimer);
  if (exTimerResetBtn) exTimerResetBtn.addEventListener('click', resetExTimer);

  // Fechar modal clicando fora do card
  if (exTimerModal) {
    exTimerModal.addEventListener('click', (e) => {
      if (e.target === exTimerModal) {
        closeExerciseTimer();
      }
    });
  }

  // ==========================================
  // 7. PAINEL DE LEMBRETE DE PAUSA ATIVA (BREAK TIMER)
  // ==========================================
  const openTimerWidgetBtn = document.getElementById('open-timer-widget');
  const drawerTimerBtn = document.getElementById('drawer-timer-btn');
  const timerModal = document.getElementById('timer-modal');
  const closeTimerModalBtn = document.getElementById('close-timer-modal-btn');
  
  const breakTimerStroke = document.getElementById('break-timer-stroke');
  const breakTimerDisplay = document.getElementById('break-timer-display');
  const breakTimerStatusLabel = document.getElementById('break-timer-status-label');
  const headerTimerBadge = document.getElementById('header-timer-badge');
  const intervalOptBtns = document.querySelectorAll('.interval-opt-btn');
  
  const timerToggleBtn = document.getElementById('timer-toggle-btn');
  const timerBtnIcon = document.getElementById('timer-btn-icon');
  const timerBtnText = document.getElementById('timer-btn-text');
  const timerResetBtn = document.getElementById('timer-reset-btn');

  let breakTimerInterval = null;
  let totalBreakSeconds = 3000; // 50 minutos padrão
  let currentBreakSecondsLeft = 3000;
  let isBreakTimerRunning = false;
  const COUNTDOWN_CIRCUMFERENCE = 283; // 2 * Math.PI * 45 (raio do SVG)

  // Abrir / Fechar Painel
  function toggleTimerPanel() {
    if (timerModal) {
      timerModal.classList.toggle('active');
    }
  }

  if (openTimerWidgetBtn) {
    openTimerWidgetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTimerPanel();
    });
  }

  if (drawerTimerBtn) {
    drawerTimerBtn.addEventListener('click', () => {
      closeDrawer();
      if (timerModal) {
        timerModal.classList.add('active');
      }
    });
  }

  if (closeTimerModalBtn) {
    closeTimerModalBtn.addEventListener('click', () => {
      if (timerModal) {
        timerModal.classList.remove('active');
      }
    });
  }

  // Fechar o modal ao clicar fora dele
  document.addEventListener('click', (e) => {
    if (timerModal && timerModal.classList.contains('active') && !e.target.closest('#timer-modal') && !e.target.closest('#open-timer-widget')) {
      timerModal.classList.remove('active');
    }
  });

  // Alterar Intervalo Padrão (20, 30 ou 50 min)
  intervalOptBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (isBreakTimerRunning) return; // Impedir troca durante o andamento

      intervalOptBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mins = parseInt(btn.getAttribute('data-minutes'));
      totalBreakSeconds = mins * 60;
      currentBreakSecondsLeft = totalBreakSeconds;
      
      updateBreakTimerDisplay();
      updateBreakTimerStroke();
    });
  });

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function updateBreakTimerDisplay() {
    if (!breakTimerDisplay) return;
    const formatted = formatTime(currentBreakSecondsLeft);
    breakTimerDisplay.textContent = formatted;

    // Atualizar badge do header se estiver ativado
    if (headerTimerBadge) {
      if (isBreakTimerRunning) {
        headerTimerBadge.textContent = formatted;
        headerTimerBadge.style.display = 'inline-block';
      } else if (currentBreakSecondsLeft === totalBreakSeconds) {
        headerTimerBadge.style.display = 'none';
      }
    }
  }

  function updateBreakTimerStroke() {
    if (!breakTimerStroke) return;
    const ratio = currentBreakSecondsLeft / totalBreakSeconds;
    const offset = COUNTDOWN_CIRCUMFERENCE - (ratio * COUNTDOWN_CIRCUMFERENCE);
    breakTimerStroke.style.strokeDashoffset = offset;
  }

  function toggleBreakTimer() {
    if (isBreakTimerRunning) {
      // Pausar
      clearInterval(breakTimerInterval);
      isBreakTimerRunning = false;
      if (breakTimerStatusLabel) breakTimerStatusLabel.textContent = "Pausado";
      if (timerBtnText) timerBtnText.textContent = "Retomar";
      if (timerBtnIcon) {
        timerBtnIcon.setAttribute('data-lucide', 'play');
        lucide.createIcons();
      }
    } else {
      // Iniciar
      isBreakTimerRunning = true;
      if (breakTimerStatusLabel) breakTimerStatusLabel.textContent = "Focado";
      if (timerBtnText) timerBtnText.textContent = "Pausar";
      if (timerBtnIcon) {
        timerBtnIcon.setAttribute('data-lucide', 'pause');
        lucide.createIcons();
      }
      if (timerResetBtn) timerResetBtn.disabled = false;

      breakTimerInterval = setInterval(() => {
        currentBreakSecondsLeft--;
        updateBreakTimerDisplay();
        updateBreakTimerStroke();

        if (currentBreakSecondsLeft <= 0) {
          // Chegou a zero! Tocar sinal e notificar
          clearInterval(breakTimerInterval);
          isBreakTimerRunning = false;
          if (breakTimerStatusLabel) breakTimerStatusLabel.textContent = "Hora da Pausa!";
          
          if (timerBtnText) timerBtnText.textContent = "Iniciar";
          if (timerBtnIcon) {
            timerBtnIcon.setAttribute('data-lucide', 'play');
            lucide.createIcons();
          }
          if (headerTimerBadge) headerTimerBadge.style.display = 'none';
          
          playChime();
          showBreakOverlayAlert();
        }
      }, 1000);
    }
  }

  function resetBreakTimer() {
    clearInterval(breakTimerInterval);
    isBreakTimerRunning = false;
    currentBreakSecondsLeft = totalBreakSeconds;
    if (breakTimerStatusLabel) breakTimerStatusLabel.textContent = "Em Espera";
    if (timerBtnText) timerBtnText.textContent = "Iniciar";
    if (timerBtnIcon) {
      timerBtnIcon.setAttribute('data-lucide', 'play');
      lucide.createIcons();
    }
    if (timerResetBtn) timerResetBtn.disabled = true;
    if (headerTimerBadge) headerTimerBadge.style.display = 'none';
    
    updateBreakTimerDisplay();
    updateBreakTimerStroke();
  }

  function showBreakOverlayAlert() {
    // Abrir o timer modal
    if (timerModal) {
      timerModal.classList.add('active');
    }

    // Mudar a cor de foco do timer e acionar um alerta amigável na tela
    if (breakTimerStroke) {
      const originalStrokeColor = breakTimerStroke.style.stroke;
      breakTimerStroke.style.stroke = "var(--success)";
      
      setTimeout(() => {
        alert("⏰ Hora da sua Pausa Ativa Ergofisio! Levante-se, relaxe os olhos por 2 minutos e faça um dos alongamentos da biblioteca.");
        breakTimerStroke.style.stroke = originalStrokeColor;
        resetBreakTimer();
      }, 500);
    }
  }

  if (timerToggleBtn) timerToggleBtn.addEventListener('click', toggleBreakTimer);
  if (timerResetBtn) timerResetBtn.addEventListener('click', resetBreakTimer);

  // Inicializar Displays
  resetBreakTimer();

  // ==========================================
  // 8. NAVEGAÇÃO FLUIDA & SCROLL SPY (INDICADOR ATIVO)
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  function scrollSpy() {
    const scrollY = window.pageYOffset + 100; // Offset do header sticky

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 85;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', scrollSpy);
});

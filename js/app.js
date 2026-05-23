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
      titulo: "Alongamento de Tríceps (#3)",
      desc: "Alongamento 3: Dobre o cotovelo atrás da cabeça e puxe-o suavemente com a outra mão para alongar o tríceps.",
      icon: "heart"
    },
    {
      titulo: "Alongamento de Pescoço (#5)",
      desc: "Alongamento 5: Puxe suavemente a cabeça com a mão em direção ao ombro lateral para aliviar a tensão cervical.",
      icon: "smile"
    },
    {
      titulo: "Alongamento de Costas (#6)",
      desc: "Alongamento 6: Entrelace os dedos à frente e empurre os braços para frente, curvando suavemente a coluna alta.",
      icon: "user"
    },
    {
      titulo: "Alongamento de Panturrilha (#10)",
      desc: "Alongamento 10: Dê um passo largo à frente, mantendo o calcanhar traseiro firme no chão para alongar a panturrilha.",
      icon: "activity"
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

  // Determinar dica do dia com base no dia do mês atual (1-31)
  const hoje = new Date();
  const diaDoMes = hoje.getDate(); // 1 a 31
  const mesesText = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const dataFormatada = `${diaDoMes} de ${mesesText[hoje.getMonth()]} de ${hoje.getFullYear()}`;
  
  // Selecionar a dica baseada no índice do array (prevenir estouro usando operador módulo)
  const tipIndex = (diaDoMes - 1) % DICAS_ERGONOMIA.length;
  const dicaDeHoje = DICAS_ERGONOMIA[tipIndex];
  
  // Rastrear a dica exibida no momento para copiar/compartilhar
  let dicaExibida = dicaDeHoje;

  // Injetar dados na carta se os elementos existirem
  if (tipDateBadge && tipNumber && tipTitleText && tipDescriptionText && tipIcon) {
    tipDateBadge.textContent = dataFormatada;
    tipNumber.textContent = `Dica #${diaDoMes}`;
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
      desc: "Estende toda a cadeia muscular superior e ajuda a realinhar a coluna após horas de postura sentada.",
      instrucao: "Entrelace os dedos das mãos e empurre os braços verticalmente para cima, acima da cabeça, mantendo os cotovelos esticados e a coluna bem alinhada.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-2",
      titulo: "2. Alongamento de Deltoide e Ombros",
      categoria: "membros-sup",
      categoriaLbl: "Membros Superiores",
      foco: "Articulação do Ombro",
      duracao: "10s cada lado",
      desc: "Reduz o acúmulo de tensão na articulação do ombro e na parte superior das costas.",
      instrucao: "Estenda um braço horizontalmente à frente do peito e, com a outra mão, puxe suavemente o cotovelo em direção ao corpo, mantendo o ombro relaxado.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-3",
      titulo: "3. Alongamento de Tríceps",
      categoria: "membros-sup",
      categoriaLbl: "Membros Superiores",
      foco: "Tríceps e Dorsal",
      duracao: "10s cada lado",
      desc: "Melhora a flexibilidade dos braços e alivia a compressão na parte alta e lateral do tronco.",
      instrucao: "Eleve um braço, dobre o cotovelo atrás da cabeça e use a outra mão para puxar suavemente o cotovelo para baixo. Mantenha o pescoço livre.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-4",
      titulo: "4. Alongamento Posterior de Pescoço",
      categoria: "membros-sup",
      categoriaLbl: "Membros Superiores",
      foco: "Nuca e Cervical",
      duracao: "10 segundos",
      desc: "Diminui a rigidez na base do crânio provocada pela inclinação constante da cabeça ao olhar telas.",
      instrucao: "Entrelace as mãos atrás da nuca e puxe a cabeça suavemente para a frente, aproximando o queixo do peito sem curvar o tronco.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-5",
      titulo: "5. Alongamento Cervical Lateral",
      categoria: "membros-sup",
      categoriaLbl: "Membros Superiores",
      foco: "Pescoço e Trapézio",
      duracao: "10s cada lado",
      desc: "Combate torcicolos e tensões acumuladas nos ombros por estresse ou telas baixas.",
      instrucao: "Sentado ereto, puxe suavemente a cabeça com a mão em direção ao ombro correspondente até sentir alongar a lateral oposta do pescoço. Repita do outro lado.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-6",
      titulo: "6. Alongamento Escapular e Costas",
      categoria: "coluna-tronco",
      categoriaLbl: "Coluna e Tronco",
      foco: "Região Torácica",
      duracao: "10 segundos",
      desc: "Arredonda a coluna alta e afasta as escápulas, liberando a rigidez muscular dorsal.",
      instrucao: "Entrelace os dedos à frente e empurre as mãos para a frente com as palmas voltadas para fora, curvando suavemente as costas e abaixando a cabeça.",
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
      instrucao: "De pé, com os joelhos destravados, incline o tronco para a frente a partir do quadril, deixando os braços e a cabeça caírem relaxados em direção ao chão.",
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
      desc: "Abre espaço nas costelas e melhora a mobilidade lateral da lombar e cintura.",
      instrucao: "De pé, eleve um braço acima da cabeça e incline o tronco para o lado oposto, apoiando a outra mão no quadril para estabilização.",
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
      desc: "Descarrega o estresse acumulado na parte anterior da coxa pelo longo tempo sentado na cadeira.",
      instrucao: "Apoie uma das mãos na parede ou cadeira. Com a outra, flexione o joelho e puxe o pé de trás em direção ao glúteo, mantendo os joelhos alinhados.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-10",
      titulo: "10. Alongamento de Panturrilha em Lunge",
      categoria: "membros-inf",
      categoriaLbl: "Membros Inferiores",
      foco: "Panturrilhas",
      duracao: "10s cada perna",
      desc: "Estimula a circulação de retorno venoso das pernas e previne dores e encurtamentos musculares.",
      instrucao: "Dê um passo largo à frente flexionando o joelho dianteiro. Mantenha a perna traseira estendida com o calcanhar totalmente apoiado no chão.",
      tempoSegundos: 10,
      dificuldade: "Fácil"
    },
    {
      id: "ex-11",
      titulo: "11. Alongamento Posterior Apoiado",
      categoria: "membros-inf",
      categoriaLbl: "Membros Inferiores",
      foco: "Posterior de Coxa",
      duracao: "10s cada perna",
      desc: "Ajuda a liberar a tensão ciática e lombar ao alongar os isquiotibiais.",
      instrucao: "Apoie o calcanhar de uma perna estendida sobre um degrau ou cadeira baixa. Incline o tronco à frente a partir do quadril, mantendo as costas retas.",
      tempoSegundos: 10,
      dificuldade: "Médio"
    },
    {
      id: "ex-12",
      titulo: "12. Alongamento de Glúteo e Quadril",
      categoria: "membros-inf",
      categoriaLbl: "Membros Inferiores",
      foco: "Glúteos e Quadril",
      duracao: "10s cada perna",
      desc: "Descomprime a articulação do quadril e relaxa a musculatura glútea após longos períodos sentado.",
      instrucao: "Sentado na cadeira, apoie o calcanhar de uma perna sobre o joelho oposto. Mantendo a coluna ereta, incline suavemente o tronco para a frente.",
      tempoSegundos: 10,
      dificuldade: "Médio"
    }
  ];

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
        <div class="exercise-visual-frame">
          <img src="img/${ex.id}.gif" alt="${ex.titulo}" class="exercise-gif" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="exercise-gif-placeholder">
            <i data-lucide="accessibility" class="animate-pulse"></i>
            <span style="font-size: 0.75rem; font-weight: 500; opacity: 0.7; margin-top: 6px;">Visualizar Alongamento</span>
          </div>
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
  }

  function closeExerciseTimer() {
    if (exTimerModal) {
      exTimerModal.classList.remove('active');
    }
    clearInterval(exTimerInterval);
    isExTimerRunning = false;
    activeExObj = null;
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

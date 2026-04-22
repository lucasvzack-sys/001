// src/data/clinicalNotes.ts

export interface ClinicalNote {
  oqueE: string;
  historico: string;
  cuidados: string;
  indicacao: string;
  interpretacao: string;
  limitacoes: string;
  referencias: { titulo: string; url: string }[];
}

export const clinicalNotes: Record<string, ClinicalNote> = {
  imc: {
    oqueE: "O Índice de Massa Corporal (IMC) é uma métrica internacional reconhecida pela Organização Mundial da Saúde (OMS) que relaciona o peso de um indivíduo à sua altura ao quadrado, fornecendo uma estimativa rápida da adiposidade corporal.",
    historico: "Criado pelo matemático, astrônomo e estatístico belga Adolphe Quetelet em 1832 (originalmente chamado de Índice de Quetelet), o IMC ganhou popularidade moderna em 1972 quando o pesquisador Ancel Keys o validou como o melhor indicador proxy de obesidade para estudos populacionais.",
    cuidados: "O cálculo não diferencia a origem do peso (massa magra vs. massa gorda). Pacientes muito musculosos podem ser classificados erroneamente como obesos. O IMC também deve ser evitado ou ajustado para gestantes e pacientes com amputações maiores.",
    indicacao: "Utilizado como ferramenta de triagem primária e universal nos Cuidados de Saúde Primários para identificar desnutrição, sobrepeso e obesidade, além de ser critério de elegibilidade para cirurgia bariátrica e tratamentos farmacológicos.",
    interpretacao: "Valores < 18,5 kg/m² indicam baixo peso; 18,5 a 24,9 kg/m² indicam eutrofia (peso normal); 25 a 29,9 kg/m² representam sobrepeso; e valores ≥ 30 kg/m² classificam-se como obesidade (dividida em graus I, II e III).",
    limitacoes: "A principal limitação é a incapacidade de avaliar a distribuição da gordura corporal. A adiposidade visceral (gordura abdominal), que tem maior correlação com risco cardiovascular, não é capturada pelo IMC. Deve ser complementado com a medida da circunferência abdominal.",
    referencias: [
      { titulo: "World Health Organization (WHO) - BMI Classification", url: "https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/body-mass-index" },
      { titulo: "UpToDate: Obesity in adults: Prevalence, screening, and evaluation", url: "https://www.uptodate.com/contents/obesity-in-adults-prevalence-screening-and-evaluation" }
    ]
  },
  glasgow: {
    oqueE: "A Escala de Coma de Glasgow (ECG) é um instrumento neurológico padronizado que quantifica o nível de consciência de pacientes com dano cerebral agudo através de três parâmetros: abertura ocular, resposta verbal e resposta motora.",
    historico: "Desenvolvida em 1974 pelos neurocirurgiões Graham Teasdale e Bryan Jennett no Instituto de Ciências Neurológicas da Universidade de Glasgow. Em 2018, foi atualizada (Glasgow Coma Scale - Pupils ou GCS-P) para incluir a reatividade pupilar.",
    cuidados: "Antes de avaliar, é crucial garantir que não há barreiras à comunicação (como surdez, barreiras linguísticas ou intubação prévia). Em pacientes intubados, a resposta verbal não é testável (marcada como 'NT' ou 1T).",
    indicacao: "Avaliação inicial e monitoramento contínuo do trauma cranioencefálico (TCE), acidentes vasculares cerebrais, hemorragias intracranianas e intoxicações sistêmicas.",
    interpretacao: "A pontuação varia de 3 (coma profundo) a 15 (alerta e orientado). TCE é classicamente classificado como leve (13-15), moderado (9-12) ou grave (≤ 8). Um escore ≤ 8 é indicação formal para proteção definitiva de via aérea (intubação).",
    limitacoes: "Sofre interferência direta de sedativos, bloqueadores neuromusculares, intoxicação alcoólica aguda, edema periorbital severo (impede abertura ocular) e afasia primária.",
    referencias: [
      { titulo: "The Glasgow Coma Scale at 40 years: standing the test of time (The Lancet)", url: "https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(14)70120-6/fulltext" },
      { titulo: "AHA/ASA Guidelines for the Management of Severe Traumatic Brain Injury", url: "https://braintrauma.org/guidelines/" }
    ]
  },
  centor: {
    oqueE: "O Escore de Centor (e sua versão Modificada de McIsaac) é uma regra de predição clínica usada para estimar a probabilidade de faringite aguda ser causada pelo Estreptococo beta-hemolítico do Grupo A (SBHGA).",
    historico: "A versão original foi desenvolvida em 1981 pelo Dr. Robert Centor focada em adultos. Em 1998, o Dr. Warren McIsaac modificou o escore adicionando o fator 'idade', melhorando a sensibilidade para uso em crianças (onde a infecção estreptocócica é mais prevalente).",
    cuidados: "O escore NÃO deve ser aplicado em pacientes com sintomas virais claros concomitantes (como conjuntivite, rinorreia severa, tosse intensa ou diarreia), pois esses sinais virtualmente excluem a etiologia bacteriana.",
    indicacao: "Identificar quais pacientes com dor de garganta (faringoamigdalite) precisam de teste rápido de antígeno (TR) ou cultura de orofaringe, e reduzir a prescrição inadequada de antibióticos.",
    interpretacao: "Pontuações de 0 a 1 indicam baixo risco (< 10%) e não exigem teste ou antibiótico. Pontuações de 2 a 3 justificam a realização de teste rápido. Pontuações ≥ 4 indicam alto risco (até 50%), justificando o teste rápido e, em alguns protocolos, a antibioticoterapia empírica.",
    limitacoes: "O escore estima a probabilidade, mas não faz o diagnóstico definitivo. Tem valor preditivo negativo excelente, mas valor preditivo positivo modesto (mesmo com pontuação 4, 50% dos pacientes não têm infecção estreptocócica).",
    referencias: [
      { titulo: "Centor RM et al. The diagnosis of strep throat in adults in the emergency room", url: "https://pubmed.ncbi.nlm.nih.gov/6781743/" },
      { titulo: "UpToDate: Evaluation of acute pharyngitis in adults", url: "https://www.uptodate.com/contents/evaluation-of-acute-pharyngitis-in-adults" }
    ]
  },
  clcr: {
    oqueE: "A fórmula de Cockcroft-Gault é uma equação matemática tradicional utilizada para estimar a Taxa de Filtração Glomerular (TFG) e, consequentemente, avaliar a função renal a partir da creatinina sérica, peso, idade e sexo biológico.",
    historico: "Publicada em 1976 por Donald W. Cockcroft e Matthew H. Gault. O estudo original baseou-se numa coorte de 236 pacientes do sexo masculino, tendo o fator de correção de 0.85 para mulheres sido adicionado posteriormente por inferência de menor massa muscular.",
    cuidados: "A fórmula utiliza o peso total do paciente. Em pacientes com obesidade mórbida ou estados edematosos graves (anasarca), o uso do peso real superestima grosseiramente a função renal. Nesses casos, prefere-se o uso do Peso Corporal Ideal ou Ajustado.",
    indicacao: "Apesar das fórmulas CKD-EPI serem superiores para o estadiamento da Doença Renal Crônica, a Cockcroft-Gault permanece como o padrão-ouro regulatório exigido pelas bulas de medicamentos para o ajuste posológico de fármacos de excreção renal (como antimicrobianos e anticoagulantes orais diretos - DOACs).",
    interpretacao: "O resultado é expresso em mL/min. Valores normais situam-se geralmente acima de 90 mL/min. A prescrição medicamentosa costuma sofrer ajustes críticos em limiares como < 50 mL/min e < 30 mL/min, dependendo do fármaco.",
    limitacoes: "Não foi validada em pacientes pediátricos. É altamente dependente da massa muscular, sendo imprecisa em pacientes sarcopênicos, desnutridos, amputados ou naqueles com dieta estritamente vegana (onde a geração de creatinina endógena é atípica).",
    referencias: [
      { titulo: "Prediction of clearance from serum creatinine (Nephron, 1976)", url: "https://pubmed.ncbi.nlm.nih.gov/1244564/" },
      { titulo: "KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease", url: "https://kdigo.org/guidelines/ckd-evaluation-and-management/" }
    ]
  },
  childpugh: {
    oqueE: "O escore de Child-Turcotte-Pugh (frequentemente chamado apenas de Child-Pugh) é um sistema de estadiamento clínico e laboratorial que avalia a gravidade da disfunção hepática na cirrose e a sobrevida a curto e médio prazo.",
    historico: "Originalmente proposto por C.G. Child e J.G. Turcotte em 1964 para prever a mortalidade durante cirurgias de descompressão portal. Foi modificado por R.N. Pugh em 1973, que substituiu o parâmetro subjetivo do 'estado nutricional' pelo Tempo de Protrombina (ou INR).",
    cuidados: "A pontuação baseia-se no cenário basal do paciente, na ausência de fatores precipitantes agudos (como hemorragia digestiva, infecção grave ou interrupção de diuréticos), para não superestimar o estágio real da cirrose.",
    indicacao: "Fundamental na prática beira-leito para estimar o prognóstico geral, avaliar o risco de mortalidade perioperatória e guiar a necessidade de ajuste posológico para medicações de metabolização exclusivamente hepática.",
    interpretacao: "A soma dos 5 parâmetros divide os pacientes em Classe A (5-6 pontos, doença compensada), Classe B (7-9 pontos, comprometimento funcional significativo) ou Classe C (10-15 pontos, cirrose descompensada com sobrevida em 1 ano de aproximadamente 45%).",
    limitacoes: "A presença de ascite e encefalopatia hepática são critérios altamente subjetivos e sujeitos à variação entre avaliadores. Além disso, o sistema possui um 'efeito teto' (pacientes extremamente graves recebem a mesma pontuação C que pacientes limítrofes).",
    referencias: [
      { titulo: "Transection of the oesophagus for bleeding oesophageal varices (Pugh RN et al., 1973)", url: "https://pubmed.ncbi.nlm.nih.gov/4541913/" },
      { titulo: "AASLD Guidelines on the Management of Cirrhosis", url: "https://www.aasld.org/practice-guidelines" }
    ]
  },
  meld: {
    oqueE: "O MELD (Model for End-Stage Liver Disease) é um sistema de pontuação puramente objetivo que estima a probabilidade de mortalidade em 90 dias (3 meses) em pacientes com hepatopatia crônica avançada.",
    historico: "Desenvolvido em 2002 pela Mayo Clinic (originalmente para prever sobrevida pós-TIPS). Devido à sua base logarítmica e objetividade laboratorial, foi rapidamente adotado (inclusive pelo Sistema Nacional de Transplantes no Brasil) como o critério único de alocação de órgãos em lista de espera.",
    cuidados: "Os valores de laboratório inseridos não devem ter mais de 48 horas no momento da decisão clínica crítica. A presença de diálise na última semana força o valor da creatinina para 4.0 mg/dL no cálculo da fórmula.",
    indicacao: "Priorização de pacientes na lista de transplante hepático e avaliação do prognóstico em hepatites alcoólicas agudas e insuficiência hepática aguda.",
    interpretacao: "O escore varia na prática clínica de 6 a 40 (valores matemáticos fora desse intervalo são arredondados para as extremidades). Quanto maior o número, maior a gravidade. Um MELD > 15 geralmente estabelece o limiar de indicação para avaliação para transplante hepático.",
    limitacoes: "Não incorpora a gravidade da encefalopatia hepática ou ascite refratária (situações de grave perda de qualidade de vida onde o MELD pode ser paradoxalmente baixo). Pacientes muito sarcopênicos (pouca massa muscular) podem ter o escore subestimado pelo valor isolado da creatinina.",
    referencias: [
      { titulo: "A model to predict survival in patients with end-stage liver disease (Kamath PS et al., 2001)", url: "https://pubmed.ncbi.nlm.nih.gov/11172036/" },
      { titulo: "OPTN/UNOS Liver and Intestinal Organ Transplantation Policies", url: "https://optn.transplant.hrsa.gov/" }
    ]
  },
  chads: {
    oqueE: "O escore CHA₂DS₂-VASc é uma regra de predição clínica validada para estimar o risco anual de Acidente Vascular Cerebral (AVC) isquêmico e tromboembolismo sistêmico em pacientes com Fibrilação Atrial (FA) não-valvular.",
    historico: "Proposto pelo Dr. Gregory Lip em 2010 como um refinamento do antigo escore CHADS₂. O novo modelo expandiu os fatores de risco para incluir de forma mais robusta a faixa etária avançada (65-74 anos), sexo feminino e doença vascular (VASc).",
    cuidados: "Este escore não se aplica a pacientes com 'FA Valvular' (presença de estenose mitral reumática moderada/grave ou portadores de válvula cardíaca mecânica). Nestes casos, o risco embólico é tão extremo que a anticoagulação (preferencialmente com Varfarina) é obrigatória independente da pontuação.",
    indicacao: "Identificar de forma binária (sim/não) quais pacientes com FA requerem anticoagulação oral sistêmica a longo prazo para prevenção de AVC.",
    interpretacao: "O critério atual de prescrição recomenda a anticoagulação (preferencialmente com DOACs) para homens com escore ≥ 2 ou mulheres com escore ≥ 3. Para pontuações de 1 (homens) ou 2 (mulheres), a decisão deve ser individualizada.",
    limitacoes: "Não inclui outros fatores de risco menores para AVC associados à FA, como disfunção renal crônica, apneia obstrutiva do sono e marcadores de ecocardiograma (tamanho do átrio esquerdo).",
    referencias: [
      { titulo: "Refining clinical risk stratification for predicting stroke and thromboembolism in atrial fibrillation (Lip GYH et al.)", url: "https://pubmed.ncbi.nlm.nih.gov/20113917/" },
      { titulo: "Diretrizes da Sociedade Brasileira de Cardiologia (SBC) para Fibrilação Atrial", url: "https://www.portal.cardiol.br/diretrizes" }
    ]
  },
  timi: {
    oqueE: "O Escore de Risco TIMI para Síndrome Coronariana Aguda sem Supradesnivelamento de ST (SCA-SSST) é uma ferramenta que categoriza o risco do paciente desenvolver infarto agudo do miocárdio, necessitar de revascularização urgente ou evoluir para o óbito em 14 dias.",
    historico: "Derivado em 2000 pelo Dr. Elliott Antman e colegas a partir dos dados dos ensaios clínicos TIMI 11B e ESSENCE, tornando-se rapidamente o padrão nas salas de emergência em todo o mundo para triagem de dor torácica.",
    cuidados: "Só deve ser aplicado em pacientes em que o diagnóstico sindrômico de SCA (Angina Instável ou IAMSSST) já é o mais provável. Não deve ser usado como critério isolado para 'descartar' dor torácica atípica na triagem (para isso usam-se escores como HEART ou EDACS).",
    indicacao: "Orientar a decisão da equipe da sala de emergência e hemodinâmica quanto à estratégia: conservadora (isquemia-guiada) versus invasiva precoce (cateterismo cardíaco precoce).",
    interpretacao: "O escore máximo é 7. Pacientes com pontuação 0-2 têm baixo risco (podem ser conduzidos de forma conservadora ou testes não-invasivos). Escores 3-4 (risco intermediário) e 5-7 (alto risco, até 40% de chance de desfecho negativo) se beneficiam fortemente de terapia antiplaquetária dupla agressiva e cateterismo em até 24h.",
    limitacoes: "Como o peso de cada critério é exatamente 1 ponto, fatores de gravidade desproporcional (ex: Troponina positiva que eleva o risco brutalmente) recebem o mesmo peso que ter 65 anos. O Escore GRACE, embora mais complexo, costuma ter melhor acurácia preditiva em pacientes graves.",
    referencias: [
      { titulo: "The TIMI risk score for unstable angina/non-ST elevation MI (JAMA, 2000)", url: "https://pubmed.ncbi.nlm.nih.gov/10938172/" },
      { titulo: "ACC/AHA Guidelines for the Management of Patients with Non-ST-Elevation Acute Coronary Syndromes", url: "https://www.acc.org/guidelines" }
    ]
  },
  curb65: {
    oqueE: "O CURB-65 é um acrônimo para um escore clínico de gravidade que prediz a mortalidade de curto prazo (30 dias) em pacientes com Pneumonia Adquirida na Comunidade (PAC).",
    historico: "Desenvolvido em 2003 e fortemente endossado pela British Thoracic Society (BTS). Baseia-se em fatores clínicos facilmente obtidos (Confusão, Ureia, Frequência Respiratória, Pressão Arterial e Idade ≥ 65).",
    cuidados: "A letra 'U' da fórmula refere-se à Ureia elevada (> 43 mg/dL) ou ao BUN (Blood Urea Nitrogen) > 19 mg/dL. É vital não confundir essas duas grandezas laboratoriais. O estado de confusão mental (C) deve ser de início recente e secundário à infecção atual.",
    indicacao: "Estratificação rápida na porta do serviço de urgência para balizar o local apropriado de tratamento para o paciente com diagnóstico confirmado radiologicamente de PAC.",
    interpretacao: "Escore 0-1 (Baixo risco, mortalidade < 1.5%): tratamento ambulatorial. Escore 2 (Risco intermediário, mortalidade ~9.2%): internação hospitalar na enfermaria ou tratamento supervisionado com reavaliação precoce. Escore 3-5 (Alto risco, mortalidade > 22%): admissão rigorosa, frequentemente exigindo Unidade de Terapia Intensiva (UTI).",
    limitacoes: "Não incorpora a oximetria de pulso nem as comorbidades graves preexistentes (como DPOC severa ou insuficiência cardíaca congestiva). Um paciente jovem (30 anos) com hipoxemia gravíssima e pneumonia viral pode ter um CURB-65 de 0, subestimando perigosamente o seu quadro.",
    referencias: [
      { titulo: "Validation of a predictive rule for severity of community-acquired pneumonia (Lim WS et al., 2003)", url: "https://pubmed.ncbi.nlm.nih.gov/12738762/" },
      { titulo: "ATS/IDSA Guidelines for Community-Acquired Pneumonia in Adults", url: "https://www.thoracic.org/statements/resources/tb-opi/idsa-ats-cap.pdf" }
    ]
  },
  wells: {
    oqueE: "O Escore de Wells para Trombose Venosa Profunda (TVP) é um modelo de probabilidade pré-teste que estima o risco de um paciente sintomático no membro inferior possuir um trombo no sistema venoso profundo.",
    historico: "Desenvolvido inicialmente em 1997 pelo Dr. Philip S. Wells e modificado/simplificado em 2003 para a versão clássica que adicionou a categoria de histórico prévio de TVP.",
    cuidados: "A sua força preditiva depende ativamente do último critério da lista ('Diagnóstico alternativo mais provável que TVP'), que desconta 2 pontos. Este item exige julgamento clínico apurado (ex: o paciente tem uma clara rotura de cisto de Baker, erisipela, ou estiramento muscular que justifique o edema).",
    indicacao: "Triagem racional no pronto-atendimento para evitar o uso irracional da ecografia Doppler venosa em todos os pacientes com dor e edema nas pernas.",
    interpretacao: "Na versão de dois níveis: Escore ≤ 1 (TVP Improvável) -> deve-se solicitar D-Dímero; se negativo, a TVP está excluída, se positivo, pede-se a ecografia. Escore ≥ 2 (TVP Provável) -> não se perde tempo nem dinheiro com o D-Dímero e avança-se diretamente para a solicitação da Ultrassonografia Doppler venosa dos membros inferiores.",
    limitacoes: "A performance diagnóstica cai consideravelmente em pacientes gestantes, no puerpério imediato, ou em portadores de trombofilias sistêmicas complexas ativas. Não deve ser aplicado empiricamente a pacientes assintomáticos.",
    referencias: [
      { titulo: "Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis (Wells PS et al., 2003)", url: "https://pubmed.ncbi.nlm.nih.gov/12975529/" },
      { titulo: "UpToDate: Clinical presentation and diagnosis of the nonpregnant adult with suspected deep vein thrombosis of the lower extremity", url: "https://www.uptodate.com/contents/clinical-presentation-and-diagnosis-of-the-nonpregnant-adult-with-suspected-deep-vein-thrombosis-of-the-lower-extremity" }
    ]
  },
  nihss: {
    oqueE: "A Escala do NIH (National Institutes of Health Stroke Scale - NIHSS) é uma ferramenta de avaliação sistemática e quantitativa concebida para medir o défice neurológico provocado por um Acidente Vascular Cerebral (AVC) isquémico agudo.",
    historico: "Criada em 1989 por um painel de neurologistas dos EUA para uniformizar a avaliação nos ensaios clínicos do r-tPA (fármaco trombolítico). Tornou-se a linguagem universal entre os serviços de urgência e as unidades de AVC.",
    cuidados: "A escala avalia o que o doente *faz*, e não o que o examinador *acha que ele seria capaz de fazer*. A pontuação deve ser registada rapidamente. Em caso de assimetria prévia (ex: amputação, cegueira antiga), essa limitação deve ser ignorada ou pontuada de forma adaptada conforme o protocolo.",
    indicacao: "Fundamental como avaliação basilar para determinar a elegibilidade do doente para terapêutica de reperfusão (trombólise endovenosa e/ou trombectomia mecânica) e para monitorizar o agravamento ou melhoria clínica subsequente.",
    interpretacao: "A pontuação varia de 0 (exame normal) a 42 (défice devastador). Geralmente, considera-se: 1-4 (AVC minor), 5-15 (AVC moderado), 16-20 (AVC moderado a grave) e >20 (AVC grave). Historicamente, doentes com NIHSS > 4 e < 25 são os candidatos clássicos à trombólise.",
    limitacoes: "A escala tem um viés anatómico forte: sobrevaloriza os AVCs da circulação anterior (território carotídeo, onde há afasia ou hemiparesia) e subvaloriza perigosamente os AVCs da circulação posterior (território vertebrobasilar), podendo o doente ter um AVC grave no tronco cerebral com um NIHSS baixo (ex: isoladamente vertigem, ataxia e alterações de pares cranianos).",
    referencias: [
      { titulo: "AHA/ASA Guidelines for the Early Management of Patients With Acute Ischemic Stroke", url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000211" },
      { titulo: "NIH Stroke Scale Training (NINDS)", url: "https://www.ninds.nih.gov/" }
    ]
  },
  meem: {
    oqueE: "O Mini-Exame do Estado Mental (MEEM ou Folstein) é o teste de rastreio cognitivo à beira-leito mais utilizado mundialmente para avaliar rapidamente várias dimensões da cognição: orientação, retenção, atenção, cálculo, evocação e linguagem.",
    historico: "Publicado em 1975 por Marshal Folstein, Susan Folstein e Paul McHugh como um método prático para graduar o estado cognitivo em doentes psiquiátricos e neurológicos.",
    cuidados: "O teste deve ser realizado num ambiente tranquilo. É mandatório garantir que o doente não tem défices sensoriais graves (como surdez ou cegueira) que inviabilizem a prestação, devendo usar os seus óculos e/ou aparelhos auditivos durante o exame.",
    indicacao: "Rastreio e seguimento longitudinal de síndromes demenciais (como Doença de Alzheimer) e avaliação de síndromes confusionais agudas (delirium) nas enfermarias.",
    interpretacao: "A pontuação máxima é 30. A interpretação *exige* ajuste à escolaridade do doente para evitar falsos positivos na iliteracia. Pontos de corte comuns: analfabetos (≤ 19 pontos), 1 a 3 anos de escolaridade (≤ 23), 4 a 7 anos (≤ 24) e > 8 anos de escolaridade (≤ 28).",
    limitacoes: "Possui 'efeito teto' (doentes com elevado nível intelectual podem ter demência em fase inicial e pontuar 30/30) e 'efeito chão' (analfabetos têm enorme dificuldade em tarefas visuoespaciais e de cálculo). Tem baixa sensibilidade para défices cognitivos ligeiros (MCI) e para demências de perfil frontotemporal (disfunção executiva).",
    referencias: [
      { titulo: "Folstein MF et al. 'Mini-mental state'. A practical method for grading the cognitive state of patients for the clinician", url: "https://pubmed.ncbi.nlm.nih.gov/1202204/" }
    ]
  },
  phq9: {
    oqueE: "O Patient Health Questionnaire-9 (PHQ-9) é um instrumento psicométrico rápido, composto por 9 itens que traduzem diretamente os critérios diagnósticos do DSM-IV/V para um Episódio Depressivo Major.",
    historico: "Desenvolvido e validado em 2001 pelo Dr. Kurt Kroenke e colegas, tornou-se o padrão de ouro nos Cuidados de Saúde Primários por ser autoaplicável e altamente sensível.",
    cuidados: "A Pergunta 9 avalia ideação suicida ou pensamentos de morte. Qualquer pontuação > 0 nesta pergunta exige uma avaliação clínica imediata e ativa do risco de suicídio (planeamento, ideação estruturada, historial prévio), independentemente do score total.",
    indicacao: "Triagem ativa de sintomas depressivos, auxílio no diagnóstico de depressão e, fundamentalmente, na quantificação objetiva da resposta à terapêutica antidepressiva ao longo do tempo.",
    interpretacao: "Os escores variam de 0 a 27: 0-4 (sintomas mínimos/ausentes), 5-9 (sintomas leves), 10-14 (moderados), 15-19 (moderadamente graves) e 20-27 (graves). Um escore ≥ 10 possui uma sensibilidade e especificidade de cerca de 88% para depressão major.",
    limitacoes: "É uma ferramenta de *rastreio e severidade*, não de *diagnóstico isolado*. Um PHQ-9 alto não exclui luto normal, hipotiroidismo primário ou, perigosamente, a fase depressiva de uma Doença Bipolar (onde o uso inadvertido de antidepressivos isolados pode desencadear viragem maníaca).",
    referencias: [
      { titulo: "The PHQ-9: validity of a brief depression severity measure (Kroenke K et al.)", url: "https://pubmed.ncbi.nlm.nih.gov/11556941/" }
    ]
  },
  ig: {
    oqueE: "O cálculo da Idade Gestacional (IG) e da Data Provável do Parto (DPP) baseado na Data da Última Menstruação (DUM) assenta na Regra de Naegele, a fórmula obstétrica padrão para datar clinicamente uma gravidez.",
    historico: "A Regra de Naegele foi formulada pelo obstetra alemão Franz Karl Naegele em 1812. A regra soma 7 dias ao primeiro dia da DUM e subtrai 3 meses (ou soma 9 meses) para prever as 40 semanas exatas de gestação.",
    cuidados: "A premissa matemática assume estritamente um ciclo menstrual regular de 28 dias, com a ovulação e a fertilização a ocorrerem exatamente no 14º dia. Se o ciclo da mulher for de 35 dias, a ovulação ocorre mais tarde e a DPP real será posterior à calculada pela regra clássica.",
    indicacao: "Definição inicial e primária da cronologia da gravidez na primeira consulta de Saúde Materna.",
    interpretacao: "O resultado é sempre expresso em Semanas + Dias (ex: 12s e 3d). Uma gravidez de termo situa-se entre as 37 semanas e 0 dias e as 41 semanas e 6 dias.",
    limitacoes: "A memória da mulher é frequentemente falível, havendo relatos incorretos de perdas de sangue (implantação) confundidas com a menstruação, uso recente de contracetivos hormonais ou amamentação. A ecografia (USG) do 1º trimestre supera clinicamente este cálculo.",
    referencias: [
      { titulo: "ACOG Committee Opinion: Method for Estimating Due Date", url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/method-for-estimating-due-date" }
    ]
  },
  dum_usg: {
    oqueE: "O recálculo da Idade Gestacional por Ecografia (USG) permite criar uma 'DUM Corrigida' ou 'DUM Ecográfica' utilizando a medição direta da biometria fetal, contornando falhas de memória ou ciclos menstruais irregulares.",
    historico: "Com o advento da ultrassonografia obstétrica na década de 1970, descobriu-se que a medição do Comprimento Crânio-Caudal (CCC) no primeiro trimestre tem uma variação biológica mínima entre os embriões, tornando-se o preditor de idade mais exato da medicina fetal.",
    cuidados: "A precisão da ecografia para datar a gravidez cai drasticamente com o avançar do tempo. O USG realizado entre a 8ª e a 13ª semana e 6 dias (via medida do CCC) possui margem de erro de apenas ± 5 a 7 dias.",
    indicacao: "Mandatória quando a discrepância entre a DUM referida e a idade ecográfica no 1º trimestre é superior a 7 dias, ou quando a mulher tem total desconhecimento ou irregularidade menstrual prévia.",
    interpretacao: "Uma vez que a gravidez seja 'redatada' pelo USG de 1º trimestre, a nova DPP (Data Provável do Parto) e a IG gerada por ela tornam-se oficiais e não devem ser alteradas por ecografias realizadas nos 2º ou 3º trimestres.",
    limitacoes: "Ecografias realizadas no final do 2º ou no 3º trimestre têm margens de erro de ± 2 a 3 semanas, pois nessa fase o tamanho fetal reflete tendências de crescimento (restrição vs. macrossomia) e não propriamente a idade gestacional real.",
    referencias: [
      { titulo: "ISUOG Practice Guidelines: performance of first-trimester fetal ultrasound scan", url: "https://www.isuog.org/clinical-resources/practice-guidelines.html" }
    ]
  },
  kupperman: {
    oqueE: "O Índice Menopausal de Kupperman-Blatt é uma escala ginecológica clássica concebida para estratificar a incidência e quantificar a intensidade dos sintomas neurovegetativos, físicos e psicológicos durante o climatério e menopausa.",
    historico: "Foi desenhado e publicado em 1953 pelos investigadores Herbert Kupperman e Meyer Blatt. Apesar da sua idade, a sua facilidade de aplicação mantém-no ativo nos consultórios mundiais.",
    cuidados: "A avaliação é puramente subjetiva. Note-se que o peso atribuído a cada sintoma é variável: os fogachos (ondas de calor) são o fator mais debilitante reportado pelas mulheres, pelo que a sua pontuação é multiplicada por um fator corretivo alto (x4).",
    indicacao: "Orientar o ginecologista na decisão e justificação do início da Terapêutica Hormonal de Substituição (THS) e para avaliar a eficácia do tratamento farmacológico após algumas semanas.",
    interpretacao: "Classificação da sintomatologia: ≤ 14 pontos (Leve), 15 a 20 pontos (Moderada), 21 a 35 (Intensa), e > 35 pontos (Grave). Geralmente, sintomas moderados a severos justificam forte consideração de intervenção medicamentosa.",
    limitacoes: "A escala envelheceu relativamente mal em alguns aspetos: não inclui perguntas diretas sobre a Síndrome Geniturinária da Menopausa (como atrofia, secura vaginal e dispareunia severa), que hoje são indicações primárias de tratamento tópico com estrogénios.",
    referencias: [
      { titulo: "Kupperman HS et al. Contemporary therapy of the menopausal syndrome (JAMA, 1953)", url: "https://pubmed.ncbi.nlm.nih.gov/13034471/" }
    ]
  },
  jones: {
    oqueE: "Os Critérios de Jones são a base clínica e laboratorial mandatória para diagnosticar um surto de Febre Reumática Aguda (FRA), uma complicação imunológica tardia da faringite não tratada por Estreptococo do Grupo A.",
    historico: "Introduzidos pelo cardiologista T. Duckett Jones em 1944. A American Heart Association (AHA) realizou a sua atualização mor em 2015, estratificando os critérios pela primeira vez conforme o perfil de risco da população (endémica vs. baixo risco).",
    cuidados: "A evidência laboratorial de infeção estreptocócica prévia (ASLO ou anti-DNase B elevados, cultura positiva ou teste rápido positivo) é **absolutamente obrigatória** para aplicar os critérios, exceto em dois raros cenários: coreia de Sydenham isolada ou apresentação tardia de cardite reumática insidiosa.",
    indicacao: "Garantir um diagnóstico robusto da FRA, prevenindo as devastadoras sequelas de cardiopatia reumática crónica (como estenose mitral fibrótica), estabelecendo a necessidade de profilaxia secundária rigorosa com Penicilina G Benzatínica de longa duração.",
    interpretacao: "Um diagnóstico provável de FRA inicial exige a evidência de infeção + 2 Critérios Maiores (ex: Cardite + Coreia) OU 1 Critério Maior + 2 Menores (ex: Poliartrite + Febre + PCR elevada).",
    limitacoes: "A ecocardiografia subclínica (cardite detetada apenas no Eco sem sopro audível) só foi formalmente validada como critério maior na revisão de 2015. Confundir artrite reativa pós-estreptocócica com poliartrite reumática exige acompanhamento apertado.",
    referencias: [
      { titulo: "Revision of the Jones Criteria for the Diagnosis of Acute Rheumatic Fever in the Era of Doppler Echocardiography (AHA, 2015)", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000205" }
    ]
  },
  apgar: {
    oqueE: "O Índice de Apgar é a ferramenta de avaliação quantitativa padronizada que reporta o estado clínico e a vitalidade do recém-nascido e a sua resposta imediata ao meio extrauterino e manobras de ressuscitação.",
    historico: "Desenhado em 1952 pela Dra. Virginia Apgar (uma pioneira da anestesiologia e neonatologia norte-americana), sendo também usado como mnemónica: Appearance (Aparência/Cor), Pulse (Frequência Cardíaca), Grimace (Irritabilidade reflexa), Activity (Tónus) e Respiration (Respiração).",
    cuidados: "O Apgar **nunca** deve ser usado para decidir quando iniciar a reanimação neonatal. A reanimação é ditada logo nos primeiros 30 segundos com base na respiração, tónus e FC. O Apgar quantifica *como o bebé responde* à intervenção.",
    indicacao: "Registo obrigatório e legal em todos os partos mundiais no 1º e 5º minuto de vida. Se o Apgar do 5º minuto for inferior a 7, as avaliações devem repetir-se a cada 5 minutos até estabilização.",
    interpretacao: "7 a 10: Boa vitalidade / adaptação fisiológica. 4 a 6: Asfixia ou depressão moderada (necessidade de suporte). 0 a 3: Asfixia perinatal severa (requer reanimação cardiopulmonar pediátrica avançada).",
    limitacoes: "O critério da cor da pele ('Appearance') é falível e subestima a vitalidade em recém-nascidos de etnia negra ou asiática. Recém-nascidos extremamente prematuros perdem pontos unicamente pela imaturidade fisiológica e hipotonia inerente à prematuridade, e não necessariamente por asfixia.",
    referencias: [
      { titulo: "The Apgar Score (Pediatrics, AAP/ACOG Policy Statement)", url: "https://publications.aap.org/pediatrics/article/136/4/819/73979/The-Apgar-Score" }
    ]
  },
  ldl: {
    oqueE: "A Equação de Friedewald é uma fórmula matemática classicamente utilizada para estimar a concentração do Colesterol LDL (Lipoproteína de Baixa Densidade) no plasma sanguíneo a partir dos valores medidos de Colesterol Total, HDL e Triglicerídeos.",
    historico: "Publicada em 1972 pelos investigadores William Friedewald, Robert Levy e Donald Fredrickson. Revolucionou a prática clínica ao evitar a necessidade de ultracentrifugação dispendiosa para medir o LDL diretamente em todos os pacientes.",
    cuidados: "A fórmula assume que a proporção de Triglicerídeos para o colesterol VLDL é constante (divisão por 5). Essa premissa matemática falha completamente se os Triglicerídeos estiverem > 400 mg/dL. Nesse caso, a fórmula fica inviabilizada e o LDL deve ser dosado diretamente pelo laboratório.",
    indicacao: "Avaliação rotineira do perfil lipídico em check-ups de rotina, estratificação de risco cardiovascular primário/secundário e monitoramento da resposta à terapia hipolipemiante (como uso de estatinas).",
    interpretacao: "O valor alvo do LDL não é universal; depende do risco do paciente: < 130 mg/dL para risco baixo; < 100 mg/dL para risco intermediário; < 70 mg/dL para alto risco (ex: diabéticos); e < 50 mg/dL para risco muito alto (ex: IAM prévio).",
    limitacoes: "Além da falha com triglicerídeos elevados (> 400), a equação tende a subestimar grosseiramente o LDL verdadeiro quando os níveis de triglicerídeos estão entre 150-399 mg/dL ou quando o LDL real do paciente já é muito baixo (< 70 mg/dL).",
    referencias: [
      { titulo: "Estimation of the concentration of low-density lipoprotein cholesterol in plasma (Friedewald WT et al., 1972)", url: "https://pubmed.ncbi.nlm.nih.gov/4337382/" },
      { titulo: "Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose (SBC)", url: "https://www.portal.cardiol.br/diretrizes" }
    ]
  },
  gad7: {
    oqueE: "O Generalized Anxiety Disorder-7 (GAD-7) é um questionário psicométrico breve de autorrelato utilizado para o rastreio e medição da gravidade do Transtorno de Ansiedade Generalizada na prática clínica clínica geral.",
    historico: "Criado e validado em 2006 pelo Dr. Robert Spitzer e Dr. Kurt Kroenke (os mesmos criadores do PHQ-9). Foi desenhado para ser uma ferramenta paralela e complementar ao rastreio de depressão.",
    cuidados: "Como é baseado no autorrelato das últimas 2 semanas, o estado emocional agudo do dia da consulta (ex: paciente que acabou de sofrer um estresse no trânsito) pode inflar artificialmente o escore. Deve ser avaliado no contexto basal do indivíduo.",
    indicacao: "Instrumento de primeira linha nos Cuidados de Saúde Primários para identificar pacientes com possível Transtorno de Ansiedade Generalizada, bem como avaliar a eficácia do tratamento psicofarmacológico/psicoterápico em consultas de retorno.",
    interpretacao: "Os escores variam de 0 a 21: 0-4 (ansiedade mínima), 5-9 (ansiedade leve), 10-14 (ansiedade moderada) e 15-21 (ansiedade grave). Um corte ≥ 10 possui uma sensibilidade de 89% e especificidade de 82% para TAG.",
    limitacoes: "Sendo um teste de triagem, um escore elevado não firma o diagnóstico psiquiátrico de TAG isoladamente. Condições médicas (hipertireoidismo, feocromocitoma, arritmias) e abuso de substâncias (excesso de cafeína, abstinência alcoólica) devem ser descartados primeiro.",
    referencias: [
      { titulo: "A brief measure for assessing generalized anxiety disorder: the GAD-7 (Spitzer RL et al., 2006)", url: "https://pubmed.ncbi.nlm.nih.gov/16717171/" }
    ]
  },
  prevent: {
    oqueE: "As Equações PREVENT™ (Predicting Risk of cardiovascular disease EVENTs) formam a mais recente e sofisticada calculadora de risco cardiovascular da American Heart Association (AHA), projetada para estimar o risco de IAM, AVC e insuficiência cardíaca em 10 e 30 anos.",
    historico: "Lançada no final de 2023 pela AHA, esta ferramenta substituiu oficialmente a antiga Pooled Cohort Equations (ASCVD Risk Estimator de 2013). Foi desenhada a partir de dados de mais de 3 milhões de pacientes.",
    cuidados: "O PREVENT™ foi a primeira calculadora de grande porte da AHA a remover a 'raça/etnia' como variável de cálculo, reconhecendo que a raça é um construto social e não biológico, evitando vieses e atrasos no tratamento de populações minoritárias.",
    indicacao: "Decidir sobre o início de tratamento com estatinas na prevenção primária, metas pressóricas e controle rigoroso de peso/diabetes em adultos entre 30 e 79 anos livres de doença cardiovascular aterosclerótica prévia.",
    interpretacao: "A ferramenta consolida o risco do paciente. A principal inovação é que, além do risco clássico em 10 anos para pacientes mais velhos, ela estima o risco em 30 anos (longo prazo) para pacientes mais jovens (30-59 anos), encorajando mudanças precoces de estilo de vida.",
    limitacoes: "Por ser muito recente e envolver modelos matemáticos complexos (incluindo variáveis como eGFR, função renal e novos dados epidemiológicos), recomenda-se estritamente o uso da interface web oficial para evitar falhas em algoritmos simplificados.",
    referencias: [
      { titulo: "AHA PREVENT™ Risk Calculator Official Statement (2023)", url: "https://professional.heart.org/en/guidelines-and-statements/prevent-calculator" }
    ]
  },
  hasbled: {
    oqueE: "O escore HAS-BLED é uma ferramenta clínica validada que estima o risco de sangramento maior em um ano para pacientes com Fibrilação Atrial (FA) que têm indicação de iniciar anticoagulação oral.",
    historico: "Desenvolvido em 2010 a partir dos dados do registo europeu Euro Heart Survey on Atrial Fibrillation. Surgiu para complementar o CHADS2/CHA2DS2-VASc, pesando o benefício de prevenir um AVC contra o risco de causar uma hemorragia.",
    cuidados: "A letra 'L' (INR Lábil) só se aplica se o paciente estiver em uso de antagonistas da vitamina K (Varfarina / Marevan) e não conseguir manter-se na faixa terapêutica por pelo menos 60% do tempo. Se o paciente usa DOAC (ex: Rivaroxabana) ou ainda não usa anticoagulante, este ponto é zero.",
    indicacao: "Avaliar antes do início de anticoagulação na Fibrilação Atrial. O objetivo NÃO é contraindicar o anticoagulante, mas sim identificar ativamente e corrigir os fatores de risco modificáveis para hemorragia (ex: tratar a hipertensão, suspender AINEs e reduzir o álcool).",
    interpretacao: "Pontuação ≥ 3 indica um ALTO risco de sangramento (> 3.7% ao ano). Tais pacientes demandam acompanhamento mais frequente (consultas regulares, revisão rigorosa de dosagem de medicamentos e verificação de função renal/hepática).",
    limitacoes: "O escore é um guia, mas o risco de sangramento (mesmo se HAS-BLED > 3) na imensa maioria das vezes é suplantado pelo benefício de evitar um AVC catastrófico. O erro clínico mais comum é deixar de anticoagular um idoso apenas por medo do HAS-BLED elevado.",
    referencias: [
      { titulo: "A novel user-friendly score (HAS-BLED) to assess 1-year risk of major bleeding in patients with atrial fibrillation (Pisters R et al.)", url: "https://pubmed.ncbi.nlm.nih.gov/20299623/" },
      { titulo: "SBC: Diretriz Brasileira de Fibrilação Atrial", url: "https://www.portal.cardiol.br/diretrizes" }
    ]
  },
  opas: {
    oqueE: "O sistema de risco OPAS/OMS (HEARTS) utiliza tabelas específicas por macrorregiões globais (ex: Américas) para estimar a probabilidade de um indivíduo sofrer um evento cardiovascular fatal ou não fatal (IAM ou AVC) nos próximos 10 anos.",
    historico: "Atualizadas em 2019 pela Organização Mundial da Saúde (OMS) e altamente impulsionadas pela OPAS nas Américas através da Iniciativa HEARTS, para servir como padrão ouro em locais com poucos recursos onde calculadoras que exigem muitos exames laboratoriais falham.",
    cuidados: "As tabelas devem ser escolhidas corretamente de acordo com o país. O Brasil enquadra-se na Região das Américas - Risco B. Os pacientes avaliados devem ter entre 40 e 79 anos.",
    indicacao: "Principal protocolo de estratificação em Unidades Básicas de Saúde (Estratégia de Saúde da Família) para otimizar os escassos recursos do SUS, priorizando o tratamento agressivo com anti-hipertensivos e estatinas para os grupos de maior risco.",
    interpretacao: "O risco divide-se em categorias de cores nas tabelas clássicas: Verde (<10%, Baixo), Amarelo (10-<20%, Moderado), Laranja (20-<30%, Alto) e Vermelho (≥30%, Muito Alto). Risco a partir de 20% já possui indicação forte de intervenção medicamentosa multifatorial.",
    limitacoes: "Como divide os pacientes em 'caixas' de décadas de idade e níveis de pressão estanques, pode causar saltos de risco abruptos. Pacientes com níveis extremos isolados de Colesterol (>310 mg/dL) ou Pressão Arterial (≥ 160/100 mmHg) requerem intervenção clínica direta, contornando a tabela.",
    referencias: [
      { titulo: "Ferramenta de Risco Cardiovascular da OMS - Iniciativa HEARTS (OPAS)", url: "https://www.paho.org/pt/hearts-nas-americas/ferramenta-risco-cardiovascular" }
    ]
  },
  ckdepi: {
    oqueE: "A equação CKD-EPI (Chronic Kidney Disease Epidemiology Collaboration) de 2021 é o atual padrão-ouro laboratorial para estimar a Taxa de Filtração Glomerular (TFG) baseada na creatinina, idade e sexo.",
    historico: "Desenvolvida em 2009 para corrigir as falhas da fórmula MDRD (que subestimava a função renal em pacientes com TFG > 60). Em 2021, o consórcio NKF-ASN revisou a fórmula mundialmente para remover o multiplicador de raça negra, promovendo equidade em saúde.",
    cuidados: "A creatinina reflete tardiamente as lesões renais. Em casos de Lesão Renal Aguda (LRA) com a creatinina a subir ou a descer diariamente, a CKD-EPI (ou qualquer fórmula estimativa) é inútil, pois pressupõe estado de equilíbrio crónico.",
    indicacao: "Estadiamento oficial da Doença Renal Crônica (DRC) e acompanhamento longitudinal da função renal em ambiente ambulatorial para todos os adultos.",
    interpretacao: "Resultados são dados em mL/min/1.73m² (já normalizados para a superfície corporal média). DRC é diagnosticada clinicamente se TFG < 60 mL/min for sustentada por mais de 3 meses. Divide a DRC nas fases G1 (Normal/Alta, ≥90) a G5 (Falência Renal, <15).",
    limitacoes: "Continua a basear-se na creatinina, sofrendo viés em fisiculturistas (falsamente baixa TFG pela alta massa muscular) e amputados graves/sarcopénicos (falsamente alta TFG). Para estes cenários de exceção extrema, sugere-se a recolha de urina de 24h ou uso da Cistatina C.",
    referencias: [
      { titulo: "New Creatinine- and Cystatin C-Based Equations to Estimate GFR without Race (Inker LA et al., NEJM 2021)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2102953" },
      { titulo: "KDIGO Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease", url: "https://kdigo.org/" }
    ]
  },
  fena: {
    oqueE: "A Fração de Excreção de Sódio (FENa) é a percentagem do sódio filtrado pelos glomérulos renais que é efetivamente excretada na urina. Avalia a capacidade dos túbulos renais em reabsorver o sódio.",
    historico: "Estabelecida na nefrologia clínica na década de 1970 como um marcador fisiológico brilhante para diferenciar as duas principais causas de oligúria no hospital: hipovolemia (pré-renal) versus dano tubular intrínseco.",
    cuidados: "É um cálculo dependente de 4 variáveis colhidas simultaneamente: Sódio urinário, Creatinina urinária, Sódio plasmático e Creatinina plasmática. O uso prévio de diuréticos destrói a utilidade da FENa, pois forçam o sódio para a urina mesmo em estados hipovolémicos.",
    indicacao: "Diagnóstico diferencial etiológico da Lesão Renal Aguda (LRA) oligúrica na enfermaria ou Unidade de Terapia Intensiva.",
    interpretacao: "FENa < 1% sugere estado pré-renal (os rins estão intactos mas com pouco fluxo, logo, reabsorvem desesperadamente todo o sódio e água para tentar manter a pressão). FENa > 2% sugere Necrose Tubular Aguda (NTA - as células tubulares estão mortas e não conseguem reabsorver o sódio, deixando-o 'vazar' para a urina).",
    limitacoes: "Inútil se o paciente já estiver em uso de furosemida. Falsamente baixa (mesmo com NTA) em pacientes com insuficiência cardíaca congestiva crônica grave, cirrose ou nefropatia por contraste. Nesses casos, usa-se a Fração de Excreção de Ureia (FEUreia).",
    referencias: [
      { titulo: "UpToDate: Fractional excretion of sodium, urea, and other molecules in acute kidney injury", url: "https://www.uptodate.com/contents/fractional-excretion-of-sodium-urea-and-other-molecules-in-acute-kidney-injury" }
    ]
  },
  qsofa: {
    oqueE: "O quick-SOFA (qSOFA) é um critério de rastreio à beira-leito desenhado para identificar pacientes com suspeita de infecção que têm um risco elevado de evolução catastrófica (tempo prolongado em UTI ou óbito).",
    historico: "Apresentado ao mundo em 2016 com a publicação do Sepsis-3 (The Third International Consensus Definitions for Sepsis). Substituiu no papel da emergência os antigos critérios sistémicos de SRIS.",
    cuidados: "Um erro médico brutal é tratar o qSOFA como uma ferramenta de *diagnóstico* de Sepse. Ele é uma ferramenta de preditora de *prognóstico ruim*. Um paciente pode ter Sepse e ter qSOFA = 0. Não deve atrasar o início de antibióticos num doente inequivocamente infetado.",
    indicacao: "Triagem hiper-rápida (não precisa de nenhum exame laboratorial) nas enfermarias de medicina interna, lares de idosos ou triagem do Pronto-Socorro para accionar a 'Via Verde' de reanimação rápida.",
    interpretacao: "Soma-se 1 ponto para cada: Pressão Sistólica ≤ 100, Frequência Respiratória ≥ 22, Alteração Mental (Glasgow < 15). Uma pontuação ≥ 2 indica alto risco de desfechos graves. O paciente exige atenção máxima imediata e cálculo do escore SOFA completo.",
    limitacoes: "Sofre críticas pesadas pelo seu viés de baixa sensibilidade clínica: quando o paciente altera o estado mental ou choca (qSOFA ≥ 2), ele já está numa fase tardia e óbvia de sepse. Atualmente, os hospitais estão a regressar à monitorização cruzada com MEWS (Modified Early Warning Score).",
    referencias: [
      { titulo: "The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)", url: "https://jamanetwork.com/journals/jama/fullarticle/2492881" },
      { titulo: "Surviving Sepsis Campaign Guidelines", url: "https://www.sccm.org/SurvivingSepsisCampaign/Guidelines" }
    ]
  },
  alvarado: {
    oqueE: "O Escore de Alvarado é uma pontuação clínica e laboratorial amplamente utilizada na triagem do abdome agudo inflamatório para estratificar a probabilidade de um diagnóstico de Apendicite Aguda.",
    historico: "Descrito em 1986 pelo Dr. Alfredo Alvarado baseado num estudo retrospetivo de pacientes com suspeita de apendicite. Surgiu numa era antes da tomografia computadorizada ser o padrão ouro, visando reduzir as apendicectomias 'brancas' (desnecessárias).",
    cuidados: "O clássico 'MANTRELS' mnemónico: Migração da dor, Anorexia, Náusea, Tenderness (defesa/dor no QID), Rebound (descompressão brusca), Elevada temperatura, Leucocitose e Shift para a esquerda (desvio). O valor da defesa e da leucocitose têm um peso redobrado (2 pontos cada).",
    indicacao: "Triagem nos Serviços de Urgência de pacientes que se apresentam com dor na fossa ilíaca direita para guiar o próximo passo (alta com reavaliação clínica vs ecografia/TC vs bloco operatório).",
    interpretacao: "Escore 1-3: probabilidade remota de apendicite (investigar outras causas). Escore 4-6: risco moderado (exige exame de imagem complementar, como TC ou USG). Escore 7-10: alta probabilidade e indicação tradicional de avaliação do cirurgião geral para cirurgia direta em cenários clássicos.",
    limitacoes: "Possui melhor performance em homens do que em mulheres (estas têm sobreposição sintomática com condições ginecológicas, como rotura de folículo, cisto ovárico torcido ou Doença Inflamatória Pélvica). Hoje em dia, mesmo com escore 9, a TC é frequentemente realizada rotineiramente por protocolos defensivos.",
    referencias: [
      { titulo: "A practical score for the early diagnosis of acute appendicitis (Alvarado A, 1986)", url: "https://pubmed.ncbi.nlm.nih.gov/3962060/" }
    ]
  },
  metavir: {
    oqueE: "O Escore METAVIR é um sistema de estadiamento e graduação histológica internacionalmente padronizado, utilizado para quantificar o grau de inflamação e o estágio de fibrose numa biópsia hepática de pacientes com hepatite crónica.",
    historico: "Criado em 1994 pelo grupo cooperativo francês METAVIR (Meta-Analysis of Histological Data in Viral Hepatitis), inicialmente para a Hepatite C, mas rapidamente expandido para outras hepatopatias crónicas devido à sua simplicidade face ao antigo escore de Knodell.",
    cuidados: "Sendo um escore histológico, exige a realização de biópsia hepática percutânea ou transjugular. O fragmento biopsiado deve ter tamanho adequado (habitualmente > 15 mm e com > 10 espaços porta) para evitar viés de amostragem.",
    indicacao: "Definir o prognóstico da doença hepática, ditar a necessidade de iniciar terapêutica antiviral ou antifibrótica e estabelecer a calendarização do rastreio de Hepatocarcinoma (indicado para estágios F3 e F4).",
    interpretacao: "Avalia 2 parâmetros: A (Atividade necroinflamatória, de A0 a A3) e F (Fibrose, de F0 a F4). Um doente F4 tem cirrose estabelecida. Doentes com F ≥ 2 são considerados com 'fibrose significativa' e habitualmente têm indicação formal de tratamento para evitar progressão.",
    limitacoes: "É um exame invasivo com riscos hemorrágicos. Tem vindo a ser progressivamente substituído ou complementado por métodos não-invasivos (como a Elastografia Hepática / FibroScan® e escores séricos como APRI e FIB-4).",
    referencias: [
      { titulo: "Intraobserver and interobserver variations in liver biopsy interpretation in patients with chronic hepatitis C (Bedossa P et al.)", url: "https://pubmed.ncbi.nlm.nih.gov/8051622/" }
    ]
  },
  abcd2: {
    oqueE: "O Escore ABCD² é uma ferramenta preditiva clínica desenhada para estratificar precocemente o risco de um doente sofrer um Acidente Vascular Cerebral (AVC) isquémico definitivo nos 2, 7 e 90 dias após um Ataque Isquémico Transitório (AIT).",
    historico: "Publicado no The Lancet em 2007 por Johnston et al., resultou da unificação e otimização de dois escores anteriores (o ABCD score e o California score), padronizando a triagem nos serviços de urgência.",
    cuidados: "O diagnóstico prévio de AIT deve ser fiável. Se os sintomas neurológicos forem de origem não vascular (ex: aura de enxaqueca, paralisia de Todd pós-crise epilética ou hipoglicemia), o escore não tem utilidade preditiva e causará alarmismo infundado.",
    indicacao: "Identificar quais doentes com AIT podem ter alta com segurança e acompanhamento ambulatorial rápido vs. aqueles que requerem admissão hospitalar urgente para investigação etiológica e telemetria (monitorização de arritmias).",
    interpretacao: "Pontuação de 0 a 7. Escore 0-3: Risco Baixo (risco de AVC a 2 dias ~1.0%). Escore 4-5: Risco Moderado (risco ~4.1%). Escore 6-7: Risco Alto (risco > 8.1%). Doentes de alto risco têm frequentemente indicação de internamento ou avaliação em Clínica de AIT num prazo < 24h.",
    limitacoes: "Apesar da sua popularidade clássica, as diretrizes mais recentes têm desencorajado o uso exclusivo do ABCD² para dar alta, pois ele falha ao não incorporar a ressonância magnética (RM) e a ultrassonografia carotídea nas suas variáveis, que são os maiores preditores de reincidência.",
    referencias: [
      { titulo: "Validation and refinement of scores to predict very early stroke risk after transient ischaemic attack (Lancet, 2007)", url: "https://pubmed.ncbi.nlm.nih.gov/17258668/" },
      { titulo: "AHA/ASA Guidelines for the Prevention of Stroke in Patients with Stroke and Transient Ischemic Attack", url: "https://www.strokeassociation.org/en/professionals" }
    ]
  },
  aspects: {
    oqueE: "O ASPECTS (Alberta Stroke Program Early CT Score) é um sistema topográfico de pontuação de 10 pontos que quantifica a extensão das alterações isquémicas precoces na Tomografia Computadorizada (TC) de crânio sem contraste de doentes com AVC da artéria cerebral média (ACM).",
    historico: "Criado no ano 2000 por investigadores do programa de AVC da Universidade de Alberta, no Canadá, para providenciar um método simples, fiável e reprodutível na era das terapêuticas de reperfusão.",
    cuidados: "Avalia-se subtraindo 1 ponto da base inicial de 10 para cada região da ACM com sinais de isquemia aguda (hipodensidade focal, apagamento de sulcos, perda da diferenciação cortiço-subcortical ou sinal da fita insular). Deve ser lido em duas secções axiais: ao nível dos gânglios da base e rostral a estes.",
    indicacao: "Seleção rigorosa de candidatos para trombólise endovenosa e trombectomia mecânica na janela aguda do AVC isquémico da circulação anterior.",
    interpretacao: "10 pontos = TC perfeitamente normal. Cada área afetada reduz um ponto. ASPECTS > 7 indica áreas isquémicas pequenas a moderadas (bons candidatos a trombectomia). ASPECTS ≤ 7 (ou ≤ 5 nalguns protocolos) sugere uma isquemia extensa já estabelecida, onde o risco de transformação hemorrágica pós-trombectomia pode superar o benefício.",
    limitacoes: "Focado estritamente no território da Artéria Cerebral Média. Inútil para avaliação de enfartes de circulação posterior (cerebelo, tronco), onde se deve utilizar o escore pc-ASPECTS (posterior circulation ASPECTS).",
    referencias: [
      { titulo: "Use of the Alberta Stroke Program Early CT Score (ASPECTS) for assessing CT scans in patients with acute stroke", url: "https://pubmed.ncbi.nlm.nih.gov/10841327/" }
    ]
  },
  atlanta: {
    oqueE: "A Classificação Revisada de Atlanta é o sistema de referência global que estratifica a gravidade dos episódios de pancreatite aguda, estabelecendo critérios temporais rigorosos para as complicações locais e sistémicas.",
    historico: "A classificação original de Atlanta (1992) era complexa e gerava confusão na literatura médica. Foi severamente revista num consenso global publicado em 2012 na revista 'Gut', clarificando as definições de falência de órgãos e de coleções pancreáticas.",
    cuidados: "A falência de órgãos é estritamente definida pelo Escore de Marshall modificado para os sistemas cardiovascular, renal e respiratório. Coleções fluidas (< 4 semanas) não devem ser chamadas de pseudocistos (> 4 semanas com parede encapsulada).",
    indicacao: "Classificar a evolução do doente internado nas primeiras semanas de doença, guiar a necessidade de intervenções invasivas (como drenagens) e admissão em Unidade de Cuidados Intensivos (UCI).",
    interpretacao: "Leve: sem complicações locais/sistémicas e sem falência de órgãos (alta em poucos dias). Moderadamente Grave: complicações locais presentes OU falência de órgãos transitória (que resolve em < 48h). Grave: falência de órgãos persistente (> 48h), com uma mortalidade que pode atingir 30-50% se infetada.",
    limitacoes: "A gravidade final muitas vezes só pode ser classificada de forma retrospetiva, uma vez que se exige um hiato de 48h para distinguir falência orgânica transitória de persistente.",
    referencias: [
      { titulo: "Classification of acute pancreatitis--2012: revision of the Atlanta classification and definitions by international consensus (Gut)", url: "https://pubmed.ncbi.nlm.nih.gov/23100216/" }
    ]
  },
  frax: {
    oqueE: "O Escore FRAX® (Fracture Risk Assessment Tool) é um algoritmo desenvolvido pela Organização Mundial de Saúde (OMS) para avaliar o risco de um doente sofrer fraturas osteoporóticas (maiores ou do colo do fémur) a 10 anos.",
    historico: "Lançado em 2008 pelo Centro Colaborador da OMS na Universidade de Sheffield. Integrou os fatores de risco clínicos validados com a Densidade Mineral Óssea (DMO), ajustando calculadoras com dados epidemiológicos específicos para quase cada país.",
    cuidados: "O FRAX pode ser calculado sem o valor do T-score da densitometria óssea (DMO), dependendo apenas de variáveis clínicas, o que é crucial em locais de poucos recursos. No entanto, se o T-score do colo do fémur for conhecido, adicioná-lo melhora massivamente a precisão do modelo.",
    indicacao: "Avaliação do risco na osteopenia e decisão de início de terapêutica antirreabsortiva (ex: bisfosfonatos como o Alendronato) em homens ≥ 50 anos ou mulheres na pós-menopausa.",
    interpretacao: "Habitualmente (nas guidelines clássicas dos EUA e NOF), recomenda-se o tratamento farmacológico se o risco de fratura do quadril a 10 anos for ≥ 3% ou se o risco de fratura osteoporótica maior for ≥ 20%.",
    limitacoes: "Subestima o risco de fratura em doentes com múltiplas quedas recentes e não tem em conta a gravidade das fraturas vertebrais prévias (peso igual seja fratura mínima ou colapso total da vértebra). Não está validado para indivíduos com < 40 anos.",
    referencias: [
      { titulo: "WHO Fracture Risk Assessment Tool (FRAX Official Website)", url: "https://frax.shef.ac.uk/FRAX/" },
      { titulo: "UpToDate: Osteoporotic fracture risk assessment", url: "https://www.uptodate.com/contents/osteoporotic-fracture-risk-assessment" }
    ]
  },
  ballard: {
    oqueE: "O Novo Escore de Ballard é um método sistematizado de avaliação física e neuromuscular que estima a idade gestacional (IG) do recém-nascido (RN) de forma clínica e imediata após o parto.",
    historico: "A Dra. Jeanne Ballard publicou a primeira versão em 1979 e a versão expandida ('New Ballard Score') em 1991, permitindo a avaliação de prematuros extremos a partir das 20 semanas de gestação.",
    cuidados: "A precisão depende fortemente do timing: a avaliação deve ser feita de preferência nas primeiras 12 a 24 horas de vida. Se o RN estiver sob sedação pesada, paralisado ou entubado, os critérios neuromusculares não poderão ser avaliados, forçando o uso exclusivo dos critérios físicos (menor precisão).",
    indicacao: "Datar a maturidade do recém-nascido nas maternidades nos casos de mães sem seguimento de gravidez ou quando há discrepância flagrante entre a Data da Última Menstruação (DUM), o Ultrassom e o exame ao nascimento.",
    interpretacao: "Gera um score que vai de -10 a 50. Este valor correlaciona-se numa tabela fixa com a idade gestacional (ex: -10 = 20 semanas, 0 = 24 semanas, 40 = 40 semanas de termo). Uma discrepância > 2 semanas com a ecografia precoce exige revisão minuciosa.",
    limitacoes: "Recém-nascidos doentes (com asfixia grave, sepsis ou anomalias neurológicas congénitas) apresentam hipotonia generalizada que enviesa negativamente o teste, subestimando falsamente a idade gestacional real.",
    referencias: [
      { titulo: "New Ballard Score, expanded to include extremely premature infants (J Pediatr, 1991)", url: "https://pubmed.ncbi.nlm.nih.gov/1880657/" }
    ]
  },
  ranson: {
    oqueE: "Os Critérios de Ranson consistem numa pontuação clínica histórica utilizada para prever a severidade e a taxa de mortalidade na Pancreatite Aguda, baseada na reavaliação de dados laboratoriais na admissão e passadas 48 horas.",
    historico: "Descritos pelo cirurgião John Ranson em 1974 e mais tarde validados (1979) para diferenciar entre etiologias biliares e não-biliares (álcool), sendo um dos mais antigos sistemas preditivos de gravidade gastrointestinal.",
    cuidados: "Para que o escore funcione na sua totalidade, exige-se rigor temporal absoluto. Os primeiros 5 critérios **têm** de ser avaliados nas primeiras horas da admissão e os restantes 6 rigorosamente às 48 horas. A falha num destes tempos anula a validade da fórmula.",
    indicacao: "Estratificação inicial em meio hospitalar de doentes com quadro de Pancreatite Aguda (juntamente com escores de Marshall e Atlanta) para determinar o internamento em enfermaria vs. Cuidados Intensivos.",
    interpretacao: "0 a 2 pontos: Pancreatite leve (mortalidade de 0 a 3%). 3 a 5 pontos: Gravidade moderada a severa (mortalidade 11-15%). 6 a 11 pontos: Pancreatite fulminante/severa (mortalidade de 40% até perto dos 100%).",
    limitacoes: "A sua maior fraqueza é a demora inerente: a avaliação completa do doente apenas é concluída passadas 48h, atrasando frequentemente decisões fulcrais. Por este motivo, o escore BISAP ou o APACHE II são hoje frequentemente preferidos na janela inicial (porta de urgência).",
    referencias: [
      { titulo: "Prognostic signs and the role of operative management in acute pancreatitis (Ranson JH et al., 1974)", url: "https://pubmed.ncbi.nlm.nih.gov/4834279/" }
    ]
  },
  ipss: {
    oqueE: "O IPSS (International Prostate Symptom Score) é um questionário globalmente validado de oito itens utilizado para avaliar e quantificar a severidade dos Sintomas do Trato Urinário Inferior (LUTS) no homem, geralmente provocados por Hiperplasia Benigna da Próstata (HBP).",
    historico: "Criado em 1992 pela American Urological Association (AUA) e mais tarde adotado pela OMS (tornando-se IPSS). Inclui 7 questões relacionadas com o esvaziamento e armazenamento da bexiga e 1 questão independente (Item 8) sobre o impacto na qualidade de vida.",
    cuidados: "É crucial que o questionário seja preenchido pelo próprio doente, referindo-se ao seu padrão urinário das últimas 4 semanas. A interferência do médico ou familiares nas respostas enviesa fortemente os resultados subjetivos.",
    indicacao: "Ferramenta essencial na avaliação primária da HBP. Ajuda não só no diagnóstico inicial de obstrução urinária, como é fulcral para monitorizar objetivamente a eficácia da terapêutica instituída (como os Alfa-bloqueadores).",
    interpretacao: "A soma das 7 primeiras perguntas vai de 0 a 35 pontos. 0-7: Sintomas Ligeiros (habitualmente gestão expectante / vigilância ativa). 8-19: Sintomas Moderados (sugere início de terapêutica médica). 20-35: Sintomas Graves (necessidade agressiva de controlo médico ou consideração de cirurgia tipo RTUP).",
    limitacoes: "É inespecífico: pontua a *dificuldade de urinar* mas não explica a causa. Um IPSS elevado pode ocorrer devido a cancro da próstata, aperto (estenose) da uretra, ou infeções agudas urinárias (ITU), e não estritamente HBP.",
    referencias: [
      { titulo: "The American Urological Association symptom index for benign prostatic hyperplasia (Barry MJ et al., 1992)", url: "https://pubmed.ncbi.nlm.nih.gov/1279218/" },
      { titulo: "EAU Guidelines on Management of Non-Neurogenic Male Lower Urinary Tract Symptoms (LUTS)", url: "https://uroweb.org/guidelines/" }
    ]
  },
  ferriman: {
    oqueE: "A Escala Modificada de Ferriman-Gallwey é o teste de eleição e exame clínico padrão para quantificar a extensão e severidade do hirsutismo (crescimento de pelos terminais de padrão masculino) em mulheres.",
    historico: "Apresentada em 1961 por D. Ferriman e J.D. Gallwey com base em 11 áreas anatómicas e, mais tarde, simplificada para 9 áreas 'androgénio-dependentes' que constituem o modelo modificado atual.",
    cuidados: "A observação clínica exige a garantia absoluta de que a doente não realizou métodos recentes de remoção cosmética profunda de pelos (como laser, cera ou eletrólise) nas semanas antecedentes à avaliação clínica.",
    indicacao: "Exame objetivo essencial na suspeita e investigação etiológica de Síndrome do Ovário Policístico (SOP), hiperplasia suprarrenal congénita não-clássica ou suspeita de tumores virilizantes produtores de testosterona.",
    interpretacao: "Cada área varia de 0 (sem pelo terminal) a 4 (pelificação grosseira de aspeto viril). A pontuação ≥ 8 em mulheres de etnia caucasiana confirma clinicamente o hirsutismo (independentemente do valor laboratorial de androgénios). Note-se que o limite de normalidade desce para ≥ 4-6 em populações do leste asiático devido a sensibilidade capilar genética.",
    limitacoes: "Exame intimista e demorado que pode ser desconfortável psicologicamente para a paciente. Tem um grau moderado de variação interobservador (avaliadores diferentes podem dar notas de 2 ou 3 à mesma zona). Não diagnostica a causa base da doença.",
    referencias: [
      { titulo: "Clinical assessment of body hair growth in women (Ferriman D, Gallwey JD, 1961)", url: "https://pubmed.ncbi.nlm.nih.gov/13698040/" },
      { titulo: "Endocrine Society Clinical Practice Guidelines for the Evaluation and Treatment of Hirsutism in Premenopausal Women", url: "https://www.endocrine.org/clinical-practice-guidelines/hirsutism" }
    ]
  },
  balthazar: {
    oqueE: "O Índice de Severidade na Tomografia Computadorizada (ISTC) – vulgarmente conhecido como Escore de Balthazar – é um sistema radiológico de pontuação utilizado para graduar a inflamação e quantificar a necrose do pâncreas na Pancreatite Aguda.",
    historico: "O radiologista Emil Balthazar propôs a classificação original (Graus A a E) em 1985. Cinco anos depois (1990), aprimorou o sistema criando o ISTC, somando à classificação alfabética a percentagem de necrose glandular visualizada com contraste.",
    cuidados: "A Tomografia Computadorizada (TC) com contraste **não deve** ser pedida de rotina nas primeiras 48-72h de internamento de uma pancreatite, a não ser que haja dúvida no diagnóstico. A necrose pancreática demora cerca de 3 dias a delimitar-se; uma TC precoce subestimará o Balthazar.",
    indicacao: "Identificar doentes com pancreatite aguda necrotizante grave (com elevado risco de sobreinfeção) e guiar as estratégias cirúrgicas, radiológicas de drenagem e a necessidade de internamento prolongado na Unidade de Cuidados Intensivos.",
    interpretacao: "A soma do Grau de Inflamação (0 a 4 pontos) com a Extensão da Necrose (0, 2, 4 ou 6 pontos) gera o ISTC (0 a 10). Escore 0-3: Mortalidade ~3%, morbilidade 8%. Escore 4-6: Mortalidade ~6%, morbilidade 35%. Escore 7-10: Mortalidade ~17%, morbilidade alarmante (92%).",
    limitacoes: "Tem baixa capacidade para detetar coleções puramente biliares mínimas (onde a ecografia é superior). A administração de contraste endovenoso pode exacerbar uma Lesão Renal Aguda pré-existente na pancreatite severa.",
    referencias: [
      { titulo: "Acute pancreatitis: value of CT in establishing prognosis (Balthazar EJ et al., 1990)", url: "https://pubmed.ncbi.nlm.nih.gov/2329062/" }
    ]
  },
  caprini: {
    oqueE: "O Escore de Caprini é a ferramenta mais extensamente validada para a estratificação do risco de Tromboembolismo Venoso (TEV) e decisão sobre profilaxia em doentes submetidos a procedimentos cirúrgicos (Geral, Vascular, Plástica, etc.).",
    historico: "Criado pelo Dr. Joseph Caprini na década de 1990 e atualizado sucessivamente (em 2005 e 2013). Engloba mais de 30 fatores de risco ponderados, sendo a espinha dorsal das guidelines da American College of Chest Physicians (ACCP).",
    cuidados: "A recolha exaustiva do historial médico é imperativa. Uma falha comum é esquecer perguntas de risco obstétrico (ex: histórico de abortos de repetição), que pontuam 1 ponto e podem mudar o patamar de profilaxia.",
    indicacao: "Mandatório na avaliação pré-operatória e na admissão hospitalar de qualquer utente cirúrgico para ditar o tipo e a duração da profilaxia antitrombótica.",
    interpretacao: "Escore 0 (Risco muito baixo): deambulação precoce. Escore 1-2 (Baixo risco): profilaxia mecânica (compressão pneumática intermitente). Escore 3-4 (Risco moderado): farmacológica (ex: Heparina de Baixo Peso Molecular - HBPM) OU mecânica. Escore ≥ 5 (Alto risco): HBPM + Compressão mecânica combinadas.",
    limitacoes: "Devido ao extenso número de variáveis, o seu preenchimento manual é frequentemente considerado moroso, o que levou ao desenvolvimento destas calculadoras digitais nos sistemas hospitalares. Em cirurgias ortopédicas de grande porte, algumas guidelines preferem protocolos diretos independentes do escore.",
    referencias: [
      { titulo: "Venous Thromboembolism Prophylaxis in Surgical Patients (ACCP Guidelines)", url: "https://journal.chestnet.org/article/S0012-3692(12)60127-6/fulltext" }
    ]
  },
  padua: {
    oqueE: "O Escore de Pádua é um modelo de predição clínica dedicado à avaliação do risco de Tromboembolismo Venoso (TEV) estritamente em doentes internados por motivos médicos (não-cirúrgicos).",
    historico: "Apresentado em 2010 num estudo de coorte em Pádua, Itália. Foi desenhado para suprir a lacuna das guidelines, que focavam muito na cirurgia, mas esqueciam a elevada taxa de TVP/TEP em doentes confinados ao leito na medicina interna.",
    cuidados: "A profilaxia indicada pelo escore deve ser confrontada e suspensa perante um risco hemorrágico inaceitável. Na prática, calcula-se frequentemente o Escore de Pádua para o risco trombótico e cruza-se com escores de risco de sangramento clínico.",
    indicacao: "Decisão do uso de heparinas profiláticas (como Enoxaparina 40mg SC/dia) na enfermaria de doentes agudos.",
    interpretacao: "Escore ≥ 4 pontos classifica o doente como Alto Risco de TEV, com indicação formal e forte para profilaxia farmacológica. Escore < 4 classifica como Baixo Risco, não estando recomendada a quimioprofilaxia (basta incentivar a deambulação).",
    limitacoes: "Não deve ser utilizado em doentes cirúrgicos, grávidas ou em doentes internados unicamente na psiquiatria sem comorbilidades clínicas. Doentes oncológicos pontuam logo 3 (se tiverem mais um fator, como idade, chegam aos 4), o que significa que virtualmente todo o doente oncológico internado necessita de profilaxia.",
    referencias: [
      { titulo: "A risk score to identify medical patients at high risk for VTE (Barbar S et al., 2010)", url: "https://pubmed.ncbi.nlm.nih.gov/20738765/" }
    ]
  },
  mmrc: {
    oqueE: "A Escala Modificada do Medical Research Council (mMRC) é um questionário simples, com cinco graus (0 a 4), que quantifica a limitação imposta pela dispneia (falta de ar) nas atividades da vida diária do doente.",
    historico: "O questionário original do MRC britânico foi adaptado nos anos 50 para monitorizar doentes respiratórios. Tornou-se universalmente reconhecido quando o consórcio GOLD (Global Initiative for Chronic Obstructive Lung Disease) o elegeu como um dos dois pilares de sintomatologia.",
    cuidados: "A escala foca apenas na dispneia 'percebida'. Um doente pode estar gravemente hipoxémico mas negar falta de ar severa na mMRC, ou ter uma dispneia enorme apenas por obesidade/falta de condicionamento e não por doença pulmonar.",
    indicacao: "Estadiamento da Doença Pulmonar Obstrutiva Crónica (DPOC), avaliação de fibrose pulmonar e acompanhamento da reabilitação respiratória.",
    interpretacao: "Graus 0 e 1 indicam doentes pouco sintomáticos. Graus ≥ 2 (dispneia que obriga a andar mais devagar do que pessoas da mesma idade no plano) marcam uma viragem clínica, indicando doentes muito sintomáticos (enquadrados nos grupos B ou E da classificação GOLD), com indicação de terapêutica broncodilatadora dupla contínua (LAMA + LABA).",
    limitacoes: "Pode ser redutor ao ignorar outros sintomas da DPOC que minam a qualidade de vida, como a tosse crónica, a espetoração e a fadiga muscular. Por isso, usa-se frequentemente de forma complementar ao questionário CAT.",
    referencias: [
      { titulo: "Global Strategy for the Diagnosis, Management, and Prevention of COPD (GOLD Report)", url: "https://goldcopd.org/" }
    ]
  },
  cat: {
    oqueE: "O COPD Assessment Test (CAT) é um questionário multidimensional de 8 itens desenvolvido para quantificar de forma abrangente o impacto que a Doença Pulmonar Obstrutiva Crónica (DPOC) exerce sobre o estado de saúde e o dia a dia do doente.",
    historico: "Criado em 2009 por um conselho multidisciplinar liderado pelo Prof. Paul Jones. Substituiu gradualmente o questionário do St. George’s Respiratory Hospital (que era excelente, mas demasiado longo para a consulta no centro de saúde).",
    cuidados: "O CAT deve ser preenchido autonomamente pelo doente na sala de espera ou no início da consulta. Se for lido em voz alta pelo médico, o doente tende a minimizar os sintomas (viés de complacência).",
    indicacao: "Classificação sintomática ABE da DPOC (segundo a diretriz GOLD) e monitorização aguda durante os episódios de exacerbação infeciosa da doença.",
    interpretacao: "Pontuação máxima de 40. Escore < 10: impacto baixo/ligeiro (Doentes do Grupo A). Escore ≥ 10: impacto clínico significativo (Doentes do Grupo B ou E), justificando o escalonamento da terapêutica inalatória ou inclusão em programas de Reabilitação Respiratória.",
    limitacoes: "Não foi desenhado para fazer diagnóstico de DPOC (este requer espirometria a demonstrar padrão obstrutivo pós-broncodilatador). Doentes com outras patologias concomitantes (ex: insuficiência cardíaca congestiva) também terão escores CAT elevados não necessariamente ligados ao pulmão.",
    referencias: [
      { titulo: "Development and first validation of the COPD Assessment Test (Jones PW et al., 2009)", url: "https://pubmed.ncbi.nlm.nih.gov/19720809/" },
      { titulo: "CAT official website", url: "https://www.catestonline.org/" }
    ]
  },
  phq2: {
    oqueE: "O PHQ-2 é a versão ultra-breve do questionário PHQ-9, utilizando apenas as duas primeiras perguntas para efetuar a triagem de primeira linha de humor deprimido e de anedonia (perda de prazer) no último par de semanas.",
    historico: "Demonstrado no início dos anos 2000 por Kurt Kroenke como um método de 'pré-rastreio' extremamente eficaz. Foi adotado por diretrizes médicas mundiais (incluindo a USPSTF) como o passo número um para triagem em consultas não-psiquiátricas.",
    cuidados: "Um PHQ-2 negativo indica que o doente *não cumpre* os critérios para um episódio depressivo major e a investigação para por aí. Um PHQ-2 positivo **não faz o diagnóstico**; ele apenas indica que é obrigatório aplicar o PHQ-9 completo.",
    indicacao: "Rastreio em massa de depressão em consultas de medicina geral, medicina do trabalho, puerpério, avaliação geriátrica ou medicina interna, onde o tempo por consulta é estritamente limitado.",
    interpretacao: "O escore máximo é 6. Um valor ≥ 3 é considerado positivo e sensível, despoletando a necessidade clínica incontornável de avaliar ideação suicida oculta e preencher os 7 itens restantes do questionário PHQ-9.",
    limitacoes: "Tem baixa especificidade e valor preditivo positivo isolado. Ignora sintomas neurovegetativos da depressão, como flutuações de peso, insónias, fadiga extrema psicomotora ou sentimento de culpa.",
    referencias: [
      { titulo: "The Patient Health Questionnaire-2: validity of a two-item depression screener (Kroenke K et al., 2003)", url: "https://pubmed.ncbi.nlm.nih.gov/14615201/" },
      { titulo: "US Preventive Services Task Force (USPSTF) - Depression and Suicide Risk in Adults", url: "https://www.uspreventiveservicestaskforce.org/" }
    ]
  }
};

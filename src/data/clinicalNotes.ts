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
  }
};

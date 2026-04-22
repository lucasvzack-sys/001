// src/types.ts
export type View = 'portal' | 'temnoposto' | 'laudai' | 'calculai' | 'privacidade' | 'termos' | 'sobre' | 'contato' | 'doar';

export interface MedicineData {
  municipio: string;
  medicamento: string;
  disponivel: boolean;
}

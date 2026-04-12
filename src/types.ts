// src/types.ts
export type View = 'portal' | 'temnoposto' | 'laudai' | 'doar';

export interface MedicineData {
  municipio: string;
  medicamento: string;
  disponivel: boolean;
}

// src/types.ts
export type View = 'portal' | 'temnoposto' | 'laudai' | 'doar' | 'calculai';

export interface MedicineData {
  municipio: string;
  medicamento: string;
  disponivel: boolean;
}

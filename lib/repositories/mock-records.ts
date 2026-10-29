export type DemoRecord = { id: string; title: string; type: 'Prescriptions'|'Reports'|'Scans'; date: string; clinic: string };
const seed: DemoRecord[] = [
  {id:'demo-1',title:'Complete blood count',type:'Reports',date:'2026-10-22',clinic:'City Care Diagnostics'},
  {id:'demo-2',title:'Prescription · Dr. Mehta',type:'Prescriptions',date:'2026-10-12',clinic:'Greenwood Family Clinic'},
  {id:'demo-3',title:'Vitamin D test',type:'Reports',date:'2026-09-30',clinic:'City Care Diagnostics'},
  {id:'demo-4',title:'Knee X-ray',type:'Scans',date:'2026-09-14',clinic:'Northside Imaging'},
];
// Volatile demo repository. Replace this adapter after the UI and API development is complete.
const state = globalThis as typeof globalThis & { __medicoDemoRecords?: DemoRecord[] };
state.__medicoDemoRecords ??= [...seed];
export const mockRecordRepository = {
  list(): DemoRecord[] { return [...state.__medicoDemoRecords!]; },
  create(input: Omit<DemoRecord,'id'>): DemoRecord {
    const record = { ...input, id: `demo-${Date.now()}` };
    state.__medicoDemoRecords!.unshift(record);
    return record;
  },
};

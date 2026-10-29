import { mockRecordRepository } from '../../../../lib/repositories/mock-records';

/** Versioned mock API. Production authentication and persistence are intentionally not connected yet. */
export async function GET() {
  return Response.json({ data: mockRecordRepository.list(), mode: 'demo' });
}

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return Response.json({ error: 'Send a valid JSON record.' }, { status: 400 }); }
  if (!body || typeof body !== 'object') return Response.json({ error: 'Record details are required.' }, { status: 400 });
  const value = body as Record<string, unknown>;
  if (typeof value.title !== 'string' || !value.title.trim() || typeof value.clinic !== 'string' || !value.clinic.trim() || !['Prescriptions','Reports','Scans'].includes(String(value.type))) {
    return Response.json({ error: 'Add a title, clinic and valid record type.' }, { status: 422 });
  }
  const record = mockRecordRepository.create({ title: value.title.trim().slice(0,120), clinic: value.clinic.trim().slice(0,120), type: value.type as 'Prescriptions'|'Reports'|'Scans', date: new Date().toISOString().slice(0,10) });
  return Response.json({ data: record, mode: 'demo' }, { status: 201 });
}

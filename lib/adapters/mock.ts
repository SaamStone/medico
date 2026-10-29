/** Mock-only adapters used while the site is developed. No production database is connected. */
export interface StorageAdapter { save(file: File): Promise<{ name: string; pages: number }> }
export interface OcrAdapter { read(fileName: string): Promise<{ title: string; date: string; fields: Array<{ label: string; value: string; check: boolean }> }> }
export interface LlmProvider { answer(question: string): Promise<string> }
export interface PaymentAdapter { createQr(amount: number): Promise<{ reference: string; amount: number; expiresIn: number }> }
export interface MailAdapter { send(to: string, subject: string): Promise<{ queued: boolean }> }

export const mockStorage: StorageAdapter = { async save(file) { return { name: file.name, pages: 1 }; } };
export const mockOcr: OcrAdapter = { async read(fileName) { return { title: fileName.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '), date: '2026-10-29', fields: [{ label: 'Document type', value: 'Lab report', check: false }, { label: 'Patient name', value: 'Samira Khan', check: true }, { label: 'Clinic or lab', value: 'City Care Diagnostics', check: true }] }; } };
export const mockLlm: LlmProvider = { async answer(question) { return `I can help you find and understand information in your saved records. For “${question}”, I don’t have enough verified information in this demo to draw a conclusion. Please discuss your health questions with your doctor.`; } };
export const mockPayment: PaymentAdapter = { async createQr(amount) { return { reference: `DEMO-${Date.now().toString().slice(-6)}`, amount, expiresIn: 300 }; } };
export const mockMail: MailAdapter = { async send() { return { queued: true }; } };

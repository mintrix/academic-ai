
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private apiUrl = environment.apiUrlgemini;
  private apiKey = environment.apiKeygemini; // 🔒 

  constructor(private http: HttpClient) {}

  analyzeStudentData(data: { grades: number[], goals: string, feedback: string }): Observable<any> {
    const prompt = `
    Você é um assistente educacional com habilidades analíticas. Com base nas informações fornecidas:

    - Notas: ${data.grades.join(', ')}
    - Metas: "${data.goals}"
    - Feedback: "${data.feedback}"

    1. Use uma regressão linear simples para prever o desempenho futuro do aluno (nota de 0 a 100).
    2. Realize uma análise de sentimentos no feedback do aluno (Positivo, Negativo ou Neutro).
    3. Sugira possíveis carreiras com base nas metas e notas.

    Responda com um resumo estruturado como este:
    - Previsão de desempenho: [valor numérico]
    - Sentimento do feedback: [sentimento]
    - Sugestões de carreira: [lista separada por vírgulas]
    `;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      contents: [{ parts: [{ text: prompt }] }]
    };

    return this.http.post(`${this.apiUrl}?key=${this.apiKey}`, body, { headers });
  }
}

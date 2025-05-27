import { Component } from '@angular/core';
import { GeminiService } from '../../services/gemini.service';


@Component({
  selector: 'app-registrosfeed',
  templateUrl: './registrosfeed.component.html',
  styleUrl: './registrosfeed.component.css'
})
export class RegistrosfeedComponent {

  name ='';
  gradeInput = 0;
  grades: number[] = [];
  goals = '';
  feedback = '';
  message = '';
  analysisResult = '';
  loading = false;
  typingInterval: any;  

  constructor(private geminiService: GeminiService) {}

  addGrade() {
    if (this.gradeInput >= 0) {
      this.grades.push(this.gradeInput);
      this.gradeInput = 0;
    }
  }

  submitData() {
    if (!this.grades.length || !this.goals || !this.feedback) {
      this.message = 'Por favor, preencha todos os campos antes de enviar.';
      return;
    }

    const inputData = {
      grades: this.grades,
      goals: this.goals,
      feedback: this.feedback
    };

    this.message = 'Analisando...';
    this.loading = true;

    this.geminiService.analyzeStudentData(inputData).subscribe({
      next: (res) => {
        const text = res?.candidates?.[0]?.content?.parts?.[0]?.text || 'Resposta não encontrada.';
        this.typeText(text);
        this.message = 'Análise concluída com sucesso!';
        this.loading = false;
      },
      error: (err) => {
        this.message = 'Erro ao analisar os dados.';
        this.loading = false;
        console.error(err);
      }
    });
  }
 typeText(text: string) {
  this.analysisResult = '';
  let i = 0;
  clearInterval(this.typingInterval); // Asegura que no haya otra animación corriendo

  this.typingInterval = setInterval(() => {
    if (i < text.length) {
      this.analysisResult += text.charAt(i);
      i++;
    } else {
      clearInterval(this.typingInterval); // Detiene al final
    }
  }, 25); // Ajusta la velocidad aquí
}

  
}


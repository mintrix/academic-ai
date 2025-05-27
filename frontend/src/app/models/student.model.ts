// src/app/models/student.model.ts

export interface StudentData {
  name: string;
  gradeInput: number ;
  goals: string;
  feedback: string;
  message: string;
  analysisResult: string;
}

export interface SentimentResult {
  neg: number;
  neu: number;
  pos: number;
  compound: number;
}

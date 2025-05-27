// src/app/services/student.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentData, SentimentResult } from '../models/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  submitStudent(data: StudentData): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/submit`, data);
  }

  predictGrade(grades: number[]): Observable<{ predicted_grade: number }> {
    return this.http.post<{ predicted_grade: number }>(`${this.baseUrl}/predict`, { grades });
  }

  getRecommendation(grades: number[]): Observable<{ recommendation: string }> {
    return this.http.post<{ recommendation: string }>(`${this.baseUrl}/recommend`, { grades });
  }

  analyzeSentiment(feedback: string): Observable<SentimentResult> {
    return this.http.post<SentimentResult>(`${this.baseUrl}/analyze_sentiment`, { feedback });
  }
}

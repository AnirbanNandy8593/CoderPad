import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-attempted-test',
  templateUrl: './attempted-test.component.html',
  styleUrls: ['./attempted-test.component.scss']
})
export class AttemptedTestComponent {
  testId: string = "ae33";
  testDetails: any = null;
  questions: any[] = [];
  attemptedAnswers: { [key: string]: string } = {};
  timer!: number; // Timer in seconds
  intervalId: any;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.testId = this.route.snapshot.paramMap.get('id');
    this.loadTestDetails();
  }

  loadTestDetails(): void {
    this.testService.getTestById(this.testId).subscribe({
      next: (test) => {
        this.testDetails = test;
        this.questions = test.questions;
        // console.log(this.questions);
        this.timer = test.duration * 60; // Converting to Seconds
        this.startTimer();
      },
      error: (error) => console.error('Error fetching test:', error),
    });
  }

  getOptions(question: any): string[] {
    return [question.option1, question.option2, question.option3, question.option4];
  }

  getTextAreaValue(event: Event): string {
    const target = event.target as HTMLTextAreaElement;
    return target ? target.value : '';
  }

  selectAnswer(questionId: string, value: string): void {
    if (value) {
      this.attemptedAnswers[questionId] = value; // Save the selected answer
    }
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  }

  startTimer(): void {
    this.intervalId = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.intervalId);
        this.submitTest();
      }
    }, 1000);
  }

  submitTest(): void {
    const candidateId = "8765";
    const attemptedTest = {
      candidateId,
      testId: this.testId,
      questions: this.questions.map((question) => ({
        questionId: question.id,
        selectedAnswer: this.attemptedAnswers[question.id] || '',
        correctAnswer: question.correctAnswer, // Correct answer
      })),
    };

    this.testService.submitAttemptedTest(attemptedTest).subscribe({
      next: () => {
        console.log('Test submitted successfully');
        // this.router.navigate(['/tests']); // Navigate back
      },
      error: (error) => console.error('Error submitting test:', error),
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear the timer when component is destroyed
    }
  }
}

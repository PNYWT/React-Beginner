export interface Attempt {
  answer: string;
  guess: string;
  correctChars: number;
  correctPositions: number;
  attemptNumber: number;
}

export class GameManager {
  private answer: string = "";
  private count: number = 0;
  private attempts: Attempt[] = [];

  constructor() {
    this.resetGame();
  }

  private generateAnswer(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from({ length: 4 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
  }

  resetGame() {
    this.answer = this.generateAnswer();
    this.count = 0;
    this.attempts = [];
  }

  getAnswer() {
    return this.answer;
  }

  getAttempts() {
    return this.attempts;
  }

  submitGuess(guess: string): Attempt {
    this.count++;

    let correctChars = 0;
    let correctPositions = 0;

    for (let i = 0; i < 4; i++) {
      if (this.answer.includes(guess[i])) {
        correctChars++;
      }
      if (this.answer[i] === guess[i]) {
        correctPositions++;
      }
    }

    const attempt: Attempt = {
      answer: this.answer,
      guess,
      correctChars,
      correctPositions,
      attemptNumber: this.count,
    };

    this.attempts.push(attempt);
    return attempt;
  }
}

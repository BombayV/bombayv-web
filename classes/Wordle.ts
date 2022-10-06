type letterState = 'correct' | 'incorrect' | 'wrong' | ''

interface Letter {
  letter: string
  state: letterState
}

export class Wordle {
  private word: string;
  private maxTries: number = 6;
  private maxLetters: number = 5;
  private currentTries: number = 1;
  private currentLetter: number = 0;
  private guesses = new Array<Letter>();

  constructor(word: string) {
    console.log("Wordle constructor");
    if (!word) throw new Error("Word is required");
    if (word.length > this.maxLetters) throw new Error("Word is too long");
    this.word = word.toUpperCase();
  }

  // Getters
  public getWord(): string {
    return this.word;
  }

  public getGuesses() {
   // Return an array with arrays up to maxTries * maxLetters
    return Array.from(Array(this.getSquaresLength()), (_, i) => {
      return <Letter> {
        letter: '',
        state: ''
      }
    });
  }

  public getMaxLetters(): number {
    return this.maxLetters;
  }

  public getMaxTries(): number {
    return this.maxTries;
  }

  public getSquaresLength(): number {
    return this.maxLetters * this.maxTries;
  }

  // Setters
  public setWord(word: string): void {
    this.word = word;
  }

  public addLetter(letter: string, reference): void {
    if (this.currentLetter < this.maxLetters * this.currentTries) {
      reference[this.currentLetter].letter = letter.toUpperCase();
      this.guesses[this.currentLetter] = <Letter> {
        letter: letter.toUpperCase(),
        state: ''
      }
      this.currentLetter++;
    }
  }

  public removeLetter(reference): void {
    if (this.currentLetter > 0 && this.currentLetter <= this.maxLetters * this.currentTries && this.currentLetter > this.maxLetters * (this.currentTries - 1)) {
      this.guesses[this.currentLetter - 1].letter = '';
      reference[this.currentLetter - 1].letter = '';
      this.currentLetter--;
    }
  }

  // Methods
  public checkWord(reference): void {
    // Check if the row is full
    if (this.currentLetter === this.maxLetters * this.currentTries) {
      let currentWord: string = '';
      // Check if the word in the row is correct
      for (let i = this.maxLetters * (this.currentTries - 1); i < this.maxLetters * this.currentTries; i++) {
        // Check if the letter is correct
        if (this.guesses[i].letter === this.word[i - this.maxLetters * (this.currentTries - 1)]) {
          console.log("Correct letter");
          setTimeout(() => {
            reference[i].state = 'correct';
          }, 300 * (i - this.maxLetters * (this.currentTries - 1)));
          this.guesses[i].state = 'correct';
        } else if (this.word[i] !== this.guesses[i].letter && this.word.includes(this.guesses[i].letter)) {
          console.log("Incorrect letter");
          setTimeout(() => {
            reference[i].state = 'incorrect';
          }, 300 * (i - this.maxLetters * (this.currentTries - 1)));
          this.guesses[i].state = 'wrong';
        } else {
          console.log("Wrong letter");
          setTimeout(() => {
            reference[i].state = 'wrong';
          }, 300 * (i - this.maxLetters * (this.currentTries - 1)));
          this.guesses[i].state = 'incorrect';
        }

        // console.table(this.guesses);
        // console.table(reference);

        currentWord += this.guesses[i].letter;
      }
      if (currentWord.toUpperCase() === this.word) {
        setTimeout(() => {
          alert("You win!");
        }, 300 * this.maxLetters);
      } else {
        this.currentTries++;
        if (this.currentTries - 1 === this.maxTries) {
          setTimeout(() => {
            alert("You lose!");
          }, 300 * this.maxLetters);
        }
      }
    }
  }

  public restartGame(newWord: string, newTries: number, newLetters: number): void {
    console.log("restartGame");
    this.word = newWord.toUpperCase();
    this.maxTries = newTries;
    this.maxLetters = newLetters;
    this.currentTries = 1;
    this.currentLetter = 0;
  }
}
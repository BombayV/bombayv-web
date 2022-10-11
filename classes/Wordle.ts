type letterState = 'correct' | 'incorrect' | 'wrong' | ''

interface Letter {
  letter: string
  state: letterState
  delay: number
}

export class Wordle {
  private word: string;
  private maxTries: number = 6;
  private maxLetters: number = 5;
  private currentTries: number = 1;
  private currentLetter: number = 0;
  private guesses = new Array<Letter>();
  private words: string[] = [];
  private gameEnded: boolean;

  constructor(words: string[]) {
    console.log("Wordle constructor");
    if (!words) throw new Error("Word is required");
    this.word = words[Math.floor(Math.random() * words.length)].toUpperCase();
    this.words = words;
    this.gameEnded = false;
  }

  // Getters
  public getWord(): string {
    return this.word;
  }

  public getGuesses() {
   // Return an array with arrays up to maxTries * maxLetters
    return Array.from(Array(this.getSquaresLength()), () => {
      return <Letter> {
        letter: '',
        state: '',
        delay: 0,
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

  public addLetter(letter: string, reference): void {
    if (this.gameEnded) return;
    if (this.currentLetter < this.maxLetters * this.currentTries) {
      reference[this.currentLetter].letter = letter.toUpperCase();
      this.guesses[this.currentLetter] = <Letter> {
        letter: letter.toUpperCase(),
        state: '',
      }
      this.currentLetter++;
    }
  }

  public removeLetter(reference): void {
    if (this.gameEnded) return;
    if (this.currentLetter > 0 && this.currentLetter <= this.maxLetters * this.currentTries && this.currentLetter > this.maxLetters * (this.currentTries - 1)) {
      this.guesses[this.currentLetter - 1].letter = '';
      reference[this.currentLetter - 1].letter = '';
      this.currentLetter--;
    }
  }

  // Methods
  public checkWord(reference): void {
    if (this.gameEnded) return;
    // Check if the row is full
    if (this.currentLetter === this.maxLetters * this.currentTries) {
      // Check if the word of the row exists in the words array
      const currentWord = this.guesses.slice(this.maxLetters * (this.currentTries - 1), this.maxLetters * this.currentTries).map((letter) => letter.letter).join('');
      const capitalizedWord = `${currentWord.charAt(0).toUpperCase()}${currentWord.slice(1).toLowerCase()}`;
      if (!this.words.includes(capitalizedWord)) {
        console.log("Word not found");
        return;
      }

      for (let i = 0; i < currentWord.length; i++) {
        const index = i + this.maxLetters * (this.currentTries - 1)
        if (currentWord[i] === this.word[i]) {
          reference[index].state = 'correct';
          reference[index].delay = i * 100;
          this.guesses[index].state = 'correct';
        } else if (currentWord.includes(this.word[i])) {
          reference[index].state = 'incorrect';
          reference[index].delay = i * 100;
          this.guesses[index].state = 'incorrect';
        } else {
          reference[index].state = 'wrong';
          reference[index].delay = i * 100;
          this.guesses[index].state = 'wrong';
        }
      }

      if (currentWord === this.word) {
        setTimeout(() => {
          alert("You win!");
          this.gameEnded = true;
        }, 500);
      } else {
        this.currentTries++;
        if (this.currentTries - 1 === this.maxTries) {
          setTimeout(() => {
            alert("You lose!");
            this.gameEnded = true;
          }, 500);
        }
      }
    }
  }

  public restartGame(words: string[], newTries: number, newLetters: number): void {
    console.log("restartGame");
    this.words = words;
    this.word = words[Math.floor(Math.random() * words.length)].toUpperCase();
    this.maxTries = newTries;
    this.maxLetters = newLetters;
    this.currentTries = 1;
    this.currentLetter = 0;
    this.guesses = new Array<Letter>();
    this.gameEnded = false;
  }
}
import { Notification } from "~/classes/Notification";

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

  public getDifficulty(difficulty: string): number {
    switch (difficulty) {
      case 'easy':
        return 6;
      case 'medium':
        return 5;
      case 'hard':
        return 4;
      default:
        return 3;
    }
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
  public checkWord(reference, newKeyboard): void {
    if (this.gameEnded) return;
    // Check if the row is full
    if (this.currentLetter === this.maxLetters * this.currentTries) {
      // Check if the word of the row exists in the words array
      const currentWord = this.guesses.slice(this.maxLetters * (this.currentTries - 1), this.maxLetters * this.currentTries).map((letter) => letter.letter).join('');
      const capitalizedWord = `${currentWord.charAt(0).toUpperCase()}${currentWord.slice(1).toLowerCase()}`;
      if (!this.words.includes(capitalizedWord)) {
        new Notification("Word not found", 2500);
        return;
      }

      for (let i = 0; i < currentWord.length; i++) {
        const index = i + this.maxLetters * (this.currentTries - 1)
        if (currentWord[i] === this.word[i]) {
          this.handleLetter(reference[index], 'correct', newKeyboard);
          reference[index].state = 'correct';
          reference[index].delay = i * 100;
          this.guesses[index].state = 'correct';
        } else if (this.word.includes(currentWord[i])) {
          if (reference[index].state !== 'correct') {
            this.handleLetter(reference[index], 'incorrect', newKeyboard);
            reference[index].state = 'incorrect';
            reference[index].delay = i * 100;
            this.guesses[index].state = 'incorrect';
          }
        } else {
          this.handleLetter(reference[index], null, newKeyboard);
          reference[index].state = 'wrong';
          reference[index].delay = i * 100;
          this.guesses[index].state = 'wrong';
        }
      }

      if (currentWord === this.word) {
        setTimeout(() => {
          new Notification("You guessed the word correctly", 5000);
          this.gameEnded = true;
        }, 500);
      } else {
        this.currentTries++;
        if (this.currentTries - 1 === this.maxTries) {
          setTimeout(() => {
            new Notification("You did not guess the word", 5000);
            this.gameEnded = true;
          }, 500);
        }
      }
    }
  }

  public handleLetter(letter, state, newKeyboard): void {
    // Find the letter in the keyboard and change its state
    for (let i = 0; i < newKeyboard.length; i++) {
      for (let j = 0; j < newKeyboard[i].length; j++) {
        if (newKeyboard[i][j].letter.toUpperCase() === letter.letter) {
          if (newKeyboard[i][j].state === 'correct') return;
          newKeyboard[i][j].state = state;
        }
      }
    }
  }


  public restartGame(newDifficulty: string, lang: string, newLetters: number, reference): void {
    reference.tries = this.maxTries;
    reference.letters = newLetters;
    reference.total = this.getSquaresLength();
    reference.guesses.forEach((box) => {
      box.letter = '';
      box.state = '';
      box.delay = 0;
    })
    this.maxTries = this.getDifficulty(newDifficulty);
    this.maxLetters = newLetters;
    this.currentTries = 1;
    this.currentLetter = 0;
    this.guesses = new Array<Letter>();

    fetch(`../data/${lang}${newLetters}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.word = data[Math.floor(Math.random() * data.length)].toUpperCase();
        this.words = data;
      })
      .catch((error) => {
        console.error(error);
        new Notification("Could not fetch new word :(", 5000);
      });
    this.gameEnded = false;
  }
}
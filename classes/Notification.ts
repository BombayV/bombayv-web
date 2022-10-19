const max = 3;
let current = 0;
import gsap from "gsap";

export class Notification {
  public readonly container: HTMLElement;
  constructor(
      public message: string,
      public duration: number,
  ) {
    this.container = document.querySelector('#noti-container');
    this.create();
  }

  create() {
    if (current >= max) {
      this.container.removeChild(this.container.firstChild as Node);
    }
    current++;
    const noti = document.createElement('div');
    noti.classList.add('py-1.5', 'px-4', 'rounded', 'font-medium', 'dark:bg-zinc-700', 'dark:text-zinc-200', 'mt-3', 'slideDown');
    noti.textContent = this.message + '.';
    this.container.appendChild(noti);
    gsap.fromTo(noti, { y: -25, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1.0, duration: 0.5, ease: "power4.out" });
    setTimeout(() => {
      this.remove(noti);
    }, this.duration);
  }

  remove(noti: HTMLDivElement) {
    gsap.to(noti, { y: -25, opacity: 0, duration: 0.1, ease: "power4.out",
      onComplete: () => {
        this.container.removeChild(noti);
        current--;
      }
    });
  }
}
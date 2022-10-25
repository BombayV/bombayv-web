const max = 3;
let current = 0;
import gsap from "gsap";

export class Notification {
  public container: HTMLElement;
  constructor() {
    setTimeout(() => {
      this.container = document.getElementById('noti-container') as HTMLElement;
    }, 500);
  }

  create(message: string, duration: number) {
    if (this.container === undefined) return console.error("Notification container not found");
    if (current >= max) {
      this.remove(this.container.children[0] as HTMLDivElement);
    }
    current++;
    const noti = document.createElement('div');
    noti.classList.add('py-1.5', 'px-4', 'rounded', 'font-medium', 'dark:bg-zinc-700', 'dark:text-zinc-200', 'mt-3', 'slideDown');
    noti.textContent = message + '.';
    this.container.appendChild(noti);
    gsap.fromTo(noti, { y: -25, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1.0, duration: 0.5, ease: "power4.out" });
    setTimeout(() => {
      this.remove(noti);
    }, duration);
  }

  remove(noti: HTMLDivElement) {
    gsap.to(noti, { y: -25, opacity: 0, duration: 0.1, ease: "power4.out",
      onComplete: () => {
        // check if the container has the element
        if (this.container.contains(noti)) {
          this.container.removeChild(noti);
          current--;
        }
      }
    });
  }
}
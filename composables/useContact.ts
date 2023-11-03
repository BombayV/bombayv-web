import { getGlobalThis } from "@vue/shared";

const REF_IDS = ['email', 'subject', 'message'];

export class useContact {
  private readonly TIME_LIMIT: number = 1000 * 60 * 60 * 24;
  private last_message: Date | null = null;
  private can_send: boolean = false;
  private supabase: ReturnType<typeof useSupabaseClient> | null = null;
  public email = ref<string>('');
  public subject = ref<string>('');
  public message = ref<string>('');
  private docEls: Record<string, HTMLInputElement | null> = {
    email: null,
    subject: null,
    message: null,
  }
  private timeouts: Record<string, ReturnType<typeof setTimeout> | null> = {
    email: null,
    subject: null,
    message: null,
  };
  private activeErrors: Record<string, boolean> = {
    email: false,
    subject: false,
    message: false,
  }
  private activeSuccesses: Record<string, boolean> = {
    email: false,
    subject: false,
    message: false,
  }

  constructor() {
    onMounted(() => {
      const storedMessage = localStorage.getItem('last_message');
      if (storedMessage) {
        this.last_message = new Date(storedMessage);
      }

      this.can_send = this.hasPassedTimeLimit();
      this.supabase = useSupabaseClient();

      this.watchEmail();
      this.watchSubject();
      this.watchMessage();
    });
  }

  public hasPassedTimeLimit() {
    if (!this.last_message) {
      return true;
    }

    return this.getTimeLeft() > this.TIME_LIMIT;
  }

  private getTimeLeft() {
    if (!this.last_message) {
      return 0;
    }

    return new Date().getTime() - this.last_message.getTime();
  }

  private get canSend() {
    return this.can_send;
  }

  private set canSend(value: boolean) {
    this.can_send = value;
    this.last_message = new Date();
    localStorage.setItem('last_message', this.last_message.toISOString());
  }

  private get isFormValid() {
    return this.email.value && this.subject.value && this.message.value;
  }

  private isLengthValid(typeRef: Ref<string>, length: number) {
    return typeRef.value.length >= length;
  }

  private isEmailValid() {
    const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    return emailRegex.test(this.email.value);
  }

  private watchEmail() {
    watch(this.email, () => {
      this.setInputError('email', !this.isEmailValid());
    });
  }

  private watchSubject() {
    watch(this.subject, () => {
      this.setInputError('subject', !this.isLengthValid(this.subject, 8))
    });
  }

  private watchMessage() {
    watch(this.message, () => {
      this.setInputError('message', !this.isLengthValid(this.message, 20))
    });
  }

  private setInputError(id: string, error: boolean) {
    if (getGlobalThis().document) {
      let doc = this.docEls[id];
      if (!doc) {
        doc = this.docEls[id] = getGlobalThis().document.getElementById(id) as HTMLInputElement;
      }

      const timeout = this.timeouts[id];

      if (timeout) {
        clearTimeout(timeout);
      }

      if (error) {
        if (this.activeSuccesses[id]) {
          doc.classList.remove('input-outline-success');
          this.activeSuccesses[id] = false;
          doc.classList.add('input-outline-error');
          this.activeErrors[id] = true;
        } else {
          this.timeouts[id] = setTimeout(() => {
            doc!.classList.add('input-outline-error');
            this.activeErrors[id] = true;
          }, 1000);
        }
      } else {
        const error = this.activeErrors[id];
        const success = this.activeSuccesses[id];

        if (error) {
          doc.classList.remove('input-outline-error');
          this.activeErrors[id] = false;
        }

        if (!success) {
          doc.classList.add('input-outline-success');
          this.activeSuccesses[id] = true;
        }
      }
    }
  }

  public async sendForm(): Promise<any> {
    if (!this.isFormValid) {
      return alert('Please fill out all fields');
    }

    if (!this.canSend) {
      return alert('You can only send one message per day');
    }

    if (!this.isLengthValid(this.subject, 8)) {
      return alert('Subject must be at least 10 characters long');
    }

    if (!this.isLengthValid(this.message, 20)) {
      return alert('Message must be at least 25 characters long');
    }

    if (!this.isEmailValid()) {
      return alert('Please enter a valid email address');
    }

    // @ts-ignore
    const { data, error } = await this.supabase
      .from('contact_responses')
      .insert([
        {
          email: this.email.value,
          subject: this.subject.value,
          message: this.message.value,
        },
      ])
      .select();

    if (error) {
      return alert('Error sending message');
    }

    alert('Message sent successfully!');
    this.canSend = false;
    this.last_message = new Date();
    localStorage.setItem('last_message', this.last_message.toISOString());

    return data;
  }
}

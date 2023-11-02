export class useContact {
  private readonly TIME_LIMIT: number = 1000 * 60 * 60 * 24;
  private last_message: Date | null = null;
  private can_send: boolean = false;
  private supabase: ReturnType<typeof useSupabaseClient> | null = null;
  public email = ref<string>('');
  public subject = ref<string>('');
  public message = ref<string>('');

  constructor() {
    onMounted(() => {
      const storedMessage = localStorage.getItem('last_message');
      if (storedMessage) {
        this.last_message = new Date(storedMessage);
      }

      this.can_send = !this.hasPassedTimeLimit();
      this.supabase = useSupabaseClient();
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

  public async sendForm(): Promise<any> {
    if (!this.isFormValid) {
      return alert('Please fill out all fields')
    }

    if (!this.canSend) {
      return alert('You can only send one message per day');
    }

    if (!this.isLengthValid(this.subject, 10)) {
      return alert('Subject must be at least 10 characters long');
    }

    if (!this.isLengthValid(this.message, 25)) {
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

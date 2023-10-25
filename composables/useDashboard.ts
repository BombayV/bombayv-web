import {capitalize} from "vue";

export class useDashboard {
  private readonly user: Record<string, any>;

  constructor(user: Record<string, any>) {
    this.user = user;
  }

  get avatarUrl(): string {
    if (this.user!.value?.user_metadata?.avatar_url) {
      return this.user.value.user_metadata.avatar_url;
    }
    return 'https://ui-avatars.com/api/?name=' + this.user.value?.email;
  }

  get username(): string {
    return capitalize(this.user.value?.user_metadata?.full_name || 'Anonymous');
  }

  get email(): string {
    return this.user.value.email;
  }
}
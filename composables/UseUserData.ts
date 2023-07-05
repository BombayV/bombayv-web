import { User } from '@supabase/supabase-js';
import { capitalize } from '@vue/shared';

export class UseUserData {
  private readonly user: any;
  constructor(user: User | null) {
    this.user = user;
  }

  get avatarUrl(): string {
    if (this.user.value?.user_metadata?.avatar_url) {
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

  get blogPosts(): any {
    return computed(() => {
      return this.user.value?.blog_posts || [];
    });
  }

  get images(): any {
    return computed(() => {
      return this.user.value?.images || [];
    });
  }

  public async signOut(auth: any, navigateTo: any): Promise<void> {
    const { error } = await auth.signOut();
    if (error) {
      console.log(error);
      return;
    }

    await navigateTo('/auth/login');
  }
}

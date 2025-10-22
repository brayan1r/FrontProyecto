import { Injectable, signal,computed } from '@angular/core';

type Role = 'admin' | 'user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly KEY_TOKEN = 'auth_token_demo';
  private readonly KEY_ROLE = 'auth_role_demo';

  private _user= signal<{ name: string; email: string} | null>(null);
  private _role= signal<Role | null>(null);

  reload = signal(0);
  loading = signal(false);

  user = computed(() => this._user());
  role = computed(() => this._role() );

  constructor() {
    const token = localStorage.getItem(this.KEY_TOKEN);
    const role = localStorage.getItem(this.KEY_ROLE);
   if (token){
    this._user.set({ name: 'User', email: 'user@user.com'} );
    if (role === 'admin' || role === 'user') this._role.set(role);
    if (role==="admin" || role==="user") this._role.set(role);
   }
  }

  loaduser(){
    this.loading.set(true);
    setTimeout;() => {
      this.user.set({ name: 'David Rodriguez', email: "brayan"})
  }
}
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { apiEndpoint } from '../constants/constants';
import { map } from 'rxjs';
import { TokenService } from './token.service';
import { ILogin, ILoginResponse } from '../model/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  onLogin(data: ILogin) {
    return this.http
      .post<ILoginResponse>(`${apiEndpoint.AuthEndpoint.login}`, data)
      .pipe(
        map((response) => {
          if (response) {
            this.tokenService.setToken(response.token);
          }
          return response;
        })
      );
  }

  onLogout() {
    this.http.post(`${apiEndpoint.AuthEndpoint.logout}`, '').subscribe({
      next: (response) => {
        this.tokenService.removeToken();
      },
    });
  }
}
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'

import { HttpUtilService } from './http-ultil.service'

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    private httpUtilService: HttpUtilService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if(this.httpUtilService.obterDadosUsuario() !== ''){
      return true
    }

    this.router.navigate(['/login'])
  }
}

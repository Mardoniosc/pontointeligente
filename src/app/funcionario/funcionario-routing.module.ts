import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import {
  FuncionarioComponent,
  LancamentoComponent,
  ListagemComponent
 } from './components'

export const FuncionarioRoutes: Routes  = [
  {
    path: 'funcionario',
    component: FuncionarioComponent,
    children:[
      { path: '', component: LancamentoComponent },
      { path: 'listagem', component: ListagemComponent }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(FuncionarioRoutes) ],
  exports: [ RouterModule ]
})

export class FuncionarioRoutingModule {
}

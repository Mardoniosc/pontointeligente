import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';

import { MatPaginator } from '@angular/material'

import { PtBrMatPaginatorIntl, TipoPipe, DataPipe } from './';

@NgModule({
  declarations: [
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  providers: [ PtBrMatPaginatorIntl ]
})
export class SharedModule { }

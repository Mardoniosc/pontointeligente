import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment'

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(data: any, ...args: any[]): any {
    return moment(data).format('DD/MM/YYYY HH:mm:ss');
  }

}

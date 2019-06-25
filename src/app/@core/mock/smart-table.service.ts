import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {


  data = [{
    id: 73581,
    firstName: 'Imad',
    lastName: 'Archid',
    username: 'i.archid@aui.ma',
    email: '0622251061',
    age: 'FYE 1101 02',
  }, {
    id: 65023,
    firstName: 'Yassine',
    lastName: 'Benhaddou',
    username: 'y.benhaddou@alumni.aui.ma',
    email: '0661615202',
    age: 'FYE 1102 03',
  }];

  getData() {
    return this.data;
  }
}

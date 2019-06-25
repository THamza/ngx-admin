import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Http } from '@angular/http'

import { SmartTableData } from '../../../@core/data/smart-table';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'ngx-lists',
  templateUrl: './lists.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
  `]
})
export class ListsComponent {
data: any
newWindow: any
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-person"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      std_id: {
        title: 'ID',
        type: 'number',
      },
      first_name: {
        title: 'First Name',
        type: 'string',
      },
      last_name: {
        title: 'Last Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      phone_number: {
        title: 'Phone Number',
        type: 'string',
      },
      age: {
        title: 'Section',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData , private http: HttpClient) {
    this.http.get('http://localhost:3000/students').subscribe((res)=>{
      this.data = res;
      this.source.load(this.data);
  });
    
    
   }

  

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}

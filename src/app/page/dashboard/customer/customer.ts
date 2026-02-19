import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponse, CustomerModel } from '../../../../model/type';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  imports: [CommonModule,FormsModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer implements OnInit{
  customerList: Array<CustomerModel> = [];
  constructor(private http:HttpClient, private cdr:ChangeDetectorRef){}
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.http.get<ApiResponse<Array<CustomerModel>>>("http://localhost:8080/api/customer").subscribe(data=>{
      this.customerList=data.content;
      this.cdr.detectChanges();
    });
  }
}

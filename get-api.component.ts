import { Component } from '@angular/core';
import  { GetapiserviceService } from '../getapiservice.service'

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetAPiComponent {
  apiData:any[]=[];
  getApiData:any;
  // submit=true

  
  
  // getApiService
  

   constructor(private callApiService:GetapiserviceService)
{}
ngOnInit(){
  this.fetchApiData();
}

  fetchApiData() {
    this.callApiService.getApiData().subscribe(
    (
      data:any[])=>{
        this.apiData=data;
      },
        (error:any)=>{
          console.error('API Error', error)
        }

    );
    
  }
}
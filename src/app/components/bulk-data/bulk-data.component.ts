import { Component, OnInit } from '@angular/core';
import { BulkDataResponse } from 'src/app/models/bulkData.model';
import { BulkService } from 'src/app/services/bulkDate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bulk-data',
  templateUrl: './bulk-data.component.html',
  styleUrls: ['./bulk-data.component.scss']
})
export class BulkDataComponent implements OnInit {
  public fileName: string;
  public logs: string[];
  public showButton = false;
  public file: File = null;
  public response: BulkDataResponse;
  constructor(private bulkService: BulkService) { }

  ngOnInit(): void {
  }

  public uploadFile(event){
    this.file = event.target.files[0];

    if(this.file){
      this.fileName = this.file.name;
      this.showButton = true;

    }
  }

  public processFile(){
    if(!this.file){
      Swal.fire({
        title: '¡Error en el archivo!',
        text: "¡Debes de seleccionar archivo!",
        icon: 'warning'
      })
    } else {
      Swal.showLoading();
      this.bulkService.bulkData(this.file).subscribe(data => {
        this.response = data as BulkDataResponse;
        this.logs = this.response.logs;
        Swal.close();
      }, 
      (error) => {
        this.handleError(error);
      })
    }
  }

  handleError(error){
    Swal.fire('Oops...', error.message, 'error');
  }
}

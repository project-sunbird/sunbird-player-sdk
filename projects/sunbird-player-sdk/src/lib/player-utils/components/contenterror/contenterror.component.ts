import { Component, Input, OnInit } from '@angular/core';
import { errorMessage } from '../../enums/exceptionLogs';

@Component({
  selector: 'sb-player-contenterror',
  templateUrl: './contenterror.component.html',
  styleUrls: ['./contenterror.component.scss']
})
export class ContenterrorComponent implements OnInit {
  @Input() errorMessage : string;
  message : string;

  ngOnInit() {
    if(this.errorMessage){
      this.message = this.errorMessage;
    } else {
      this.message = errorMessage.contentPlayFailed;
    }

  }

}

import { Component, Input, OnInit } from '@angular/core';
import { errorMessage } from '../../enums/exceptionLogs';
import { contentErrorMessage } from '../../interfaces/errorMessage';

@Component({
  selector: 'sb-player-contenterror',
  templateUrl: './contenterror.component.html',
  styleUrls: ['./contenterror.component.scss']
})
export class ContenterrorComponent implements OnInit {
  @Input() errorMsg: contentErrorMessage;
  message: string;


  ngOnInit() {
    if (!this.errorMsg) {
    this.errorMsg = {
      messageHeader: errorMessage.contentPlayFailedHeader,
      messageTitle: errorMessage.contentPlayFailTitle
    };
   }
  }

}

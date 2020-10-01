import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DownloadPdfPopupComponent } from './components/download-pdf-popup/download-pdf-popup.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { EndPageComponent } from './components/end-page/end-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PdfMenuComponent } from './components/pdf-menu/pdf-menu.component';



@NgModule({
  declarations: [DownloadPdfPopupComponent,
    StartPageComponent, EndPageComponent,
     SidebarComponent, PdfMenuComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DownloadPdfPopupComponent, StartPageComponent,
    EndPageComponent, SidebarComponent, PdfMenuComponent]
})
export class CoreModule { }

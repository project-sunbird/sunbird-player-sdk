import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DownloadPopupComponent } from './components/download-popup/download-popup.component';
import { EndPageComponent } from './components/end-page/end-page.component';
import { SideMenuIconComponent } from './components/side-menu-icon/side-menu-icon.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StartPageComponent } from './components/start-page/start-page.component';



@NgModule({
  declarations: [DownloadPopupComponent,
    StartPageComponent, EndPageComponent,
     SidebarComponent, SideMenuIconComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DownloadPopupComponent, StartPageComponent,
    EndPageComponent, SidebarComponent, SideMenuIconComponent]
})
export class CoreModule { }

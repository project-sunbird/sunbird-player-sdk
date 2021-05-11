import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NextNavigationComponent } from './components/next-navigation/next-navigation.component';
import { PreviousNavigationComponent } from './components/previous-navigation/previous-navigation.component';
import { HeaderComponent } from './components//header/header.component';
import { ContenterrorComponent } from './components/contenterror/contenterror.component';


@NgModule({
  declarations: [HeaderComponent,
    NextNavigationComponent, PreviousNavigationComponent, ContenterrorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ HeaderComponent,
    NextNavigationComponent, PreviousNavigationComponent , ContenterrorComponent]
})
export class PlayerUtilsModule { }

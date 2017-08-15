import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule,
  MdButtonModule,
  MdTabsModule,
  MdCardModule,
  MdSlideToggleModule,
  MdInputModule,
  MdCheckboxModule,
  MdRadioModule,
  MdSelectModule,
  MdListModule,
  MdSnackBarModule,
  MdDatepickerModule,
  MdNativeDateModule
} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdButtonModule,
    MdTabsModule,
    MdCardModule,
    MdSlideToggleModule,
    MdInputModule,
    MdCheckboxModule,
    MdRadioModule,
    MdSelectModule,
    MdListModule,
    MdSnackBarModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdButtonModule,
    MdTabsModule,
    MdCardModule,
    MdSlideToggleModule,
    MdInputModule,
    MdCheckboxModule,
    MdRadioModule,
    MdSelectModule,
    MdListModule,
    MdSnackBarModule,
    MdDatepickerModule,
    MdNativeDateModule
  ]
})
export class NgMaterialModule { }

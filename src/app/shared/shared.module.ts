import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDividerModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatRadioModule
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatDatepickerModule,
    MatDividerModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatRadioModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
  ],
  exports: [
    MatButtonModule,
    MatDatepickerModule,
    MatDividerModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatRadioModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
  ],
})
export class SharedModule {}

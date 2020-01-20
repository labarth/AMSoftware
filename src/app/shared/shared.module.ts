import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
  ],
})
export class SharedModule {}

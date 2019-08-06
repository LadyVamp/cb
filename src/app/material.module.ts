
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule, MatTableModule, MatDialogModule} from '@angular/material';


@NgModule({
  imports: [ReactiveFormsModule,MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule,MatIconModule,MatTableModule,MatInputModule,MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule,MatTableModule,MatInputModule,MatDialogModule]
})


export class MaterialModule{}
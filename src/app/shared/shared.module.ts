import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatGridListModule,  MatIconModule,  MatInputModule,  MatListModule,  MatMenuModule,  MatNativeDateModule,  
  MatPaginatorModule,  MatProgressBarModule,  MatProgressSpinnerModule,
  MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule,
  MatSnackBarModule, MatSortModule, MatStepperModule,  MatTooltipModule,
} from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatToolbarModule,
    MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
    MatGridListModule,  MatIconModule,  MatInputModule,  MatListModule,  MatMenuModule,  MatNativeDateModule,
    MatPaginatorModule,  MatProgressBarModule,  MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule,  
    MatTooltipModule
  ],
  exports: [MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatToolbarModule,
    MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
    MatGridListModule,  MatIconModule,  MatInputModule,  MatListModule,  MatMenuModule,  MatNativeDateModule,
    MatPaginatorModule,  MatProgressBarModule,  MatProgressSpinnerModule,
    MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
    MatSortModule, MatStepperModule,  MatTooltipModule,
  ],
})

export class SharedModule { }

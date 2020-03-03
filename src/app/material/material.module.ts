import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkTableModule } from '@angular/cdk/table';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [],
    imports: [
        CommonModule, CdkTableModule, MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule,
        MatIconModule, MatInputModule, MatOptionModule, MatPaginatorModule, MatMenuModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule,
        MatRadioModule, MatSelectModule, MatSidenavModule, MatSortModule, MatStepperModule, MatSnackBarModule, MatTabsModule, MatTableModule, MatToolbarModule,
        MatTooltipModule, DragDropModule, MatGridListModule, MatExpansionModule, MatNativeDateModule
    ],
    exports: [
        CommonModule, CdkTableModule, MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule,
        MatIconModule, MatInputModule, MatOptionModule, MatPaginatorModule, MatMenuModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule,
        MatRadioModule, MatSelectModule, MatSidenavModule, MatSortModule, MatStepperModule, MatSnackBarModule, MatTabsModule, MatTableModule, MatToolbarModule,
        MatTooltipModule, DragDropModule, MatGridListModule, MatExpansionModule, MatNativeDateModule
    ]
})
export class MaterialModule { }

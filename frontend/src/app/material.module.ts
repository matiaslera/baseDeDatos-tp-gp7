import { NgModule } from '@Angular/core'

import {
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatSortModule,
} from '@Angular/material'
@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatSelectModule,
        MatSortModule,
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatSelectModule,
        MatSortModule,
    ]
})
export class MaterialModule { }
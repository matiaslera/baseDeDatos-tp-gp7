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
    ]
})
export class MaterialModule { }
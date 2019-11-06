import { NgModule } from '@Angular/core'

import { MatButtonModule, MatInputModule, MatCardModule, MatTableModule, MatIconModule, MatToolbarModule, MatListModule, MatDialogModule }from '@Angular/material'
@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatDialogModule
    ]
})
export class MaterialModule { }
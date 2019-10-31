import { NgModule } from '@Angular/core'

import { MatButtonModule, MatInputModule, MatCardModule, MatTableModule, MatIconModule, MatToolbarModule, MatListModule }from '@Angular/material'
@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule
    ]
})
export class MaterialModule { }
import { NgModule } from '@Angular/core'

import { MatButtonModule, MatInputModule, MatCardModule, MatTableModule, MatIconModule }from '@Angular/material'
@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatIconModule
    ]
})
export class MaterialModule { }
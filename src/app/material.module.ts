import { NgModule } from '@Angular/core'

import { MatButtonModule, MatInputModule, MatCardModule, MatTableModule }from '@Angular/material'
@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatTableModule
    ]
})
export class MaterialModule { }
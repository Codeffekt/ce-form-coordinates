import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBlockStoreService } from '@codeffekt/ce-core';
import { FormCoordinatesBlockComponent } from './form-coordinates-block/form-coordinates-block.component';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
    ],
    exports: [
        FormCoordinatesBlockComponent
    ],
    declarations: [
        FormCoordinatesBlockComponent
    ],
    providers: [],
})
export class CeFormCoordinatesModule {
    constructor(readonly store: FormBlockStoreService) {
        store.setComponents({
            'coordinates': FormCoordinatesBlockComponent,
        });
    }
}

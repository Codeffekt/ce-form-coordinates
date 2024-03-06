import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
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

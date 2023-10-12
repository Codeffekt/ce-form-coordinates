import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormBlock } from '@codeffekt/ce-core-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form!: FormGroup;

  formBlock: FormBlock = {
    "type": "coordinates",
    "field": "coordinates",
    "value": [
      0,
      0,
      0
    ],
    "defaultValue": [
      0,
      0,
      0
    ],
    "params": {
      "useConverter": true
    }
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'coordinates': this.formBlock.value
    });
  }
}

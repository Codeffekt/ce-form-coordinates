import { Component, OnInit } from '@angular/core';
import { FormBlockComponent } from '@codeffekt/ce-core';
import { CeFormCoordinatesService } from '../ce-form-coordinates.service';

const WGS84 = "WGS84";

const PROJECTIONS: Array<{ name: string, value: string }> = [  
  { value: WGS84, name: "WGS 84" },
  { value: "EPSG:2154", name: "RGF93 v1 / Lambert-93"},
  { value: "EPSG:3950", name: "RGF93 / CC50" },
  { value: "EPSG:3949", name: "RGF93 / CC49" },
  { value: "EPSG:3948", name: "RGF93 / CC48" },
  { value: "EPSG:3947", name: "RGF93 / CC47" },
  { value: "EPSG:3946", name: "RGF93 / CC46" },
  { value: "EPSG:3945", name: "RGF93 / CC45" },
  { value: "EPSG:3944", name: "RGF93 / CC44" },
  { value: "EPSG:3943", name: "RGF93 / CC43" },
  { value: "EPSG:3942", name: "RGF93 / CC42" }
];

const DEFAULT_COORDS_NAME = {
  "x": "x",
  "y": "y",
  "z": "z"
};

const WGS84_COORDS_NAME = {
  "x": "longitude",
  "y": "latitude",
  "z": "z"
};

@Component({
  selector: 'ce-form-coordinates-block',
  templateUrl: './form-coordinates-block.component.html',
  styleUrls: ['./form-coordinates-block.component.scss']
})
export class FormCoordinatesBlockComponent extends FormBlockComponent<number[]> implements OnInit {

  useConverter = false;
  projections = PROJECTIONS;

  inputProj = WGS84;
  inputCoords: number[] = [0, 0];

  coordsName = DEFAULT_COORDS_NAME;

  constructor(private coordsService: CeFormCoordinatesService) {
    super();
  }

  ngOnInit() {
    if (this.formBlock.params?.useConverter) {
      this.useConverter = true;
      this.coordsService.loadRGF93Defs();
      this.coordsName = WGS84_COORDS_NAME;
    }
    this.inputCoords = [this.value[0], this.value[1]];
  }

  updateX(xVal: number) {
    this.inputCoords[0] = xVal;
    this.transformInputCoordsToValue();    
  }

  updateY(yVal: number) {
    this.inputCoords[1] = yVal;
    this.transformInputCoordsToValue();    
  }

  updateZ(zVal: number) {
    this.value = [this.value[0], this.value[1], zVal];
  }

  onProjChange() {
    this.coordsName = this.inputProj === WGS84 ? WGS84_COORDS_NAME : DEFAULT_COORDS_NAME;
    this.inputCoords = [...this.convertCoords(WGS84, this.inputProj, [this.value[0], this.value[1]])];
  }

  private transformInputCoordsToValue() {
    this.value = [...this.convertCoords(this.inputProj, WGS84, this.inputCoords), this.value[2]];
  }

  private convertCoords(src: string, dst: string, srcCoords: number[]) {
    if (this.useConverter && src !== dst) {
      return this.coordsService.convert(src, dst, [...srcCoords]);      
    } else {
      return [...srcCoords];
    }
  }  
}
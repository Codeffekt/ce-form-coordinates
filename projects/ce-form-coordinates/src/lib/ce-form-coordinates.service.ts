import { Injectable } from "@angular/core";
import proj4 from 'proj4';

const PROJ4_RGF93_DEFS: [string, string][] = [
    ["EPSG:2154", "+proj=lcc +lat_0=46.5 +lon_0=3 +lat_1=49 +lat_2=44 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"],
    ["EPSG:3942", "+proj=lcc +lat_0=42 +lon_0=3 +lat_1=41.25 +lat_2=42.75 +x_0=1700000 +y_0=1200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"],
    ["EPSG:3943", "+proj=lcc +lat_0=43 +lon_0=3 +lat_1=42.25 +lat_2=43.75 +x_0=1700000 +y_0=2200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"],
    ["EPSG:3944", "+proj=lcc +lat_0=44 +lon_0=3 +lat_1=43.25 +lat_2=44.75 +x_0=1700000 +y_0=3200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"],
    ["EPSG:3945", "+proj=lcc +lat_0=45 +lon_0=3 +lat_1=44.25 +lat_2=45.75 +x_0=1700000 +y_0=4200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"],
    ["EPSG:3946", "+proj=lcc +lat_0=46 +lon_0=3 +lat_1=45.25 +lat_2=46.75 +x_0=1700000 +y_0=5200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"],    
    ["EPSG:3947", "+proj=lcc +lat_1=46.25 +lat_2=47.75 +lat_0=47 +lon_0=3 +x_0=1700000 +y_0=6200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
    ["EPSG:3948", "+proj=lcc +lat_1=47.25 +lat_2=48.75 +lat_0=48 +lon_0=3 +x_0=1700000 +y_0=7200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
    ["EPSG:3949", "+proj=lcc +lat_1=48.25 +lat_2=49.75 +lat_0=49 +lon_0=3 +x_0=1700000 +y_0=8200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
    ["EPSG:3950", "+proj=lcc +lat_0=50 +lon_0=3 +lat_1=49.25 +lat_2=50.75 +x_0=1700000 +y_0=9200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs"],
];

@Injectable({ providedIn: 'root' })
export class CeFormCoordinatesService {

    constructor() { }

    loadRGF93Defs() {
        proj4.defs(PROJ4_RGF93_DEFS);
    }

    convert(src: string, dst: string, coords: number[]) {
        return proj4<number[]>(src, dst, coords);
    }
}
import { Injectable, Input } from '@angular/core';
import { UpdateService } from './Services';
import { Shape } from './shape';

@Injectable()
export class ShapeService {
  aShape: Shape;
  shapes: Shape[] = [];

  constructor(private dataService: UpdateService) { }

  ngOnInit() {
    this.getValue();
  }

  getValue() {
    this.dataService.getValues().subscribe(result => {
       this.aShape = result;
    });

    console.log("Data fetched: " + this.aShape);
  }

  getShapes() {
    this.dataService.getValues().subscribe(result => {
      this.aShape = result;
      this.shapes.push(this.aShape);

      console.log(this.shapes);
   });
    
   return this.shapes;
  }
}

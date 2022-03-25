import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { UpdateService } from '../Services';
import { Shape } from '../shape';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css'],
})
export class SvgComponent implements OnInit {
  constructor(private dataService: UpdateService) { }

  drawingInit = false;
  drawing = false;
  @Input() rectToDraw: Shape[];
  shapeType = 'rectangle';

  @Input() currentShape: Subject<Shape>;

  ngOnInit() {
    //Get data from jSon file on initial load
    this.dataService.getValues().subscribe(result => {
      this.aShape = result;

      console.log("Got: " + this.aShape.x);
    });
  }

  //The shape to be drawn
  createdShape: Shape;
  aShape: Shape;

  startDrawing(evt: MouseEvent) {
    this.dataService.getValues().subscribe(result => {
      this.aShape = result;

      //Check if coordinates x and y doesn't change, then start resizing rectangle with perimeters loaded from jSon file
      if (this.aShape && this.createdShape == null && evt.offsetX >= this.aShape.x && 
          evt.offsetX <= this.aShape.x + this.aShape.w && evt.offsetY >= this.aShape.y && evt.offsetY <= this.aShape.y + this.aShape.h) {

        this.aShape = {
          type: this.shapeType,
          x: this.aShape.x,
          y: this.aShape.y,
          w: 0,
          h: 0,
        };

        console.log("Got again: " + this.aShape.x);
        this.drawingInit = true;
      }
      //Check if coordinates x and y doesn't change, then start resizing the newly created rectangle rather than the predefined one from jSon file
      else if (
        this.createdShape && evt.offsetX >= this.createdShape.x && evt.offsetX <= this.createdShape.x + this.createdShape.w &&
        evt.offsetY >= this.createdShape.y && evt.offsetY <= this.createdShape.y + this.createdShape.h) {
        this.createdShape = {
          type: this.shapeType,
          x: this.createdShape.x,
          y: this.createdShape.y,
          w: 0,
          h: 0,
        };

        this.drawing = true;
      } 
      //Start drawing new rectangle
      else {
        this.createdShape = {
          type: this.shapeType,
          x: evt.offsetX,
          y: evt.offsetY,
          w: 0,
          h: 0,
        };

        this.drawing = true;
      }

      if (this.drawingInit) {
        this.rectToDraw.fill(this.aShape);
      } else if (this.drawing) {
        this.rectToDraw.fill(this.createdShape);
      }
    });
  }

  keepDrawing(evt: MouseEvent) {
    //Keep drawing the one loaded from the jSon file
    if (this.drawingInit) {
      this.aShape.w = evt.offsetX - this.aShape.x;
      this.aShape.h = evt.offsetY - this.aShape.y;

      console.log("Got again again: " + this.aShape.x);
    } 
    //Keep drawing the newly created rectangle
    else if (this.drawing) {
      this.createdShape.w = evt.offsetX - this.createdShape.x;
      this.createdShape.h = evt.offsetY - this.createdShape.y;
    }
  }

  stopDrawing() {
    this.drawing = false;
    this.drawingInit = false;
  }
}

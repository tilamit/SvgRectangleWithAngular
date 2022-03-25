import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { Shape } from './shape';
import { ShapeService } from './shape.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit { 
  constructor(private shapeService: ShapeService) {}

  title: string = 'Shape - Rectangle';
  shapes: Shape[];

  ngOnInit() {
    //Get predefined perimeters for the rectangle
    this.shapes = this.shapeService.getShapes();
  }
}

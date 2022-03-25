import { Component, OnInit, Input } from '@angular/core';
import { UpdateService } from '../Services';
import { Shape } from '../shape';

@Component({
  selector: 'app-shape-form',
  templateUrl: './shape-form.component.html',
  styleUrls: ['./shape-form.component.css']
})
export class ShapeFormComponent implements OnInit {
  constructor(private dataService: UpdateService) { }
  @Input() rectPerimeter: Shape[];

  data: Shape;

  ngOnInit() {}

  //Update perimeters in jSon file
  btnUpdate() {
    alert("x: " + this.rectPerimeter[0].x + "y: " + this.rectPerimeter[0].y + "w: " + this.rectPerimeter[0].w + "h: " + this.rectPerimeter[0].h);

    let obj = {} as Shape;
    obj.type = "Rectangle";
    obj.x = this.rectPerimeter[0].x;
    obj.y = this.rectPerimeter[0].y;
    obj.w = this.rectPerimeter[0].w;
    obj.h = this.rectPerimeter[0].h;

    //Api call to update data in jSon file
    this.dataService.updateValues(obj).subscribe(result => {
    });

    //Api call to fetch data from jSon file
    this.dataService.getValues().subscribe(result => { this.data = result; console.log("Data fetched: " + this.data.type); })
  }
}
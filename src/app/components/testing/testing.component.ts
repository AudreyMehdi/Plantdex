import { Component, Input, OnInit } from '@angular/core';
import { Pre } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
  @Input() imageBla!: Pre;

  constructor() {}
}

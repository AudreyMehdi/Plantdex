import { Component } from '@angular/core';
import { Pre } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent {
isDisplay = true;

photo : Pre[] = [];

display(){
  this.isDisplay = ! this.isDisplay;
}
constructor(private imageService : ImageService) {}

ngOnInit(): void {
  this.imageService.getImage().subscribe((image:Pre[]) => {
   this.photo = [...image];
   console.log(this.photo);
  });
      }
      
}

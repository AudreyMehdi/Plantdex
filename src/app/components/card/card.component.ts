import { Component, Input, OnInit } from "@angular/core";
import { Plant } from "src/app/models/plant";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() unePlanteAAfficher!: Plant;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from "@angular/core";
import { Plant } from "../../models/plant";

@Component({
  selector: "app-plant-list",
  templateUrl: "./plant-list.component.html",
  styleUrls: ["./plant-list.component.css"],
})
export class PlantListComponent implements OnInit {
  @Input() plantsRecupDeLaHome!: Plant[];

  constructor() {}

  ngOnInit(): void {}
}
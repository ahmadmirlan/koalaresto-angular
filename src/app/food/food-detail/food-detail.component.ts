import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../reducers";
import { Food } from "../../models/food";

@Component({
  selector: "app-food-detail",
  templateUrl: "./food-detail.component.html",
  styleUrls: ["./food-detail.component.css"]
})
export class FoodDetailComponent implements OnInit {
  food: Food;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.food = this.route.snapshot.data['food'];
  }
}

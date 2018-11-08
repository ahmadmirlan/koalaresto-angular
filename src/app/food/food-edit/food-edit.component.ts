import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../reducers";
import { getToken } from "../../auth/auth.selector";
import { CreateNewFood } from "../food.actions";
import { Router } from "@angular/router";

@Component({
  selector: "app-food-edit",
  templateUrl: "./food-edit.component.html",
  styleUrls: ["./food-edit.component.css"]
})
export class FoodEditComponent implements OnInit {
  regulerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}
  token = "";
  ngOnInit() {
    this.store.pipe(select(getToken)).subscribe(tkn => {
      this.token = tkn;
    });
    this.regulerForm = this.fb.group({
      foodName: ["", Validators.required],
      description: [""],
      price: ["", Validators.required],
      picture: ["", Validators.required],
      keywords: [""]
    });
  }
  addFood() {
    const food = this.regulerForm.value;
    this.store.dispatch(new CreateNewFood({ food: food, token: this.token }));
    this.router.navigateByUrl('/foods');
  }
}

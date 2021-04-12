import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FortuneCookieService } from "../service/fortune-cookie.service";

@Component({
  selector: "dio-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public message = "";
  public group: FormGroup;
  public category = [
    "all",
    "bible",
    "computers",
    "cookie",
    "definitions",
    "miscellaneous",
    "people",
    "platitudes",
    "politics",
    "science",
    "wisdom",
  ];

  constructor(
    private fortuneService: FortuneCookieService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.group = this.fb.group({
      categoryValue: [this.category[0], Validators.required],
    });

    this.getNewText();
  }

  getNewText(): void {
    this.fortuneService
      .getFortune$(this.group.controls["categoryValue"].value)
      .subscribe((response) => (this.message = response.fortune));
  }
}

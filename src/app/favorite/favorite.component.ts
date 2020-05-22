import { Component, OnInit } from "@angular/core";

@Component({
  selector: "favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"],
})
export class FavoriteComponent implements OnInit {
  favoriteSelected;
  constructor() {
    this.favoriteSelected = false;
    // this.toggleFavoriteSelected();
  }

  ngOnInit(): void {}
  toggleFavoriteSelected = () =>
    (this.favoriteSelected = !this.favoriteSelected);
}

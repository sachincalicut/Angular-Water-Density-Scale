import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WaterdiagramComponent } from "./waterdiagram/waterdiagram.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WaterdiagramComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'water-cal';
}

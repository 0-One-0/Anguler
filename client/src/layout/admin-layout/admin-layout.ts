import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkWithHref } from "@angular/router";
@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {}

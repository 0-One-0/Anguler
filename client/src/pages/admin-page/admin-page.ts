import { Component } from '@angular/core';
import { AdminList } from '../../components/admin-list/admin-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  imports: [AdminList, RouterLink],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage {}

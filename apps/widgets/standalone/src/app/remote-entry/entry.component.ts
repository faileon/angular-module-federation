import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ng-mfa-widgets-standalone-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class RemoteEntryComponent {}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'src/app/shared/interfaces/menu-items';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu: MenuItem[] = [
    {text: 'Component Input Example', routerLink: 'component-input-example'},
    {text: '@For Directive Example', routerLink: 'for-directive-example'},
    {text: 'Event Bind Example', routerLink: 'event-bind-example'},
    {text: 'Simple Datatable Example', routerLink: 'simple-datatable-example'},
    {text: 'Component Output Example', routerLink: 'component-output-example'},
    {text: 'Template Driven Form Example', routerLink: 'template-driven-from-example'},
    {text: 'Reactive Form Example', routerLink: 'reactive-form-example'},
    {text: 'Http Client Example', routerLink: 'http-client-example'},
    {text: 'User Registration Example', routerLink: 'user-registration-example'},
    {text: 'Restricted User Component', routerLink: 'restricted-content-example'},
    {text: 'Fun for Nerds Game', routerLink: 'fun-for-nerds'},
    {text: 'CRUD example', routerLink: 'crud-example'}
  ];
}

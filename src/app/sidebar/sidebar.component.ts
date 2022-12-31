import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/create-user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
  { path: 'users', title: 'Table List',  icon:'pe-7s-note2', class: '' },
  { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
  { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
  { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
  { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

export const ROUTESADMIN: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/create-user', title: 'Créer Utilisateur',  icon:'pe-7s-user', class: '' },
  { path: '/users', title: 'Utilisateurs',  icon:'pe-7s-note2', class: '' },
  { path: '/new-classe', title: 'Créer classe',  icon:'pe-7s-news-paper', class: '' },
  { path: '/classes', title: 'Classes',  icon:'pe-7s-news-paper', class: '' },
];

export const ROUTESTEACHER: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/classes', title: 'Mes classes',  icon:'pe-7s-news-paper', class: '' },
  { path: '/documents', title: 'Mes documents',  icon:'pe-7s-news-paper', class: '' },
  { path: '/upload-file', title: 'Demmande impression',  icon:'pe-7s-user', class: '' },
];

export const ROUTESAGENT: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/files', title: 'Demmandes',  icon:'pe-7s-user', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  role: String = "";


  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("connected") !== 'true'){
      this.router.navigate(['./login']);
    }
    this.role = localStorage.getItem("role");
    if(this.role == 'admin') {
      this.menuItems = ROUTESADMIN.filter(menuItem => menuItem);
    }else if(this.role == 'teacher') {
      this.menuItems = ROUTESTEACHER.filter(menuItem => menuItem);
    }else{
      this.menuItems = ROUTESAGENT.filter(menuItem => menuItem);
    }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  logOut() {
      this.router.navigate(['./login']);
  }
}

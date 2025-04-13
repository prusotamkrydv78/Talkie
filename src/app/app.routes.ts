import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'messages', loadComponent: () => import('./pages/messages/messages.component').then(m => m.MessagesComponent) },
  { path: 'video-calls', loadComponent: () => import('./pages/video-calls/video-calls.component').then(m => m.VideoCallsComponent) },
  { path: 'groups', loadComponent: () => import('./pages/groups/groups.component').then(m => m.GroupsComponent) },
  { path: 'media', loadComponent: () => import('./pages/media/media.component').then(m => m.MediaComponent) },
  { path: 'network', loadComponent: () => import('./pages/network/network.component').then(m => m.NetworkComponent) },
  { path: '**', redirectTo: 'home' }
];

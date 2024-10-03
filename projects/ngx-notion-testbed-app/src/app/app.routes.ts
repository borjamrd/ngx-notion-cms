import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./views/about-view/about-view.component').then(m => m.AboutViewComponent)
    },
    {
        path: 'posts',
        loadComponent: () => import('./views/posts-view/posts-view.component').then(m => m.PostsViewComponent)
    },
    {
        path: 'posts/:post',
        loadComponent: () => import('./views/post-view/post-view.component').then(m => m.PostViewComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./views/projects-view/projects-view.component').then(m => m.ProjectsViewComponent)
    },
    {
        path: 'projects/:project',
        loadComponent: () => import('./views/project-view/project-view.component').then(m => m.ProjectViewComponent)
    }
];

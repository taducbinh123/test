import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendLayoutComponent } from './frontend-layout/frontend-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { PostComponent } from './post/post/post.component';
import { PostLayoutComponent } from './post/post-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FrontendLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'post',
        component: PostLayoutComponent,
        children: [
          {
            path: '',
            component: PostComponent
          },
          {
            path: 'edit/:id',
            component: EditPostComponent
          }

        ]
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },

    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }

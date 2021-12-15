import { AppShareModule } from './../app-share/app-share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendLayoutComponent } from './frontend-layout/frontend-layout.component';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post/post.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { PostLayoutComponent } from './post/post-layout.component';


@NgModule({
  declarations: [
    FrontendLayoutComponent,
    DashboardComponent,
    UsersComponent,
    PostComponent,
    CategoriesComponent,
    EditPostComponent,
    PostLayoutComponent
  ],
  imports: [
    CommonModule,
    AppShareModule,
    FrontendRoutingModule,
    CKEditorModule
  ]
})
export class FrontendModule { }

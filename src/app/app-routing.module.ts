import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Setup components
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SocialStoriesComponent } from "./social-stories/social-stories.component";
import { SocialStoryComponent } from "./social-story/social-story.component";
import { StudioComponent } from "./studio/studio.component";

const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'stories',
        component: SocialStoriesComponent
    },
    {
        path: 'story',
        component: SocialStoryComponent
    },
    {
        path: '',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
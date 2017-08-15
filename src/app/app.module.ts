import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Add Theme
import { NgMaterialModule } from './ng-material/ng-material.module';

// Firebase Setup
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Import the environment
import { environment } from '../environments/environment';

// App routing module
import {AppRoutingModule} from "./app-routing.module"

// App components declared
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudioComponent } from './studio/studio.component';
import { SocialStoriesComponent } from './social-stories/social-stories.component';
import { SocialStoryComponent } from './social-story/social-story.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudioComponent,
    SocialStoriesComponent,
    SocialStoryComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

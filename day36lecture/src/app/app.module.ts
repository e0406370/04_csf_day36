import { NgModule } from '@angular/core';

// import RouterModule
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { CatComponent } from './components/cat.component';
import { RabbitComponent } from './components/rabbit.component';
import { NumberComponent } from './components/number.component';

// list of Routes
const appRoutes: Routes = [
  // define the 'landing' page
  { path: '', component: MainComponent },

  // define other pages
  { path: 'cat', component: CatComponent },
  { path: 'rabbit', component: RabbitComponent },

  // :num == {num}
  { path: 'number/:num', component: NumberComponent },

  // wildcard routes (ensure this is the last in the list)
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,

    // declare other components
    MainComponent,
    CatComponent,
    RabbitComponent,
    NumberComponent,
  ],
  imports: [
    BrowserModule,

    // register the list of Routes
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  
  bootstrap: [AppComponent],
})
export class AppModule {}

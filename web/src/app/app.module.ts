import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './core/init/keycloak-init.factory';
import { ApiService } from './core/services/apiservice.service';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { HeaderComponent } from 'src/app/layouts/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './components/material.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true 
    },
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

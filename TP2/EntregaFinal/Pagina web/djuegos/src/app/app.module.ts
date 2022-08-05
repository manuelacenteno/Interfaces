import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { FooterComponent } from './footer/footer.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { JuegosDestacadoComponent } from './juegos-destacado/juegos-destacado.component';
import { JuegosListComponent } from './juegos-list/juegos-list.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { JuegoComponent } from './juego/juego.component';
import { JuegosSimilaresComponent } from './juegos-similares/juegos-similares.component';
import { JuegosFavoritosComponent } from './juegos-favoritos/juegos-favoritos.component';
import { LoadingComponent } from './loading/loading.component';
import { Loading2Component } from './loading2/loading2.component';
import { Loading3Component } from './loading3/loading3.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    FooterComponent,
    PublicidadComponent,
    FormLoginComponent,
    JuegosDestacadoComponent,
    JuegosListComponent,
    FormRegistroComponent,
    BusquedaComponent,
    FilterPipe,
    PerfilComponent,
    JuegoComponent,
    JuegosSimilaresComponent,
    JuegosFavoritosComponent,
    LoadingComponent,
    Loading2Component,
    Loading3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

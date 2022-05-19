
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersModule } from './users/users.module';
import { FormsModule } from '@angular/forms';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BindingComponent } from './binding/binding.component';
import { FooterComponent } from './footer/footer.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { CounterComponent } from './viewchild/counter/counter.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule} from '@angular/common/http';
import { UserDetailsComponent } from './form/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LifecycleComponent,
    LifecycleChildComponent,
    LifecycleChildComponent,
    ParentComponent,
    ChildComponent,
    BindingComponent,
    FooterComponent,
    ViewchildComponent,
    CounterComponent,
    FormComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

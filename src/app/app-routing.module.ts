import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UsersComponent } from "./components/users/users.component";
import { ProductsComponent } from "./components/products/products.component";



const routes:Routes=[
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'users',
        component:UsersComponent
    },
    {
        path:'products',
        component:ProductsComponent
    }
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}

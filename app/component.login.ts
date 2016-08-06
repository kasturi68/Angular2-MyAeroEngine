import {Component} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: './app/templates/loginForm.html',
    directives: [ROUTER_DIRECTIVES]
})

export class loginForm{
	data:Object={};
    
    constructor(private _router:Router){
    } 

    formSubmit(){
        var uname=this.data.username;
        var pwd=this.data.password;
        if(uname=="user" && pwd=="user"){
          this._router.navigate(['AeroEngineUserForumPage']);
        }
         else if(uname=="admin" && pwd=="admin"){
          this._router.navigate(['AeroEngineAdminForumPage']);
        }
    }

}
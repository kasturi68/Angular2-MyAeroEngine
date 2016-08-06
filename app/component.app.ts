import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {loginForm} from './component.login';
import {UserForumComponent} from './component.userforum';
import {AdminForumComponent} from './component.adminforum';
import {PostDetailsComponent} from './component.postDetails';


@Component({
    selector: 'root',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{
		path : "/",
		component: loginForm,
		name: "LoginForm" 
	},
	{
		path: "/adminForum",
		component: AdminForumComponent,
		name: "AeroEngineAdminForumPage"
	},
	{
		path: "/userForum",
		component: UserForumComponent,
		name: "AeroEngineUserForumPage"
	},
	{
		path: "/postDetails/:id",
		component: PostDetailsComponent,
		name:"AeroEnginePostDetailsPage"
		
	}
])

export class AeroEngineApp {
	
}
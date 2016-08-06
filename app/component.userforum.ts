import {Component} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {MyAeroEngineService} from "./component.service.myaeroengine";


@Component({
	templateUrl: './app/templates/userForum.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [MyAeroEngineService]
})

export class UserForumComponent {
	public posts = [];
	public postCounter = 1;
	
	constructor(private _httpPostsService:MyAeroEngineService){
		this.getPostsFromServer();
	}

	getPostsFromServer(){
		console.log("Entered getPostsFromServer method.");
		this._httpPostsService.getPosts()
		.subscribe((data) => {
			this.posts = data;
			this.postCounter = this.posts.length;
			console.log(this.postCounter);
         });
	}
}
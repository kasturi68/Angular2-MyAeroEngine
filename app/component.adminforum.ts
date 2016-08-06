import {Component} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {MyAeroEngineService} from "./component.service.myaeroengine";
import {Comment} from "./component.model.comment";

@Component({
	templateUrl: './app/templates/adminForum.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [MyAeroEngineService]
})

export class AdminForumComponent {
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

    formSubmit(){
		var post: Object = {};
		this.postCounter++;
		post.postTitle = this.postTitle;
		post.postID = this.postCounter;
		post.postDesc = this.postDesc;
		post.comments = [];
		post.postedBy = "admin";
		post.postedDateAndTime = new Date();
		this.posts.push(post);
		this.sendPostsDataToServer(post);
		this.postTitle="";
		this.postDesc="";
		console.log(this.posts);
	}

	sendPostsDataToServer(post:Object){
		console.log("Entered sendPostsDataToServer method.");
		this._httpPostsService.addPosts(post).subscribe(
                () => console.log("Job Done Post !")//run this code in all cases
            );
	}

	

	
}

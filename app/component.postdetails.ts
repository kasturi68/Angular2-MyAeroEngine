import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {MyAeroEngineService} from "./component.service.myaeroengine";
import { Component, OnInit } from 'angular2/core';

@Component({
	templateUrl: './app/templates/postDetails.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [MyAeroEngineService]
})

export class PostDetailsComponent implements OnInit {
	posts = [];
    post: Object = {};
	private postId:string;

	constructor( private _httpPostsService:MyAeroEngineService,private _params: RouteParams){
		
	}

	backToForum(){
		window.history.back();
	}

     ngOnInit(){
    	this.postId = this._params.get('id'); 
		console.log("postId : "+this.postId);   
		this.getPostByIdFromServer();  
   }

	getPostByIdFromServer(){
		console.log("Entered getPostByIdFromServer method.");
		this._httpPostsService.getPostsByID(this.postId)
		.subscribe((data) => {
			this.post = data;
         });
	}

   
	addComment(commMsg){
		var comment:Object = {};
		comment.commentedBy ="user";
		comment.commentedText = commMsg;
		comment.commentedDateAndTime = new Date();
		console.log("comment obj "+comment);
		this.post.comments.push(comment);
		this._httpPostsService.updatePosts(this.post).subscribe(
           	() => console.log("Job Done Put !")//run this code in all cases
        	);
		document.getElementById("comment").value="";
	}
}
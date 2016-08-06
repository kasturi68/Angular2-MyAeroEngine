import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class MyAeroEngineService {
	
	private _postsUrl:string = "http://localhost:8585/MyAeroEngine/posts";
	private _postByIdUrl:string = "http://localhost:8585/MyAeroEngine/post";

	constructor(private _http: Http){ }

    getPosts(){
		console.log("Entered getPosts method.");
		return this._http.get(this._postsUrl).map(res => res.json());
	}


	getPostsByID(postId){
		console.log("Entered getPostsById method."+postId);
		return this._http.get(this._postByIdUrl+"/"+postId).map(res => res.json());
	}

	addPosts(post: Object){
		console.log("Entered addPosts method.");
		let body = JSON.stringify(post);
		console.log(body);
		console.log(post);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "post" });
        return this._http.post(this._postsUrl, body,options)
            .map(res => res.json());
	}

	updatePosts(post: Object){
		console.log("Entered updatePosts method.");
		let body = JSON.stringify(post);
		console.log(post);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "put" });
        return this._http.post(this._postsUrl, body,options)
            .map(res => res.json());
	}


}
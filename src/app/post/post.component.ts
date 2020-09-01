import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../model/post.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post:Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    let postId = this.activatedRoute.snapshot.paramMap.get("id");
    this.post = postService.get(+postId);
  }

  ngOnInit(): void {
    /*
    this.subscriptions.add(
      this.activatedRoute.paramMap.subscribe(params => {
        this.id = parseInt(params.get('id'));
      })
    );
    */
  }

}

import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];

  constructor(
    private router: Router,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    if (this.posts.length == 0)
      this.posts = this.postService.getAll();
  }

  gotoPost(post: Post): void {
    this.router.navigateByUrl('post/' + post.id.toString());
  }

}

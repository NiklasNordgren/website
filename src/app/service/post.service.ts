import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [

    {
      id: 1,
      title: "The first post",
      dateString: "Tuesday, 2020-09-01",
      pictures: [],
      paragraphs: [
        "Ok here we go, first blog post I have ever written. Let´s start off with what my intentions are for this website. First of all I´m very excited that it is up and running on a public domain. I have never done something like this before without an organization or company backing me up.",
        "The main reason for this website is that I like creating stuff, always have. This will be the main platform I test and share stuff I create. For better or worse I easily get bored when if I´m not actively doing something. My aim is to update this website with new features weekly.",
        "Feel free to contact me in any way if you have any feedback, questions or insights",
      ],
    }

  ];

  constructor() { }

  getAll() {
    return this.posts;
  }

  get(id: number) {
    return this.posts.find(x => id === x.id);
  }

}

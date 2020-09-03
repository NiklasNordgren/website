import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [

    {
      id: 1,
      title: "First post",
      dateString: "2020-09-01",
      pictures: [],
      paragraphs: [
        "Ok here we go, first blog post I have ever written. Let's start off with what my intentions are for this website. First of all I'm very excited that it is up and running on a public domain. I have never done something like this before without an organization or company backing me up.",
        "The main reason for this website is that I like creating stuff, always have. This will be the main platform I test and share stuff I create. For better or worse I easily get bored if I'm not actively doing something. So this place will be the main outlet of my boredom. My aim is to update this website with new features weekly.",
        "",
        "Current backlog:",
        "* General look and feel of the application.",
        "* Images in blog posts.",
        "* Support all screen sizes, currently screen sizes < 320 pixels makes the main toolbar look really bad.",
        "* Refactoring of stinky code. :)",
        "* Fix the screen height, so the scrollbar doesn't appear when not needed.",
        "",
        "Feel free to contact me if you have feedback, questions or insights.",
      ],
    },
    {
      id: 2,
      title: "Progress",
      dateString: "2020-09-02",
      pictures: [],
      paragraphs: [
        "Since yesterday I have been coding quite a bit on this web application. Most of the work is concerning the look and feel of the application. That means there has been a lot of html and css googling/coding going on.",
        "I don't write vanilla html/css since the web app is built using Angular, which is a Javascript framework [1]. I'm also using a user interface component library called Angular Material that helps developers in creating attractive, consistent, and functional web applications [2]. The reasons behind these choices are mainly out of convenience. I'm familiar with both the framwork and the component library since both were used when we created Exam Center. Even when using these powerful web application programming tools you still have to make adjustments to make the web application look good on all various device screens. For debugging I use Google Chrome, and It's the only one I'h been using significantly [3]. In the future I'm going try out Microsoft Edge which is also Chromium based but more lightweight (faster) than Google Chrome [3][4][5].",
        "The screen height is now fixed, only the overflowing content make the scrollbar appear. Personally I think it did a lot for the look and feel of the application, I'h also added expandable panels in the blog/projects section to avoid text cluttering.",

        "[1] https://angular.io/",
        "[2] https://material.angular.io/",
        "[3] https://www.google.com/intl/en/chrome/",
        "[4] https://www.microsoft.com/en-us/edge",
        "[5] https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/",


      ],
    },
    {
      id: 3,
      title: "EmailJS",
      dateString: "2020-09-03",
      pictures: [],
      paragraphs: [

        "Today I'h worked a bit on the contact section of the web application. I spoke with the support team that is hosting my domain regarding the server environment. Since the servers they are offering is in the form of a PaaS (Platform as a Service), their customers don't have unlimited control of the server infrastructure [1]. Bottom line is, I can't create my own custom backend system on the server that is hosting this domain. Depending on future projects I will invest in another server where I have full privileges. If you are not familiar with the term backend it's the server part of a system that queries databases, run background jobs and interact with other systems.",
        "However I stumbled upon EmailJS which allows you to send Email directly from JavaScript (client). The signup is free, though you are restricted with 200 monthly requests [2].",
        "I'h updated the contact section with a form which allows users to fill in their email & message in order to send me emails. Feel free to try it out and tell me if you find any bugs (features) :).",
        "",
        "[1] https://en.wikipedia.org/wiki/Platform_as_a_service",
        "[2] https://www.emailjs.com/",
      ],
    }

  ].reverse();

  constructor() { }

  getAll() {
    return this.posts;
  }

  get(id: number) {
    return this.posts.find(x => id === x.id);
  }

}

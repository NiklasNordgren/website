import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  id: number;
  @Input() title: string;
  @Input() text: string;
  @Input() pictures: string[];

  private subscriptions = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.activatedRoute.paramMap.subscribe(params => {
        this.id = parseInt(params.get('id'));
      })
    );
  }

}

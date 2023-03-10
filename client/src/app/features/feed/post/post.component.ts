import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input('likes') likes!: number;
  @Input('message') message!: string;
  @Input('createdAt') createdAt!: string;
  @Input('createdBy') createdBy!: string;
  @Input('title') title!: string;

}

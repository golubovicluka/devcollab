import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from "../../shared/models/Post";
import { PostComponent } from './post/post.component';
import { UserWidgetComponent } from '../user/user-widget/user-widget.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, PostComponent, UserWidgetComponent, NavigationComponent],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  posts: Post[] = [
    { id: 1, title: "What is the meaning of life?", message: "This is first post made by me", createdBy: "Darko Davidovic", createdAt: "10/03/2023", likes: 82 },
    { id: 2, title: "Explanation how trackByFn works", message: "This is second post made by me", createdBy: "Luka Golubovic", createdAt: "24/02/2023", likes: 42 },
    { id: 3, title: "How can I better understand asp.net core?", message: "This is third post made by me", createdBy: "Stefan Krsanin", createdAt: "08/03/2023", likes: 33 },
  ]

  trackByPost(index: number, post: Post): number {
    return post.id;
  }

}

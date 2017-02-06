import { Component, OnInit } from '@angular/core';

import { BlogService } from 'app/services/blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: 'app/pages/blog/blog.component.html',
    styleUrls: ['app/pages/blog/blog.component.css'],
    providers: [ BlogService ]
})
export class BlogComponent implements OnInit {
    titlePage: string;
    posts: any[];
    constructor(private blogService: BlogService) {
        this.titlePage = "Блог и нововсти";
     }

    ngOnInit() {
        this.blogService.getPosts().subscribe(res => this.posts = res);
    }
}
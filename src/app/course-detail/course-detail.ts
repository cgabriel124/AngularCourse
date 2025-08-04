import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail {
  course: string = "";

  constructor (public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.course = params['courseName']);
  }
}

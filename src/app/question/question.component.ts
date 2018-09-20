import { Component, OnInit, NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MatButtonModule
  ],
  imports: [
    MatButtonModule
  ],
  providers: [],
})
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})

export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

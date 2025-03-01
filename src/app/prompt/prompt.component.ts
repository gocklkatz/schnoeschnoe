import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PromptService } from './prompt.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-prompt',
  imports: [FormsModule],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css'
})
export class PromptComponent {

  constructor(private promoptService: PromptService) {}

  prompt = '';
  response = '';

  generateResponse() {
    this.response = this.prompt;
    this.prompt = '';

    // this.promoptService.time().subscribe(
    //   (response: any) => {
    //     console.log(response);
    //     this.response = response;
    //   },
    //   (error: HttpErrorResponse) => {
    //     console.log(error.message);
    //   }
    // );
  }

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prompt',
  imports: [FormsModule],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css'
})
export class PromptComponent {
  prompt = '';
  response = '';

  generateResponse() {
    this.response = this.prompt;
    this.prompt = '';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    const text = 'Welcome to my professional portfolio. Here, you can learn more about my educational background and professional experience.';
    const typingElement = document.getElementById('typing-text');
  
    if (typingElement) {
      let i = 0;
      const typingSpeed = 50; // Speed in milliseconds
  
      const typeWriter = () => {
        if (i < text.length) {
          typingElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, typingSpeed);
        } else {
          // Remove the cursor blink animation after completion
          typingElement.style.animation = 'none';
          typingElement.style.borderRight = 'none';
        }
      };
  
      typeWriter();
    } else {
      console.error('Typing element not found');
    }
  }  
  
}

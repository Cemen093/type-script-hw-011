import { Component } from '@angular/core';
import { ZodiacService } from "../../services/zodiac-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedDate: string | undefined;
  zodiacSign: string | undefined;

  constructor(private zodiacService: ZodiacService) {}

  onDateSelected() {
    const selectedDate = this.selectedDate;
    if (selectedDate) {
      this.zodiacService.getZodiacSign(selectedDate).subscribe(zodiacSign => {
          this.zodiacSign = zodiacSign;
        },
        (error: any) => {
          console.error('Ошибка при получении знака зодиака:', error.message);
        }
      );
    }
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent {
  private countdownTime: number;
  private timerNumerics = {
    milliseconds: 1000,
    secondsInMinute: 60,
    minutesInHour: 60,
    hoursInDay: 24,
  };
  @Input() set time(value: string) {
    this.countdownTime = new Date(value).getTime();
  }

  get days(): string {
    const {
      milliseconds,
      secondsInMinute,
      minutesInHour,
      hoursInDay,
    } = this.timerNumerics;
    const days = Math.floor(
      this.getTimeDifference() /
        (hoursInDay * minutesInHour * secondsInMinute * milliseconds)
    );
    return this.formatTime(days);
  }

  get hours(): string {
    const {
      milliseconds,
      secondsInMinute,
      minutesInHour,
      hoursInDay,
    } = this.timerNumerics;
    const hours = Math.floor(
      (this.getTimeDifference() %
        (hoursInDay * minutesInHour * secondsInMinute * milliseconds)) /
        (minutesInHour * secondsInMinute * milliseconds)
    );
    return this.formatTime(hours);
  }

  get minutes(): string {
    const { milliseconds, secondsInMinute, minutesInHour } = this.timerNumerics;
    const minutes = Math.floor(
      (this.getTimeDifference() %
        (minutesInHour * secondsInMinute * milliseconds)) /
        (secondsInMinute * milliseconds)
    );
    return this.formatTime(minutes);
  }

  get seconds(): string {
    const { milliseconds, secondsInMinute } = this.timerNumerics;
    const seconds = Math.floor(
      (this.getTimeDifference() % (secondsInMinute * milliseconds)) /
        milliseconds
    );
    return this.formatTime(seconds);
  }

  private getTimeDifference(): number {
    const currenTime = new Date().getTime();
    return this.countdownTime - currenTime;
  }

  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}

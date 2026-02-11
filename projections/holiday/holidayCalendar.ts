export interface HolidayCalendar {
    isHoliday(date: Date): boolean;
    isWeeklyOff(date: Date): boolean;
  }
  
import { format, parseISO } from 'date-fns';

export const ONE_HOUR = 60 * 60 * 1000; // minutes * seconds * milliseconds
export const ONE_DAY = 24 * ONE_HOUR; // hours
export const ONE_WEEK = ONE_DAY * 7; // days

export const WeekDays = [
  {
    key: 1,
    label: 'Segunda-Feira',
  },
  {
    key: 2,
    label: 'Terça-Feira',
  },
  {
    key: 3,
    label: 'Quarta-Feira',
  },
  {
    key: 4,
    label: 'Quinta-Feira',
  },
  {
    key: 5,
    label: 'Sexta-Feira',
  },
  {
    key: 6,
    label: 'Sábado',
  },
  {
    key: 7,
    label: 'Domingo',
  },
];

export function getDayOfWeek(datetime: Date) {
  const weekDay = +format(datetime, 'e', { weekStartsOn: 1 });
  return WeekDays.find(value => value.key === weekDay)!.label;
}

export function getNumberOfDay(day: string) {
  const daySearched = WeekDays.find(d => d.label === day);

  return daySearched!.key;
}

export function getTime(datetime: Date) {
  return format(datetime, 'HH:mm');
}

export function getDateTime(time: string) {
  return parseISO(`2019-11-27 ${time}:00`);
}

export function addTime(datetime: Date, time: string) {
  const [hrs, mns] = time.split(':').map(v => parseInt(v));
  datetime.setHours(hrs, mns, 0, 0);
  if (datetime.getTime() < Date.now()) {
    datetime.setTime(datetime.getTime() + ONE_DAY);
  }
}

export function addDays(datetime: Date, day: string) {
  const nextDay = getNumberOfDay(day) % 7;
  const distanceFromNow = nextDay - datetime.getDay();
  const daysFromNow =
    distanceFromNow > 0 ? distanceFromNow : distanceFromNow + 7;
  datetime.setTime(datetime.getTime() + daysFromNow * ONE_DAY);
}

export const countDays = (time: number) => {
  return Math.floor(time / ONE_DAY);
};

export const countHours = (time: number) => {
  return Math.floor((time % ONE_DAY) / ONE_HOUR);
};
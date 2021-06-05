import { format, parseISO } from 'date-fns';

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

export function getTime(datetime: Date){
  return format(datetime, 'kk:mm');
};

export function getDateTime(time: string){
  return parseISO(`2019-11-27 ${time}:00`);
}
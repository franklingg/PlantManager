import { Dispatch, SetStateAction } from 'react';
import PushNotification from 'react-native-push-notification';
import { Plant } from '~/services/database';
import {
  addDays,
  addTime,
  getDayOfWeek,
  getTime,
  ONE_DAY,
  ONE_WEEK,
} from './TimeFormat';

const start = () => {
  PushNotification.createChannel(
    {
      channelId: 'plants-channel',
      channelName: 'Canal de Plantas',
      channelDescription:
        'Este canal contém todas as notificações de plantas do usuário',
      playSound: false,
    },
    () => {},
  );
};

// FIXME: CONSIDERING Plant.frequency.times as well
export const createPlantNotification = (
  plant: Plant,
  time: string,
  day?: string,
) => {
  start();
  PushNotification.getScheduledLocalNotifications(notifications => {
    notifications.forEach(notification => {
      if (notification.id === plant.id) {
        deleteNotification(plant.id);
      }
    });
  });

  const notificationTime = new Date();
  addTime(notificationTime, time);
  if (day) {
    addDays(notificationTime, day);
  }
  PushNotification.localNotificationSchedule({
    channelId: 'plant-channel',
    title: `${plant.name} precisa de você!`,
    message: 'Sua plantinha está esperando para ser regada. Vamos lá!',
    date: notificationTime,
    repeatType: plant.frequency.repeat_every,
    id: plant.id,
  });
};

export const deleteNotification = (plantId: number) => {
  PushNotification.cancelLocalNotifications({ id: String(plantId) });
};

export const setNextNotificationTime = (
  plantId: number,
  setTime: Dispatch<SetStateAction<string>>,
  setDay: Dispatch<SetStateAction<string>>,
) => {
  PushNotification.getScheduledLocalNotifications(notifications => {
    notifications.forEach(notification => {
      if (notification.data.id === String(plantId)) {
        const next = findNextNotificationTime(notification);
        setTime(getTime(next));
        setDay(getDayOfWeek(next));
      }
    });
  });
};

const findNextNotificationTime = (notification: any) => {
  let notificationTime = notification.date as Date;
  while (notificationTime < new Date()) {
    const howMuchToAdd =
      notification.repeatInterval === 'day' ? ONE_DAY : ONE_WEEK;
    notificationTime.setTime(notificationTime.getTime() + howMuchToAdd);
  }
  return notificationTime;
};

export const findClosestNotification = (
  setPlant: Dispatch<SetStateAction<number | undefined>>,
  setTime: Dispatch<SetStateAction<number>>,
) => {
  PushNotification.getScheduledLocalNotifications(notifications => {
    notifications.forEach(notification => {
      const next = findNextNotificationTime(notification);
      let timeFromNow = next.getTime() - new Date().getTime();
      setTime(oldTime => {
        if (!oldTime || timeFromNow < oldTime) {
          setPlant(parseInt(notification.data.id));
          return timeFromNow;
        }
        return oldTime;
      });
    });
  });
};

import PushNotification from 'react-native-push-notification';
import { Plant } from '~/services/database';
import { addDays, addTime } from './TimeFormat';

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
        PushNotification.cancelLocalNotifications({
          id: String(notification.id),
        });
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
    title: `Sua ${plant.name} precisa de você!`,
    message: 'Sua plantinha está esperando para ser regada. Vamos lá!',
    date: notificationTime,
    repeatType: plant.frequency.repeat_every,
    id: plant.id,
  });
};

const deleteNotification = (plantId: number) => {
  
}

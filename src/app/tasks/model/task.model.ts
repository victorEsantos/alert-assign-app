export interface Task {
  description?: string;
  alertFrequency?: Frequency; // MINUTELY, FIVE_MINUTES, DAILY, WEEKLY, MONTHLY
  rotationFrequency?: Frequency; // MINUTELY, FIVE_MINUTES, DAILY, WEEKLY, MONTHLY
  users?: string[]; // Lista de UUIDs de usuários associados à tarefa
}

export enum Frequency {
  MINUTELY = 'MINUTELY',
  FIVE_MINUTES = 'FIVE_MINUTES',
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY'
}

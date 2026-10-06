export interface CadenceStatus {
  lastSyncIso: string;
  nextScheduledPulseUtc: string;
  secondsUntilNextPulse: number;
  formattedCountdown: string;
  isThrottled: boolean;
}

const CADENCE_HOURS_UTC = [0, 6, 12, 18];

export function computeCadenceStatus(now: Date = new Date()): CadenceStatus {
  const currentUtcHour = now.getUTCHours();
  const currentUtcMinute = now.getUTCMinutes();
  const currentUtcSecond = now.getUTCSeconds();

  // Find next cadence hour
  let nextHour = CADENCE_HOURS_UTC.find(h => h > currentUtcHour);
  let nextDate = new Date(now);

  if (nextHour === undefined) {
    nextHour = CADENCE_HOURS_UTC[0];
    nextDate.setUTCDate(nextDate.getUTCDate() + 1);
  }

  nextDate.setUTCHours(nextHour, 0, 0, 0);

  const diffMs = Math.max(0, nextDate.getTime() - now.getTime());
  const diffSec = Math.floor(diffMs / 1000);

  const hours = Math.floor(diffSec / 3600);
  const minutes = Math.floor((diffSec % 3600) / 60);
  const seconds = diffSec % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');
  const formattedCountdown = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  return {
    lastSyncIso: now.toISOString(),
    nextScheduledPulseUtc: nextDate.toISOString(),
    secondsUntilNextPulse: diffSec,
    formattedCountdown,
    isThrottled: false
  };
}

import { songs } from "../constants";

// Dev config - stored as JSON file
export interface DevConfig {
  devMode: boolean;
  forceDate: string | null;
  showDevTools: boolean;
  notes?: string;
}

const msInDay = 86400000;
const startDate = new Date('4/15/2022');

export function getDevConfig(): DevConfig {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const config = require('../dev.config.json');
    console.log('[DevConfig] Loaded:', config);
    
    // For development, always enable if file exists
    if (process.env.NODE_ENV === 'development') {
      return {
        devMode: true,
        forceDate: config.forceDate || null,
        showDevTools: true,
        notes: config.notes
      };
    }
    
    return config;
  } catch (error) {
    console.log('[DevConfig] No config file found, dev mode disabled');
    return { devMode: false, forceDate: null, showDevTools: false };
  }
}

function getTodaysDate(): Date {
  const config = getDevConfig();
  if (config.devMode && config.forceDate) {
    return new Date(config.forceDate);
  }
  return new Date();
}

const todaysDate = getTodaysDate();
const index = Math.floor((todaysDate.getTime() - startDate.getTime()) / msInDay)

export const todaysSolution = songs[index % songs.length];
export const currentIndex = index;
export const devConfig = getDevConfig();

export interface ISoundSettings {
  volumePlus(): string;
  volumeMinus(): string;
  volumeMute(): string;
  setStereo(): string;
  setMono(): string;
  addEcho(): string;
}

export interface IVolumeSettings {
  soundSettings: ISoundSettings;
  volumeMinus(): string;
  volumeMute(): string;
}

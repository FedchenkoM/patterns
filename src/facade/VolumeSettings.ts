import { IVolumeSettings } from "./interfaces.js";
import { SoundSettings } from "./SoundSettings.js";

export class VolumeSettings implements IVolumeSettings {
  soundSettings = new SoundSettings();
  volumeMinus(): string {
    return this.soundSettings.volumeMinus();
  }
  volumePlus(): string {
    return this.soundSettings.volumePlus();
  }
  volumeMute(): string {
    return this.soundSettings.volumeMute();
  }
}

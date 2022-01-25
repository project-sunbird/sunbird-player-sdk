export interface NextContent {
  name: string;
  identifer?: string;
}

export interface ISideBarConfig {
  showShare: boolean;
  showDownload: boolean;
  showReplay: boolean;
  showExit: boolean;
  showPrint: boolean;
}

export interface ISideBarEvent {
  event: KeyboardEvent | MouseEvent;
  type: string;
}

export interface IHeaderConfig {
  rotation: boolean;
  goto: boolean;
  navigation: boolean;
  zoom: boolean;
}

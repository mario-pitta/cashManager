export interface ILink {
  path: string;
  label: string;
  icon: string;
}

export  class Link implements ILink {
  path: string;
  label: string;
  icon: string;

  constructor(path: string, label: string, icon: string) {
    this.path = path;
    this.label = label;
    this.icon = icon;
  }
}

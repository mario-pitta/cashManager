export default class Link {
    path: string;
    label: string;
    icon?: string;
  
    constructor(path: string, label: string, icon?: string) {
      this.path = path;
      this.label = label;
      this.icon = icon
    }
  }
  
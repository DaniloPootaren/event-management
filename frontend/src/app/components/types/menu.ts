interface MenuLink {
  label: string;
  link: string;
}

export interface Menu {
  attributes: {
    createdAt: string;
    label: string;
    link: string;
    submenu: MenuLink[];
  };
}

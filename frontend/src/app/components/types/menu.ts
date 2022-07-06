interface MenuLink {
    name: string,
    link: string,
}

export interface Menu {
    name: string,
    link: string,
    subLinks: MenuLink[],
}


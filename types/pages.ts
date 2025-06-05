interface pageInfo {
  order: number;
  name: string;
  url: string;
}
export const PagesInfo: pageInfo[] = [
  { order: 1, name: "Home", url: "/" },
  { order: 2, name: "About Us", url: "/pages/about-us" },
  { order: 3, name: "Contact", url: "/pages/contact" },
];

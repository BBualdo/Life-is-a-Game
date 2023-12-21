type Links = {
  key: string;
  href: string;
  title: string;
  disabled?: boolean;
};

const links: Links[] = [
  { key: "1", href: "/missions", title: "Missions" },
  { key: "2", href: "/achievements", title: "Achievements", disabled: true },
  { key: "3", href: "/profile", title: "Profile" },
];

export default links;

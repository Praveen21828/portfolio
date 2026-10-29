export const contactEmail = "praveenkumar.k28007@gmail.com";

export const contactMethods = [
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/praveenkumar-kolanji",
    href: "https://www.linkedin.com/in/praveenkumar-kolanji",
    icon: "profile",
    external: true,
  },
  {
    id: "email",
    label: "Gmail",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: "email",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+91 9345252192",
    href: "tel:+919345252192",
    icon: "phone",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Praveen21828",
    href: "https://github.com/Praveen21828",
    icon: "code",
    external: true,
  },
];

export const profileLinks = contactMethods.filter(
  (method) => method.id === "linkedin" || method.id === "github",
);

export const portfolioLinks = {
  liveDemo: {
    url: "https://your-portfolio-demo-url.com",
    isPlaceholder: true,
  },
  sourceCode: {
    url: "https://github.com/Praveen21828/your-portfolio-repository",
    isPlaceholder: true,
  },
};

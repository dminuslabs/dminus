import "./globals.scss";
import {
  DM_Serif_Display,
  Montserrat_Alternates,
  Plus_Jakarta_Sans,
  Urbanist,
} from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-dm",
});

const montserratAlternates = Montserrat_Alternates({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-mont",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: ["--tp-ff-body", "--tp-ff-heading"],
});

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-urban",
});

export const metadata = {
  title: {
    default:
      "Troth Communications | Creative Branding, Marketing & Media Agency",
    template: "%s | Troth Communications",
  },
  description:
    "Troth Communications is a creative agency offering branding, marketing, website development, video production, live event streaming, and corporate media services across Ethiopia and the USA. Communicate with truth.",
  keywords: [
    "Troth Communications",
    "creative agency",
    "branding agency",
    "marketing agency",
    "Ethiopian creative agency",
    "diaspora marketing",
    "video production",
    "web development",
    "live event streaming",
    "corporate media",
    "branding Ethiopia",
    "digital marketing",
    "Ethiopia USA agency",
    "communication strategy",
    "UI UX design Ethiopia",
    "event branding",
    "company profile design",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Troth Communications",
    title:
      "Troth Communications | Creative Branding, Marketing & Media Agency",
    description:
      "Troth Communications is a creative agency offering branding, marketing, website development, video production, and corporate media services. We help brands communicate with truth across Ethiopia and the USA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Troth Communications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Troth Communications | Creative Branding, Marketing & Media Agency",
    description:
      "Troth Communications is a creative agency offering branding, marketing, website development, video production, and corporate media services across Ethiopia and the USA.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://trothcommunications.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${dmSerifDisplay.variable} ${montserratAlternates.variable} ${plusJakartaSans.variable} ${urbanist.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

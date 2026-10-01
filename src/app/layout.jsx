import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "ONE TABLE | Meet New Women. Make New Friends. Share New Experiences.",
  description: "Different backgrounds. Different stories. One table. ONE TABLE brings women together across London to meet new people, discover new experiences and build genuine friendships.",
  keywords: ["women community London", "women networking London", "brunch London women", "make friends in London", "ONE TABLE"],
  openGraph: {
    title: "ONE TABLE WOMEN — Meet New Women. Share New Experiences.",
    description: "Different backgrounds. Different stories. One table.",
    url: "https://www.onetablewomen.co.uk",
    siteName: "ONE TABLE",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-brand-cream text-brand-charcoal antialiased min-h-screen flex flex-col font-sans">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

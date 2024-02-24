import '@/app/ui/global.css'
import {Fonts} from "@/app/ui/fonts";
import {clsx} from "clsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(Fonts.inter.className, 'antialiased')}>{children}</body>
    </html>
  );
}

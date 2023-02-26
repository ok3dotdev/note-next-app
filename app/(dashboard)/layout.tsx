import "../../styles/global.css";
// import { Inter } from "@next/font/google";
import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";

// const inter = Inter({
//   variable: "--font-inter",
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh pl-6">
        <GlassPane className="w-full h-full flex items-center justify-between gap-x-5">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
  );
}

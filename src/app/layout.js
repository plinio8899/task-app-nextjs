"use client";
import "./globals.css";
import { TaskProvider } from "../context/taskContext";
import { Navbar } from "../components/Navbar";
import { Toaster } from "./Toaster";
import { Layout } from "../components/Layout";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar />
          <Layout>{children}</Layout>
          <Toaster />
        </TaskProvider>
      </body>
    </html>
  );
}

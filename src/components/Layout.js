import React from "react";
import Header from "./Header/Header";

import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div className={pjs.className}>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
}

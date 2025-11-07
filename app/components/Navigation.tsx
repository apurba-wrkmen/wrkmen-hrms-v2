import Link from "next/link";
import React, { ReactElement } from "react";
import { INav } from "../interfaces/INav";

export default function Navigation(): ReactElement {
  const navData: INav[] = [
    { id: 0, name: "Dashboard", href: "/dashboard" },
    {
      id: 1,
      name: "Profile",
      href: "/profile",
    },
    { id: 2, name: "Leaves", href: "/leaves" },
    { id: 3, name: "Worklogs", href: "/worklogs" },
    { id: 4, name: "Directory", href: "/directory" },
    { id: 5, name: "Payroll", href: "/payroll" },
    {
      id: 6,
      name: "Digital Card",
      href: "/digitalCard",
    },
  ];

  return (
    <div>
      <ul>
        {navData.map((el: INav) => (
          <li key={el.id}>
            <Link href={el.href}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

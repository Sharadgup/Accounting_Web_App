"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BarChartIcon, FileTextIcon, HomeIcon, LayersIcon, PieChartIcon, UploadIcon } from "lucide-react";

const sidebarItems = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Ledger Entries", href: "/ledger", icon: FileTextIcon },
  { name: "Financial Reports", href: "/reports", icon: LayersIcon },
  { name: "Statistical Analysis", href: "/analysis", icon: BarChartIcon },
  { name: "Charts", href: "/charts", icon: PieChartIcon },
  { name: "Import/Export", href: "/import-export", icon: UploadIcon },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-background md:block w-64">
      <div className="flex h-full flex-col">
        <ScrollArea className="flex-1">
          <nav className="flex flex-col gap-2 p-4">
            {sidebarItems.map((item) => (
              <Button
                key={item.name}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn("justify-start", pathname === item.href && "bg-muted font-semibold")}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </div>
  );
}

export default Sidebar;

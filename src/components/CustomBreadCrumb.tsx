import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import React from "react";

interface CustomBreadCrumbProps {
  breadCrumbPage: string;
  breadCrumpItems?: { link: string; label: string }[];
}

export const CustomBreadCrumb = ({
  breadCrumbPage,
  breadCrumpItems,
}: CustomBreadCrumbProps) => {
  return (
    <Breadcrumb >
      <BreadcrumbList className="text-white ">
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="flex items-center justify-center hover:text-white hover:font-bold transition-all"
          >
            <Home className="w-3 h-3 mr-2" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        {breadCrumpItems &&
          breadCrumpItems.map((item, i) => (
            <React.Fragment key={i}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={item.link} className=" hover:text-white hover:font-bold transition-all">
                  {item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-white font-normal hover:font-bold transition-all cursor-default">{breadCrumbPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

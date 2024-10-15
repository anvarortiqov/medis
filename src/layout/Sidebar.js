"use client"

import "./index.css";
import Link from "next/link"
import {HospitalLogo} from "@/components/hospitallogo/HospitalLogo";
import {
  Home,
  Package2,
} from "lucide-react"

import { FaBedPulse } from 'react-icons/fa6'
import { RiCustomerService2Line } from 'react-icons/ri'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { FaUserDoctor } from "react-icons/fa6";
import { GiSoapExperiment } from 'react-icons/gi'
import { GoGear } from 'react-icons/go'
import { TbLogout } from 'react-icons/tb'
import { MdOutlineCalculate } from 'react-icons/md'
import { MdManageAccounts } from "react-icons/md";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Sidebar = () => {

  return (
      <>
        <div className="grid sidebar w-full ">
          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-14 items-center  px-4 lg:h-[75px] lg:px-6">
                <HospitalLogo name={"Hospital Name"} logo={'for logotype'} />
              </div>
              <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                  <Link
                      href="/admin/dashboard"
                      className="flex items-center gap-3 rounded-lg px-3 py-2  hover:bg-muted text-muted-foreground transition-all hover:text-primary"
                  >
                    <Home className="h-4 w-4"/>
                    Dashboard
                  </Link>
                  <Link
                      href="/admin/reception"
                      className="flex items-center gap-3 rounded-lg px-3 py-2  hover:bg-muted text-muted-foreground transition-all hover:text-primary"
                  >
                    <MdOutlineBedroomChild className="h-4 w-4" />
                    Qabulxona
                  </Link>
                  <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 text-muted-foreground py-2 transition-all hover:text-primary"
                  >
                    <FaBedPulse className="h-4 w-4" />
                    Bemorlar
                  </Link>
                  <Link
                      href="/admin/rooms"
                      className="flex items-center gap-3 rounded-lg px-3 py-2  hover:bg-muted text-muted-foreground transition-all hover:text-primary"
                  >
                    <MdOutlineBedroomChild className="h-4 w-4" />
                    Xonalar
                  </Link>
                  <Accordion type="single" collapsible className="navbar-accordion w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <Link
                            href="/admin/dashboard"
                            className="flex items-center gap-3 hover:bg-muted rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                          <MdManageAccounts className="h-4 w-4" />
                          <h4>Management</h4>
                        </Link>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className={`navbar-links`}>
                          <Link
                              href='/'
                              className="flex items-center gap-3  hover:bg-muted rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                          >
                            <RiCustomerService2Line/>
                            <h4>Xizmatlar</h4>
                          </Link>
                          <Link
                              href='/'
                              className="flex items-center gap-3 hover:bg-muted rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                          >
                            <FaUserDoctor/>
                            <h4>Hodimlar</h4>
                          </Link>
                          <Link
                              href='/'
                              className="flex items-center gap-3 hover:bg-muted rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                          >
                            <GiSoapExperiment/>
                            <h4>Labaratoriya</h4>
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        <Link
                            href="/admin/dashboard"
                            className="flex items-center gap-3  hover:bg-muted rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                          <MdOutlineCalculate className="h-4 w-4" />
                          <h4>Bugalteria</h4>
                        </Link>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className={`navbar-links`}>
                          <Link
                              href='/'
                              className="flex items-center hover:bg-muted gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                          >
                            <RiCustomerService2Line/>
                            <h4>Analyses</h4>
                          </Link>
                          <Link
                              href='/'
                              className="flex items-center hover:bg-muted gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                          >
                            <FaUserDoctor/>
                            <h4>Income & Outcome</h4>
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Link
                      href="#"
                      className="flex items-center gap-3 hover:bg-muted rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <GoGear className="h-4 w-4" />
                    Sozlamalar
                  </Link>
                  <Link
                      href="#"
                      className="flex items-center gap-3 hover:bg-muted rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <TbLogout className="h-4 w-4" />
                    Chqish
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

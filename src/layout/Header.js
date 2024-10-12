import './index.css';
import Link from "next/link"
import {
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Bell,
    ShoppingCart,
    Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


export const Header = () => {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5"/>
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6"/>
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link
                            href="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <Home className="h-5 w-5"/>
                            Dashboard
                        </Link>
                        <Link
                            href="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                        >
                            <ShoppingCart className="h-5 w-5"/>
                            Orders
                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                6
                            </Badge>
                        </Link>
                        <Link
                            href="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <Package className="h-5 w-5"/>
                            Products
                        </Link>
                        <Link
                            href="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <Users className="h-5 w-5"/>
                            Customers
                        </Link>
                        <Link
                            href="#"
                            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                        >
                            <LineChart className="h-5 w-5"/>
                            Analytics
                        </Link>
                    </nav>
                    <div className="mt-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Upgrade to Pro</CardTitle>
                                <CardDescription>
                                    Unlock all features and get unlimited access to our
                                    support team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button size="sm" className="w-full">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
                <div className="flex h-14 items-center justify-between lg:h-[65px] ">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <div className={'h-10 w-10 header-logo rounded-md'}></div>
                        <h1 className=" nav-text-size1 text-text_color">Medis</h1>
                    </Link>
                    <div className="ml-auto flex items-center gap-2">
                        <div className="header-logo rounded-md h-11 flex justify-center items-center w-11 text-white">53</div>
                        <h4 className="text-sm text-text_color">
                            Statsionar <br></br> <span>Bemorlar</span>
                        </h4>
                        <div className="header-logo rounded-md h-11 flex justify-center items-center w-11 text-white">62</div>
                        <h4 className="text-sm text-text_color">Band Xonalar</h4>
                        <div className="header-logo rounded-md h-11 flex justify-center items-center w-11 text-white">23</div>
                        <h4 className="text-sm text-text_color">Analizlar</h4>
                        <div className="header-logo rounded-md h-11 flex justify-center items-center w-11 text-white">38</div>
                        <h4 className="text-sm text-text_color">Qabul</h4>
                    </div>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <Bell className="h-4 w-4"/>
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5"/>
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>exampe@gmail.com</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Sozlamalar</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>Chiqish</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

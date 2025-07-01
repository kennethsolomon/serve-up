import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';
import AppLogoIcon from '@/components/app-logo-icon';
import { Utensils } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from "@/components/ui/sheet"
interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function MenuSimpleLayout({ children, title }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="flex w-full min-h-svh flex-col items-center gap-6 bg-background p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8">
                    <div className='sticky top-0 z-50 bg-white'>
                        <div className="flex flex-col items-center gap-4">
                            <Link href={route('home')} className="flex flex-col items-center gap-2 font-medium">
                                <div className="mb-1 flex w-64 items-center justify-center rounded-md">
                                    <AppLogoIcon width={255} />
                                </div>
                                <span className="sr-only">{title}</span>
                            </Link>
                        </div>
                        <Sheet>
                            <SheetTrigger className="flex w-full justify-center items-center gap-2 bg-amber-400 p-4 rounded-lg my-2 cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-2xl font-bold">Order Details</h2>
                                    <Utensils width={32} />
                                </div>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Transaction #0001</SheetTitle>
                                    <SheetDescription>
                                        <div className="flex flex-col max-h-[71vh] overflow-y-scroll">
                                            <Card className='p-4 mt-4'>
                                                <div className="relative">
                                                    <p className="font-bold">Order #0001</p>
                                                    <div className="absolute top-0 right-0">
                                                        <p className="bg-amber-300 p-3 rounded-full text-sm font-semibold">Pending</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="col-span-6 font-bold">
                                                        Name
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Qty
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Price
                                                    </div>

                                                    <div className="col-span-6">
                                                        Jollibee Chicken Joy
                                                    </div>
                                                    <div className="col-span-3">
                                                        5*100
                                                    </div>
                                                    <div className="col-span-3">
                                                        500
                                                    </div>


                                                    <div className="col-span-6">
                                                        Burger Steak
                                                    </div>
                                                    <div className="col-span-3">
                                                        2
                                                    </div>
                                                    <div className="col-span-3">
                                                        300
                                                    </div>

                                                </div>
                                            </Card>
                                            <Card className='p-4 mt-4'>
                                                <div className="relative">
                                                    <p className="font-bold">Order #0001</p>
                                                    <div className="absolute top-0 right-0">
                                                        <p className="bg-amber-300 p-3 rounded-full text-sm font-semibold">Pending</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="col-span-6 font-bold">
                                                        Name
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Qty
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Price
                                                    </div>

                                                    <div className="col-span-6">
                                                        Jollibee Chicken Joy
                                                    </div>
                                                    <div className="col-span-3">
                                                        5*100
                                                    </div>
                                                    <div className="col-span-3">
                                                        500
                                                    </div>


                                                    <div className="col-span-6">
                                                        Burger Steak
                                                    </div>
                                                    <div className="col-span-3">
                                                        2
                                                    </div>
                                                    <div className="col-span-3">
                                                        300
                                                    </div>

                                                </div>
                                            </Card>
                                            <Card className='p-4 mt-4'>
                                                <div className="relative">
                                                    <p className="font-bold">Order #0001</p>
                                                    <div className="absolute top-0 right-0">
                                                        <p className="bg-amber-300 p-3 rounded-full text-sm font-semibold">Pending</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="col-span-6 font-bold">
                                                        Name
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Qty
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Price
                                                    </div>

                                                    <div className="col-span-6">
                                                        Jollibee Chicken Joy
                                                    </div>
                                                    <div className="col-span-3">
                                                        5*100
                                                    </div>
                                                    <div className="col-span-3">
                                                        500
                                                    </div>


                                                    <div className="col-span-6">
                                                        Burger Steak
                                                    </div>
                                                    <div className="col-span-3">
                                                        2
                                                    </div>
                                                    <div className="col-span-3">
                                                        300
                                                    </div>

                                                </div>
                                            </Card>
                                            <Card className='p-4 mt-4'>
                                                <div className="relative">
                                                    <p className="font-bold">Order #0001</p>
                                                    <div className="absolute top-0 right-0">
                                                        <p className="bg-amber-300 p-3 rounded-full text-sm font-semibold">Pending</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="col-span-6 font-bold">
                                                        Name
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Qty
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Price
                                                    </div>

                                                    <div className="col-span-6">
                                                        Jollibee Chicken Joy
                                                    </div>
                                                    <div className="col-span-3">
                                                        5*100
                                                    </div>
                                                    <div className="col-span-3">
                                                        500
                                                    </div>


                                                    <div className="col-span-6">
                                                        Burger Steak
                                                    </div>
                                                    <div className="col-span-3">
                                                        2
                                                    </div>
                                                    <div className="col-span-3">
                                                        300
                                                    </div>

                                                </div>
                                            </Card>
                                            <Card className='p-4 mt-4'>
                                                <div className="relative">
                                                    <p className="font-bold">Order #0001</p>
                                                    <div className="absolute top-0 right-0">
                                                        <p className="bg-amber-300 p-3 rounded-full text-sm font-semibold">Pending</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="col-span-6 font-bold">
                                                        Name
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Qty
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Price
                                                    </div>

                                                    <div className="col-span-6">
                                                        Jollibee Chicken Joy
                                                    </div>
                                                    <div className="col-span-3">
                                                        5*100
                                                    </div>
                                                    <div className="col-span-3">
                                                        500
                                                    </div>


                                                    <div className="col-span-6">
                                                        Burger Steak
                                                    </div>
                                                    <div className="col-span-3">
                                                        2
                                                    </div>
                                                    <div className="col-span-3">
                                                        300
                                                    </div>

                                                </div>
                                            </Card>
                                            <Card className='p-4 mt-4'>
                                                <div className="relative">
                                                    <p className="font-bold">Order #0001</p>
                                                    <div className="absolute top-0 right-0">
                                                        <p className="bg-amber-300 p-3 rounded-full text-sm font-semibold">Pending</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="col-span-6 font-bold">
                                                        Name
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Qty
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Price
                                                    </div>

                                                    <div className="col-span-6">
                                                        Jollibee Chicken Joy
                                                    </div>
                                                    <div className="col-span-3">
                                                        5*100
                                                    </div>
                                                    <div className="col-span-3">
                                                        500
                                                    </div>


                                                    <div className="col-span-6">
                                                        Burger Steak
                                                    </div>
                                                    <div className="col-span-3">
                                                        2
                                                    </div>
                                                    <div className="col-span-3">
                                                        300
                                                    </div>

                                                </div>
                                            </Card>
                                            <Card className='p-4 mt-4'>
                                                <div className="relative">
                                                    <p className="font-bold">Order #0001</p>
                                                    <div className="absolute top-0 right-0">
                                                        <p className="bg-amber-300 p-3 rounded-full text-sm font-semibold">Pending</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="col-span-6 font-bold">
                                                        Name
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Qty
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Price
                                                    </div>

                                                    <div className="col-span-6">
                                                        Jollibee Chicken Joy
                                                    </div>
                                                    <div className="col-span-3">
                                                        5*100
                                                    </div>
                                                    <div className="col-span-3">
                                                        500
                                                    </div>


                                                    <div className="col-span-6">
                                                        Burger Steak
                                                    </div>
                                                    <div className="col-span-3">
                                                        2
                                                    </div>
                                                    <div className="col-span-3">
                                                        300
                                                    </div>

                                                </div>
                                            </Card>
                                            <Card className='p-4 mt-4'>
                                                <div className="relative">
                                                    <p className="font-bold">Order #0001</p>
                                                    <div className="absolute top-0 right-0">
                                                        <p className="bg-amber-300 p-3 rounded-full text-sm font-semibold">Pending</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="col-span-6 font-bold">
                                                        Name
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Qty
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Price
                                                    </div>

                                                    <div className="col-span-6">
                                                        Jollibee Chicken Joy
                                                    </div>
                                                    <div className="col-span-3">
                                                        5*100
                                                    </div>
                                                    <div className="col-span-3">
                                                        500
                                                    </div>


                                                    <div className="col-span-6">
                                                        Burger Steak
                                                    </div>
                                                    <div className="col-span-3">
                                                        2
                                                    </div>
                                                    <div className="col-span-3">
                                                        300
                                                    </div>

                                                </div>
                                            </Card>

                                            <Card className='p-4 mt-4'>
                                                <p className="font-bold">Order #0002</p>

                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="col-span-6 font-bold">
                                                        Name
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Qty
                                                    </div>
                                                    <div className="col-span-3 font-bold">
                                                        Price
                                                    </div>

                                                    <div className="col-span-6">
                                                        Jollibee Chicken Joy
                                                    </div>
                                                    <div className="col-span-3">
                                                        5
                                                    </div>
                                                    <div className="col-span-3">
                                                        500
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>

                                    </SheetDescription>
                                </SheetHeader>
                                <SheetFooter>
                                    <Separator />
                                    <h2 className='text-3xl mb-4 font-bold'>Total: 600</h2>

                                    {/* (Only show if there are pending orders) */}
                                    <button className="text-md bg-amber-400 p-2 rounded-lg font-bold">Process Order</button>
                                    {/* (Only show if there are processed orders) */}
                                    <button className="text-md bg-amber-400 p-2 rounded-lg font-bold">Bill Out</button>
                                </SheetFooter>
                            </SheetContent>

                        </Sheet>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

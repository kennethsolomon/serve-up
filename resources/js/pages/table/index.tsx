import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import { SidebarProvider } from "@/components/ui/sidebar"
import MenuSimpleLayout from '@/layouts/menu/menu-simple-layout';
import { MenuCard } from '@/components/menu-card';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from "@/components/ui/textarea"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

type FunnelForm = {
    firstname: string;
    middlename: string;
    lastname: string;
    suffix: string;
    email: string;
};

interface IndexProps {
    products: Array<{
        id: number;
        name: string;
        description: string;
        price: number;
        media: object
    }>;
}

export default function Index({products}: IndexProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<FunnelForm>>({
        firstname: '',
        middlename: '',
        lastname: '',
        suffix: '',
        email: ''
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('funnel.store'));
    };

    return (
        <SidebarProvider>
            <MenuSimpleLayout title="Menu" description="Menu">
                <Head title="Log in" />

                <form className="flex flex-col gap-4" onSubmit={submit}>
                    <div className="grid gap-6">
                        <MenuCard>
                            <h2 className="text-2xl font-bold">Popular 🔥</h2>
                            <div className="grid grid-cols-12 gap-2 pb-8">
                                <div className="col-span-8">
                                    <h4 className='font-bold text-md'>Title</h4>
                                    <h3 className='text-sm mb-2'>$10.99</h3>
                                    <h3 className='text-sm'>3 1pc Burger Steak and 3 Peach Mango Pies</h3>
                                </div>
                                <div className="col-span-4">
                                    <img src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-full h-full object-cover' />
                                </div>
                            </div>
                        </MenuCard>
                        <MenuCard>
                            <h2 className="text-2xl font-bold">Family Meals</h2>
                            <>
                                {products?.map((product) => (
                                    <Drawer key={product.id}>
                                        <div className="relative"  key={product.id}>
                                            <DrawerTrigger className="text-start cursor-pointer">
                                                <Separator/>
                                                <div className="flex justify-end mt-3 cursor-pointer absolute bottom-0 right-0 rounded-full bg-amber-400 p-2">
                                                    <Plus />
                                                </div>
                                                <div className="grid grid-cols-12 gap-2 mt-8">
                                                    <div className="col-span-8">
                                                        <h4 className='font-bold text-md'>{product.name}</h4>
                                                        <h3 className='text-sm mb-2'>{product.price}</h3>
                                                        <h3 className='text-sm'>{product.description}</h3>
                                                    </div>
                                                    <div className="col-span-4">
                                                        <img src={product.media[0].original_url} alt="product_image" className='w-full h-full object-cover' />
                                                    </div>
                                                </div>
                                            </DrawerTrigger>

                                            <DrawerContent className='flex justify-self-center max-w-sm'>
                                                <DrawerHeader>
                                                    <DrawerTitle>{product.name}</DrawerTitle>
                                                    <DrawerDescription>
                                                        <h3 className='text-sm mb-2'>{product.price}</h3>
                                                        <h3 className='text-sm'>{product.description}</h3>
                                                    </DrawerDescription>
                                                </DrawerHeader>
                                                <img src={product.media[0].original_url} alt="" className='w-full h-full object-cover' />
                                                <DrawerFooter>
                                                    <div className="flex justify-center items-center gap-4">
                                                        <Label>Quantity:</Label>
                                                        <Input type="number" className="mt-2" placeholder="Quantity" value={1} />
                                                    </div>

                                                    <div>
                                                        <Label>Special Instruction:</Label>
                                                        <Textarea className="mt-2" placeholder="Special Instruction" />
                                                    </div>
                                                    <Button className="bg-amber-400 hover:bg-amber-500 text-black font-bold cursor-pointer">Add Order</Button>
                                                </DrawerFooter>
                                            </DrawerContent>
                                        </div>
                                    </Drawer>
                                ))}
                            </>
                        </MenuCard>

                    </div>
                </form>
            </MenuSimpleLayout>
        </SidebarProvider>
    );
}

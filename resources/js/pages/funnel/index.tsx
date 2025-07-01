import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import React, { FormEventHandler } from 'react';
import FunnelLayout from '@/layouts/funnel/funnel-simple-layout';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';

type FunnelForm = {
    firstname: string;
    middlename: string;
    lastname: string;
    suffix: string;
    email: string;
};

export default function Index() {
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
        <FunnelLayout title="Please enter your details" description="Enter your details below to continue">
            <Head title="Log in" />

            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="firstname">First Name</Label>
                        <Input
                            id="firstname"
                            type="firstname"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            value={data.firstname}
                            onChange={(e) => setData('firstname', e.target.value)}
                            placeholder="First Name"
                        />
                        <InputError message={errors.email} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="middlename">Middle Name</Label>
                        <Input
                            id="middlename"
                            type="middlename"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="middlename"
                            value={data.middlename}
                            onChange={(e) => setData('middlename', e.target.value)}
                            placeholder="Middle Name"
                        />
                        <InputError message={errors.email} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="Last Name">Last Name</Label>
                        <Input
                            id="lastname"
                            type="lastname"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="lastname"
                            value={data.lastname}
                            onChange={(e) => setData('lastname', e.target.value)}
                            placeholder="Last Name"
                        />
                        <InputError message={errors.email} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="suffix">Suffix</Label>
                        <Input
                            id="suffix"
                            type="suffix"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="suffix"
                            value={data.suffix}
                            onChange={(e) => setData('suffix', e.target.value)}
                            placeholder="Suffix"
                        />
                        <InputError message={errors.email} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="email@example.com"
                        />
                        <InputError message={errors.email} />
                    </div>
                    <Button type="submit" className="mt-4 w-full bg-amber-400 text-black" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Next Step
                    </Button>
                </div>
            </form>
        </FunnelLayout>
    );
}

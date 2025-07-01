import { Card } from '@/components/ui/card';
import type { PropsWithChildren } from 'react';

interface AuthLayoutProps {
    title?: string;
    description?: string;
}

export function MenuCard({ children }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <Card className='p-4'>
            {children}
        </Card>
)
    ;
}

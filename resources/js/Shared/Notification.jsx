import { usePage } from '@inertiajs/inertia-react';

export default function Notification () {
    const { flash } = usePage().props;

    return (
        <div>
            {flash.success && (
                <div className="notification is-success is-light">
                    <button className="delete"></button>
                    {flash.success}
                </div>
            )}
        </div>
    )
}

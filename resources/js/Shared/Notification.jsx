import { useEffect } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Notification () {
    const { flash } = usePage().props;

    useEffect(() => {
        if(flash.success) {
            toast.success(flash.success)
        }
    })

    return (
        <div>
            <ToastContainer />
        </div>
    )
}

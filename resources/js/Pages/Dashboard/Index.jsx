import { Link } from '@inertiajs/inertia-react';

export default function Index() {
    return (
        <div>
            <Link href='/logout' method="post">Logout</Link>
        </div>
    );
}

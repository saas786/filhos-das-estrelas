import React, { useEffect } from "react";
import Header from "./Header";
import Notification from "./Notification";

import '../../sass/layout.scss';

export default function Layout({children}) {
    const teste = 'Matheus';

    return (
        <main id="main">
            <Header />
            <article id="article-content">
                {children}
            </article>
        </main>
    );
}

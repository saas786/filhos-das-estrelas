import React, { useEffect } from "react";
import Header from "./Header";

import '../../sass/layout.scss';

export default function Layout({children}) {
    return (
        <main id="main">
            <Header />
            <article id="article-content">
                {children}
            </article>
        </main>
    );
}

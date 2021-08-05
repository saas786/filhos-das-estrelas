import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import NProgress from 'nprogress';
import { Inertia } from '@inertiajs/inertia';

Inertia.on('start', () => NProgress.start())
Inertia.on('finish', () => NProgress.done())

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})

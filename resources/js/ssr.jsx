/* prettier-ignore */
import {
createInertiaApp
} from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { LaravelReactI18nProvider } from 'laravel-react-i18n';
import ReactDOMServer from 'react-dom/server';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        resolve: (name) => {
            const pages = import.meta.glob('./pages/**/*.tsx', {
                eager: true,
            });
            return pages[`./pages/${name}.tsx`];
        },
        // prettier-ignore
        setup: ({ App, props }) => (
            <LaravelReactI18nProvider
                locale={typeof window === 'undefined' ? (props.initialPage?.props?.locale || 'en') : (document.documentElement.lang || 'en')}
                fallbackLocale={'en'}
                files={import.meta.glob('/lang/*.json', { eager: true })}
            >
                <App {...props} />
            </LaravelReactI18nProvider>
        ),
    }),
);

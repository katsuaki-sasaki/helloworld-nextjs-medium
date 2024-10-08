// components/SEO.js
import Head from 'next/head';

export default function SEO({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="Next.js, SEO, Hello World, JavaScript, React" />
        </Head>
    );
}

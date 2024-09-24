import Image from 'next/image';
import SEO from '../components/SEO';

export default function Home() {
    return (
        <div>
            <SEO title="Hello World - Home" description="A simple Hello World app with SEO optimization" />
            <h1>Hello World with SEO and Image Optimization</h1>
            <Image src="/images/hello-world.png" alt="Hello World" width={256} height={256} />
        </div>
    );
}

import Image from 'next/image';
import SEO from '../components/SEO';
import { useEffect, useState } from 'react';
import Link from "next/link";
import styles from '../styles/About.module.css';
import Button from "../components/Button";

const handleClick = () => {
    alert('Button clicked!');
};

export default function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // /api/hello への GET リクエストを送信
        fetch('/api/hello')
            .then((response) => response.json())
            .then((data) => {
                // 取得したメッセージをステートに保存
                setMessage(data.message);
            });
    }, []);

    return (
        <div>
            <SEO title="Hello World - Home" description="A simple Hello World app with SEO optimization"/>
            <h1>Hello World with SEO and Image Optimization</h1>
            <Image src="/images/hello-world.png" alt="Hello World" width={256} height={256}/>

            {/* APIから取得したメッセージを表示 */}
            <p>Message from API: {message}</p>

            {/* Aboutページへのリンク */}
            <Link href="/about" className={styles.link}>Go to About Page</Link>

            {/* Blogページへのリンク */}
            <Link href="/blog" className={styles.link}>Go to Blog Page</Link>

            {/* ボタンの例 */}
            <Button label="Click Me" onClick={handleClick} />

            {/* 環境変数を使用する例 */}
            <p>{process.env.NEXT_PUBLIC_API_URL}/data?api_key={process.env.NEXT_PUBLIC_API_KEY}</p>
        </div>
    );
}

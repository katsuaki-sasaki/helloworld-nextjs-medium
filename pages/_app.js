import '../styles/globals.css';
import Header from '../components/Header';  // Headerコンポーネントをインポート

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header /> {/* ヘッダーを全ページに表示 */}
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}

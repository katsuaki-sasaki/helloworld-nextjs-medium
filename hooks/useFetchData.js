import { useState, useEffect } from 'react';
import { fetchData } from '../lib/fetchData'; // fetchData を呼び出す

/**
 * APIデータをフェッチするカスタムフック
 * @param {string} url - データを取得するためのAPIのURL
 * @returns {{ data: any, error: string | null, loading: boolean }} - データ、エラー、ローディング状態を返す
 */
export function useFetchData(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData(url);  // libのfetchDataを利用してデータを取得
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();  // データをフェッチ
    }, [url]);

    return { data, error, loading };
}

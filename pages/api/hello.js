// pages/api/hello.js

export default function handler(req, res) {
    // リクエストメソッドがGETの場合、"Hello World" を返す
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Hello World' });
    } else {
        // GET以外のリクエストメソッドに対しては 405 (Method Not Allowed) を返す
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

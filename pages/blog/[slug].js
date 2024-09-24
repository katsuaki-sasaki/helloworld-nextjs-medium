const blogPosts = {
    'post-1': {
        title: 'My First Blog Post',
        content: 'This is the content of the first blog post.'
    },
    'post-2': {
        title: 'Another Blog Post',
        content: 'This is some more content, about another topic.'
    },
    'post-3': {
        title: 'Next.js is Awesome!',
        content: 'Let\'s learn about Next.js and how great it is for building web apps.'
    },
};

export async function getStaticPaths() {
    const paths = Object.keys(blogPosts).map((slug) => ({
        params: { slug }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = blogPosts[params.slug];
    return { props: { post } };
}

export default function BlogPost({ post }) {
    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

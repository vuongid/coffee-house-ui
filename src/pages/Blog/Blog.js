import { useParams } from 'react-router-dom';

function Blog() {
    const { slug } = useParams();
    return <h1>{slug}</h1>;
}

export default Blog;

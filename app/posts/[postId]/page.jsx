import Posts from '../page';
import {Suspense} from 'react';

const loadPost = async (id) => { 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
 }

const PostPage = async ({ params }) => {

    const post = await loadPost(params.postId)

    return (
        <div>
            <h1> {post.id}. {post.title} </h1>
            <p> {post.body} </p>

            <hr />

            <h3>Otras publicaciones</h3>

            <Suspense 
                fallback={<div>Cargando publicaciones...</div>}>
                <Posts />
            </Suspense>
        </div>
    )
}

export default PostPage
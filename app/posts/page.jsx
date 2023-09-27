import PostCard from "../../components/PostCard"

const loadPost = async () => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
 }

const PostPages = async () => {

    const posts = await loadPost()
    console.log(posts)

    return (
        <div>
            {posts.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default PostPages
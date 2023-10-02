import PostCard from "@/components/PostCard";
import "./Posts.css"

const loadPost = async () => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    return data
 }

const PostPages = async () => {

    const posts = await loadPost()
    console.log(posts)

    return (
        <div className="grid">
            {posts.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default PostPages
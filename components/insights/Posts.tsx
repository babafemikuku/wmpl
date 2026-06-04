import { getPostCards } from "@/sanity/lib/client";
import { PostCard } from "./PostCard";

export async function Posts() {
  const posts = await getPostCards();

  return (
    <section style={{ backgroundColor: "#F7F5F0" }} className="py-6 lg:py-13">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post._id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
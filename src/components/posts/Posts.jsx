import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Sierra Flintwood",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/7166118/pexels-photo-7166118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Sending it with this Melon grab out there today!",
      img: "https://images.pexels.com/photos/1635086/pexels-photo-1635086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Zeke Miller",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Super stoked on putting this one down today. Landed my first layout frontflip! was super heady but manage to bring it home.",
      img: "https://images.pexels.com/photos/2448970/pexels-photo-2448970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
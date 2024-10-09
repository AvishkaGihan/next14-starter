import { addPost, deletePost } from "@/lib/actions";

const ServerActionPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="desc" placeholder="Description" />
        <input type="text" name="slug" placeholder="Slug" />
        <input type="text" name="userId" placeholder="User ID" />
        <button>Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionPage;

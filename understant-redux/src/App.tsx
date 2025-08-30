import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "./Store/store";
import { increment, decrement } from "./Store/Features/counter/counterSlice";
import {
  addPost,
  clearPosts,
  fetchPosts,
} from "./Store/Features/posts/postSlice";

function App() {
  // ✅ ดึงค่าจาก Redux store - Counter
  const count = useSelector((state: RootState) => state.counter.value);

  // ✅ ดึงค่าจาก Redux store - Posts
  const { items, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  // ✅ ใช้ dispatch เรียก actions
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Count in Counter Component: {count}</h1>
      <div className="flex  w-fit bg-amber-500">
        <button
          className="m-2 p-2 w-24 bg-blue-400 hover:bg-white text-black font-bold cursor-pointer"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="m-2 p-2 w-24 bg-blue-400 hover:bg-white text-black font-bold cursor-pointer"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div>
        <h1>Fetch Posts API</h1>
        <div className="flex  w-fit bg-amber-500">
          <button
            className="m-2 p-2  bg-blue-400 hover:bg-white text-black font-bold cursor-pointer"
            onClick={() => dispatch(fetchPosts())}
          >
            Fetch Posts
          </button>
          <button
            className="m-2 p-2 bg-blue-400 hover:bg-white text-black font-bold cursor-pointer"
            onClick={() =>
              dispatch(
                addPost({
                  userId: 99,
                  id: Date.now(),
                  title: "New Post",
                  body: "Hello world",
                })
              )
            }
          >
            Add Post
          </button>
          <button
            className="m-2 p-2 bg-blue-400 hover:bg-white text-black font-bold cursor-pointer"
            onClick={() => dispatch(clearPosts())}
          >
            Clear Posts
          </button>
        </div>
        {loading && <p>⏳ Loading...</p>}
        {error && <p style={{ color: "red" }}>⚠ {error}</p>}
        <ul className="list-disc pl-6">
          {items.map((post) => (
            <li key={post.id}>
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

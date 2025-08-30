import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  items: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  loading: false,
  error: null,
};

// ✅ thunk สำหรับ fetch API
export const fetchPosts = createAsyncThunk<
  Post[], // return type ถ้าสำเร็จ
  void, // argument type
  { rejectValue: string } // type ของ error ที่เราจะส่งกลับ
>("posts/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (res.status === 401) {
      return rejectWithValue("Unauthorized! Please log in again.");
    }

    if (!res.ok) {
      return rejectWithValue("Server error: " + res.status);
    }

    return (await res.json()) as Post[];
  } catch (err) {
    return rejectWithValue("Network : " + (err as Error).message);
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.items.push(action.payload);
    },
    clearPosts: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
  // ✅ จัดการ state จาก thunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        // กำลังทำงาน → API ยังไม่เสร็จ
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        // ทำงานสำเร็จ → ได้ผลลัพธ์จาก API แล้ว
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        // ล้มเหลว → API error / throw error
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { addPost, clearPosts } = postsSlice.actions;
export default postsSlice.reducer;

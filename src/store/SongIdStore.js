import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    idsong: 0,
};

export const SongIdStore = createSlice({
    name: 'song', // Tên của slice, mỗi slice đặt 1 tên khác nhau để phân biệt
    initialState,
    // Reducers chứa các hàm xử lý cập nhật state
    reducers: {
        updateIdSong(state, action) {
            state.idsong = action.payload;
        },
    },
});

// Export action ra để sử dụng cho tiện.
export const { updateIdSong } = SongIdStore.actions;

// Action là 1 hàm trả về object dạng {type, payload}, chạy thử console.log(updateIdSong()) để xem chi tiết

// Hàm giúp lấy ra state mong muốn.
// Hàm này có 1 tham số là root state là toàn bộ state trong store, chạy thử console.log(state) trong nội dung hàm để xem chi tiết
export const selectIdSong = (state) => state.song.idsong;

// Export reducer để nhúng vào Store
export default SongIdStore.reducer;

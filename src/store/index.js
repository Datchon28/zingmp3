import { configureStore } from '@reduxjs/toolkit';
import SongIdStore from './SongIdStore';

export const store = configureStore({
    reducer: {
        song: SongIdStore, // Khai báo 1 slide tên là song với giá trị là SongIdStore được export ở file SongIdStore
        // Có thể khai báo nhiều slide khác tương tự
    },
});

import {defineStore} from 'pinia'
import { apiKey } from '@/url.js'
import axios from 'axios';
export const useTop10 = defineStore({
    id: 'top10',
    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        top10: []
    }),
    actions: {
        async getTop10(){
            try {
                const res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-Ru&page=1`)
                const data = res.data.results
                data.forEach(item => {
                    if(this.top10.length < 10) this.top10.push(item)
                });
            } catch (error) {
                console.error('Произошла ошибка при получении данных о предстоящих фильмах', error);
            }
        }
    },
})
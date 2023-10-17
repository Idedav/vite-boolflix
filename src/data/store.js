import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/',
    tv:[],
    movie: [],
    filmToSearch: '',
    type:''
})
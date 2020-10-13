import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class CategoriesService{

    constructor(){}


    getCategories() {
        const url = `${API_URL}/api/categories/`;
        return axios.get(url).then(response => response.data);
    }
    getCategoriesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getCategory(pk) {
        const url = `${API_URL}/api/categories/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteCategory(category){
        const url = `${API_URL}/api/categories/${category.id}`;
        return axios.delete(url);
    }
    createCategory(category){
        const url = `${API_URL}/api/categories/`;
        return axios.post(url,category);
    }
    updateCategory(category){
        const url = `${API_URL}/api/categories/${category.id}`;
        return axios.put(url,category);
    }
};


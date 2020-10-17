import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class CategoriesService{

    getCategories() {
        const url = `${API_URL}/api/categories/`;
        return axios.get(url).then(response => response.date);
    }

    getSuperCategories() {
        const url = `${API_URL}/api/supercategories/`;
        return axios.get(url).then(response => response.data);
    }

    getCategoriesByURL(link){
        const url = `${API_URL}/api${link}`;
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


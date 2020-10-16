import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class CategoriesService{

    getSuperCategories() {
        const url = `${API_URL}/api/supercategories/`;
        return axios.get(url).then(response => response.data);
    }
<<<<<<< HEAD
    getSuperCategory(pk) {
        const url = `${API_URL}/api/supercategories/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    getSuperCategoriesByURL(link) {
        const url = `${API_URL}${link}`;
=======

    getCategoriesByURL(link){
        const url = `${API_URL}/api${link}`;
>>>>>>> 7b5c8de74913bcebd843bfdd5ba2bea504674cc5
        return axios.get(url).then(response => response.data);
    }
    createSuperCategories(supercategory) {
        const url = `${API_URL}/api/supercategories/`;
        return axios.post(url, supercategory)
    }
    updateSuperCategory(supercategory){
        const url = `${API_URL}/api/categories/${supercategory.id}`;
        return axios.put(url, supercategory);
    }
    deleteSuperCategories(supercategory) {
        const url = `${API_URL}/api/supercategories/${supercategory.id}`;
        return axios.delete(url)
    }


    getCategories() {
        const url = `${API_URL}/api/categories/`;
        return axios.get(url).then(response => response.date);
    }
    getCategory(pk) {
        const url = `${API_URL}/api/categories/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    getCategoriesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    createCategory(category){
        const url = `${API_URL}/api/categories/`;
        return axios.post(url, category);
    }
    updateCategory(category){
        const url = `${API_URL}/api/categories/${category.id}`;
        return axios.put(url, category);
    }
    deleteCategory(category){
        const url = `${API_URL}/api/categories/${category.id}`;
        return axios.delete(url);
    }


    getSubcategories() {
        const url = `${API_URL}/api/subcategories/`;
        return axios.get(url).then(response => response.date);
    }
    getSubategory(pk) {
        const url = `${API_URL}/api/subcategories/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    getSubategoriesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    createSubategory(subcategory){
        const url = `${API_URL}/api/subcategories/`;
        return axios.post(url, subcategory);
    }
    updateSubategory(subcategory){
        const url = `${API_URL}/api/subcategories/${subcategory.id}`;
        return axios.put(url, subcategory);
    }
    deleteSubategory(subcategory){
        const url = `${API_URL}/api/subcategories/${subcategory.id}`;
        return axios.delete(url);
    }


    getServices() {
        const url = `${API_URL}/api/services/`;
        return axios.get(url).then(response => response.date);
    }
    getService(pk) {
        const url = `${API_URL}/api/services/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    getServicesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    createService(service){
        const url = `${API_URL}/api/services/`;
        return axios.post(url, service);
    }
    updateService(service){
        const url = `${API_URL}/api/services/${service.id}`;
        return axios.put(url, service);
    }
    deleteService(service){
        const url = `${API_URL}/api/services/${service.id}`;
        return axios.delete(url);
    }
};


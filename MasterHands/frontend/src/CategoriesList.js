import  React, { Component } from  'react';
import  CategoriesService  from  './ApiService';

const  categoryService  =  new  CategoriesService();

class CategoriesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        var self = this;
        categoryService.getCategories().then(function (result) {self.setState({ categories: result })})
    }

    handleDelete(e, pk) {
        var self = this;
        categoryService.deleteCategory({pk: pk}).then( () => {
            var newArr = self.state.categories.filter(function (obj) {
                return obj.pk != pk;
            });
             self.setState({categories: newArr});
        });
       
    }

    render() {

        return (
        <div  className="customers--list">
            <table  className="table">
                <thead  key="thead">
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.categories.map( c  =>
                    <tr  key={c.id}>
                        <td>{c.id}  </td>
                        <td>{c.category_name}</td>
                        <td>{c.subcategory[0].subcategory_name}</td>
                        <td>
                        <button  onClick={(e)=>  this.handleDelete(e,c.id) }>Delete</button>
                        <a  href={"/categories/" + c.id}> Update</a>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        );
    }
}

export  default  CategoriesList;



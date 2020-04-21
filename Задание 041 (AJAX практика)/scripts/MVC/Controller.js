import {View} from '../MVC/View.js';
import {Model} from '../MVC/Model.js';

export class Controller{
    constructor(){
        this.view = new View(this.addUser.bind(this));
        this.model = new Model(this.getUser.bind(this));

    }
    getUser(user){
        this.view.renderUser(user);
        console.log(user);
    }
    addUser(){
       this.model.getDataUser();
    }
}
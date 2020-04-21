import {Model} from '../scripts/model.js';
import {View} from '../scripts/view.js';

export class Controller {
    constructor(){
        this.view = new View(this);
        this.model = new Model(this);
    }

    saveData(str){
        this.model.saveData(str);
    }

    loadDOM(){
        let arr = this.model.getData('str') || [];
        arr.forEach((el) => this.view.render(el));
    }

}


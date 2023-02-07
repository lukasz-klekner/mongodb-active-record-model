const { ObjectId } = require("mongodb");
const { todos } = require("../utils/db");
const { ValidationError } = require("../utils/errors");

class TodoRecord {
    constructor({ _id, title}){
        this._id = new ObjectId(_id);
        this.title = title;

        this._validate()
    }

    _validate(){
        if(!this.title || typeof this.title !== 'string'){
            throw new ValidationError('TodoRecord title must be an unempty string');
        }
    }

    static async find(id){
        const item = await todos.findOne({
            _id: new ObjectId(String(id))
        })

        console.log(item)

        return item === null? null : new TodoRecord(item)
    }

    static async findAll(){
        return (await (await todos.find()).toArray()).map(obj => new TodoRecord(obj))
    }

    async insert(){
        const { insertedId } = await todos.insertOne({
            title: String(this.title)
        })
        this._id = insertedId

        return this._id
    }

    async update(){
        await todos.replaceOne({
            _id: this._id
        }, {
            title: String(this.title)
        })
    }

    async delete(){
        await todos.deleteOne({
            _id: this._id
        })
    }
}

module.exports = {
    TodoRecord
}
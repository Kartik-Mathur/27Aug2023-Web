const fs = require('fs');
const path = require('path');

const FILEPATH = path.join(__dirname,'..','db','todos.json');

class Tasks{
    static getTasks(){
        return new Promise((resolve,reject)=>{
            fs.readFile(
                FILEPATH,
                {
                    encoding: 'utf-8'
                },
                (err,data)=>{
                    if(err) return reject(err);
                    data = JSON.parse(data);
                    resolve(data);
                }
            )
        })
    }
    static addTask(name){
        return new Promise((resolve,reject)=>{
            fs.readFile(
                FILEPATH,
                {
                    encoding: 'utf-8'
                },
                (err,data)=>{
                    if(err) return reject(err);
                    data = JSON.parse(data);
                    data.push(name);
                    fs.writeFile(
                        FILEPATH,
                        JSON.stringify(data),
                        (err)=>{
                            if(err) return reject(err);
                            resolve(data);
                        }
                    )
                }
            )
        })
    }
    static increasePriority(name){
        return new Promise((resolve,reject)=>{
            fs.readFile(
                FILEPATH,
                {
                    encoding: 'utf-8'
                },
                (err,data)=>{
                    if(err) return reject(err);
                    data = JSON.parse(data);
                    let indx = data.indexOf(name);
                    let temp = data[indx];
                    data[indx] = data[indx-1];
                    data[indx-1] = temp;
                    fs.writeFile(
                        FILEPATH,
                        JSON.stringify(data),
                        (err)=>{
                            if(err) return reject(err);
                            resolve(data);
                        }
                    )
                }
            )
        })
    }
    static decreasePriority(name){
        return new Promise((resolve,reject)=>{
            fs.readFile(
                FILEPATH,
                {
                    encoding: 'utf-8'
                },
                (err,data)=>{
                    if(err) return reject(err);
                    data = JSON.parse(data);
                    let indx = data.indexOf(name);
                    let temp = data[indx];
                    data[indx] = data[indx+1];
                    data[indx+1] = temp;
                    fs.writeFile(
                        FILEPATH,
                        JSON.stringify(data),
                        (err)=>{
                            if(err) return reject(err);
                            resolve(data);
                        }
                    )
                }
            )
        })
    }
    static DeleteTask(name){
        return new Promise((resolve,reject)=>{
            fs.readFile(
                FILEPATH,
                {
                    encoding: 'utf-8'
                },
                (err,data)=>{
                    if(err) return reject(err);
                    data = JSON.parse(data);
                    data = data.filter(e=>e!==name);
                    fs.writeFile(
                        FILEPATH,
                        JSON.stringify(data),
                        (err)=>{
                            if(err) return reject(err);
                            resolve(data);
                        }
                    )
                }
            )
        })
    }
}

module.exports = Tasks;

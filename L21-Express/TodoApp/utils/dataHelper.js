const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

const FilePath = path.join(__dirname, '..', 'data', 'data.json');

class Todo {
    static addTask(task) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                FilePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) return reject(err);
                    data = JSON.parse(data); // -->["Coding","Dance","Sing"]
                    data.push(task); // ->["Coding","Dance","Sing","Cricket"]
                    fs.writeFile(
                        FilePath,
                        JSON.stringify(data),
                        (err) => {
                            if (err) return reject(err);
                            else resolve(data);
                        }
                    )
                }
            )
        })
    }

    static getTask() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                FilePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) return reject(err);
                    resolve(data);
                }
            )
        })
    }

    static deleteTask(task) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                FilePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) return reject(err);
                    data = JSON.parse(data);
                    data = data.filter((e, indx, arr) => {
                        if (e === task) return false;
                        return true;
                    })

                    fs.writeFile(
                        FilePath,
                        JSON.stringify(data),
                        (err) => {
                            if (err) return reject(err);
                            else resolve(data);
                        }
                    )
                }
            )
        })
    }

    static increasePriority(task) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                FilePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) return reject(err);
                    data = JSON.parse(data);
                    let indx = data.indexOf(task);
                    let temp = data[indx - 1];
                    data[indx - 1] = data[indx];
                    data[indx] = temp;
                    fs.writeFile(
                        FilePath,
                        JSON.stringify(data),
                        (err) => {
                            if (err) return reject(err);
                            else resolve(data);
                        }
                    )
                }
            )
        })
    }

    static decreasePriority(task) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                FilePath,
                {
                    encoding: 'utf-8'
                },
                (err, data) => {
                    if (err) return reject(err);
                    data = JSON.parse(data);
                    let indx = data.indexOf(task);
                    let temp = data[indx + 1];
                    data[indx + 1] = data[indx];
                    data[indx] = temp;
                    fs.writeFile(
                        FilePath,
                        JSON.stringify(data),
                        (err) => {
                            if (err) return reject(err);
                            else resolve(data);
                        }
                    )
                }
            )
        })
    }
};


module.exports = Todo;
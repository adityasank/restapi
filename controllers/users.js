import {
    v4 as uuidv4
} from 'uuid';
let users = []
export const createUser = (req, res) => {
    const user = req.body;
    users.push({
        ...user,
        id: uuidv4()
    });
    console.log(users);
    res.send(`post route reached ${user.fname}`);
}
export const getUser = (req, res) => {
    console.log(users);
    res.send(users);
}
export const userByID = (req, res) => {
    const {
        id
    } = req.params;
    const founduser = users.find((user) => user.id === id);
    res.send(founduser);
}
export const deleteUserBy = (req, res) => {
    const {
        id
    } = req.params;
    users = users.filter((user) => user.id !== id)
    res.send(`User with tht id deleterd ${id}`);
}
export const updateuserBy = (req, res) => {
    const {
        id
    } = req.params;
    const {
        fname,
        lname,
        age
    } = req.body;
    const user = users.find((user) => user.id === id);
    if (fname) user.fname = fname
    if (lname) user.lname = lname
    if (age) user.age = age
    res.send(`user with thr ${id} is updated`)
}
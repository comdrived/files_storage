

const usersServices = require("../services/usersServices");

let data = [
    { id: 1, firstname: "Moussa", lastname: "OUSTOUH" },
    { id: 2, firstname: "Tom", lastname: "HANKS" },
    { id: 3, firstname: "Mel", lastname: "GIBSON" },
    { id: 4, firstname: "Tom", lastname: "HARDY" },
    { id: 5, firstname: "Jim", lastname: "CARRY" }
];

exports.getUsers = (req, res) => {
    console.log("GET USERS");
    res.status(200).send(data);
}

exports.getUser = (req, res) => {
    let result = data.find(d => {
        return d.id == req.params.id
    });

    console.log("GET USER")
    
    res.status(200).send(result);
}

exports.createUser = (req, res) => {
    if(req.body.name && req.body.age && req.body.tel){
        let name = req.body.name;
        let age = req.body.age;
        let tel = req.body.tel;

        // create

        console.log("CREATE", name, age, tel);

        res.status(201).send("CREATE");
    }
    else{
        res.status(400).send({message : "bad request"});
    }
}

exports.updateUser = (req, res) => {
    if(req.body.name && req.body.age && req.body.tel){
        let id = req.params.id;
        // ghanchofo l user wach kayn f database

        let name = req.body.name;
        let age = req.body.age;
        let tel = req.body.tel;
        // update

        console.log("UPDATE", id, name, age, tel);

        res.status(201).send("UPDATE");
    }
    else{
        res.status(400).send({message : "bad request"});
    }
}

exports.deleteUser = (req, res) => {
    let id = req.params.id;

    
    console.log("DELETE");
    // DELETE

    res.status(200).send({message : "DELETE"});
}

let data = [
    { id: 1, firstname: "Moussa", lastname: "OUSTOUH" },
    { id: 2, firstname: "Tom", lastname: "HANKS" },
    { id: 3, firstname: "Mel", lastname: "GIBSON" },
    { id: 4, firstname: "Tom", lastname: "HARDY" },
    { id: 5, firstname: "Jim", lastname: "CARRY" }
];

exports.getUsers = () => {
    return data;
}

exports.getUser = (id) => {
    // conntet to database
    // select * from users u where u.id = id
     
}


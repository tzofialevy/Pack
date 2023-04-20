const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
function getAllUsers() {
    return new Promise((resolve, reject) => {
        UserModel.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

function getUserByID(id) {
    return new Promise((resolve, reject) => {
        UserModel.findById(id, function (err, data) {
            if (err) {
                reject(err)
            }
            else {

                resolve(data)
            }
        })
    })
}
function createUser(obj) {
    return new Promise(async (resolve, reject) => {
        console.log("hghghj");
        const users = await getAllUsers().then(data => { return data }, function (err, data) {
            if (err) { reject(err) }

        })
        console.log("fffffffff");

        // const email = users.find(n => { return n.email == obj.email }, function (err, data) {
        //     if (err) {  console.log("v");reject(err);
               
        //     }
        //     else {  console.log("dddddddddd"); resolve(data) ;
        //        }
        // })
       

        // if (!email) {
            let user = new UserModel({
                "firstname": obj.firstname,
                "lastname": obj.lastname,
                "email": obj.email,
                "password": obj.password,
                "trips": obj.trips
            })
            user.save(function (err) {
                if (err) { reject(err) ;            console.log("ggggggggggggggggggggggggg");
            }
                else { resolve("created") }
            })
        // }
        // else { reject("error email exits") }
    }
    )
}


function updateUser(id, obj) {
    return new Promise((resolve, reject) => {
        UserModel.findByIdAndUpdate(id,
            {
                "firstname": obj.firstname,
                "lastname": obj.lastname,
                "email": obj.email,
                "password": obj.password,
                "trips": obj.trips

            }, function (err) {
            if (err) {
                reject(err)
            }
            else {
                console.log(obj._id, obj.name, obj.price)
                resolve("Updated !")
            }
        })

    })

}

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        UserModel.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err)
            }
            else {

                resolve("deleted!")

            }
        })
    })
}

function login(email, password) {
    return new Promise(async (resolve, reject) => {
        const users = await getAllUsers().then(data => { return data })
        const user = users.find(u => { return u.email === email && u.password === password });
        if (user) {
            const accessTokenSecret = "somerandomaccesstoken";
            const refreshTokenSecret = "somerandomstringforrefreshtoken";
            let refreshTokens = []

            const accessToken = jwt.sign({ email: user.email, role: user.role }, accessTokenSecret)
            const refreshToken = jwt.sign({ email: user.email, role: user.role }, refreshTokenSecret)

            refreshTokens.push(refreshToken)

            resolve(
                {
                    accessToken,
                    refreshToken
                }
            )
        }
        else { reject("email or password incorrect") }
    })
}
module.exports = { login, createUser, getUserByID, getAllUsers, deleteUser, updateUser }

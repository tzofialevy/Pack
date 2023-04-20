const CategoryModel = require("../models/CategoryModel")


exports.getAllCategory = function () {
    return new Promise((resolve, reject) => {
        CategoryModel.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

exports.getCategoryByID = function (id) {
    return new Promise((resolve, reject) => {
        CategoryModel.findById(id, function (err, data) {
            if (err) {
                reject(err)
            }
            else {

                resolve(data)
            }
        })
    })
}

exports.createCategory = function (obj) {

    return new Promise((resolve, reject) => {

        let Category = new CategoryModel({
            "name": obj.name,
            "products": obj.products
        });

        Category.save(function (err) {
            if (err) {
                reject(err)
            }
            else {


                resolve("Created !")
            }
        })
    })
}

exports.updateCategory = function (id, obj) {
    return new Promise((resolve, reject) => {


        CategoryModel.findByIdAndUpdate(id,
            {
                "name": obj.name,
                "products": obj.products
            }
            , function (err) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve("Updated !")
                }
            })

    })

}

exports.deleteCategory = function (id) {
    return new Promise((resolve, reject) => {
        CategoryModel.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err)
            }
            else {

                resolve("deleted!")

            }
        })
    })
}


const TripModel = require("../models/TripModel")


exports.getAllTrips = function () {
    return new Promise((resolve, reject) => {
        TripModel.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

exports.getTripByID = function (id) {
    return new Promise((resolve, reject) => {
        TripModel.findById(id, function (err, data) {
            if (err) {
                reject(err)
            }
            else {

                resolve(data)
            }
        })
    })
}

exports.createTrip = function (obj) {
    return new Promise((resolve, reject) => {

        let Trip = new TripModel({
            "name": obj.name,
            "StartDate": obj.StartDate,
            "endDate": obj.endDate,
            "status": obj.status,
            "products": obj.products
        });

        Trip.save(function (err) {
            if (err) {
                reject(err)
            }
            else {


                resolve("Created !")
            }
        })
    })
}

exports.updateTrip = function (id, obj) {
    return new Promise((resolve, reject) => {


        TripModel.findByIdAndUpdate(id,
            {
                "name": obj.name,
                "StartDate": obj.StartDate,
                "endDate": obj.endDate,
                "status": obj.status,
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

exports.deleteTrip = function (id) {
    return new Promise((resolve, reject) => {
        TripModel.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err)
            }
            else {

                resolve("deleted!")

            }
        })
    })
}


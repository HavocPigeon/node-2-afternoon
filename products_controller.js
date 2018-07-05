
module.exports = {
    create: (req, res, next) => {
        const database = req.app.get('db'); 
        const {name, description, price, imagurl} = req.body

        database.create_product([name, description, price, imagurl])
        .then(() => res.status(200))
        .catch(error => {
            res.status(500).send({errormessage: 'Server error'});
            console.log(error)
        })
    },

    getOne: (req, res, next) => {
        const database = req.app.get('db');

        database.read_product([req.params.id])
        .then(() => res.status(200).send(product))
        .catch(error => {
            res.status(500).send({errormessage: 'Server error'})
            console.log(error);
        })
    },

    getAll: (req, res, next) => {
        const database = req.app.get('db');

        database.read_products()
        .then(() => res.status(200).send(products))
        .catch(error => {
            res.status(500).send({errormessage: 'Server error'})
            console.log(error);
        })
    },

    update: (req, res, next) => {
        const database = req.app.get('db');

        database.update_products([req.params.id, query.desc])
        .then(() => res.status(200))
        .catch(error => {
            res.status(500).send({errormessage: 'Server error'})
            console.log(error);
        })
    },

    delete: (req, res, next) => {
        const database = req.app.get('db');

        database.delete_products([req.params.id])
        .then(res => res.status(200))
        .catch(error => {
            res.status(500).send({errormessage: 'Server error'})
            console.log(error);
        })
    },

}
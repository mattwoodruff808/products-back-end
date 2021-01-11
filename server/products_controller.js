module.exports = {
    create: (req, res) => {
        const {name, description, price, image_url} = req.body;
        const db = req.app.get('db')

        db.create_product(name, description, price, image_url)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Something went wrong!'}));
    },
    getOne: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db')

        db.read_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send({errorMessage: 'Something went wrong!'}));
    },
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send({errorMessage: 'Something went wrong!'}));
    },
    update: (req, res) => {
        const {id} = req.params;
        const {desc} = req.query;
        const db = req.app.get('db')

        db.update_product(id, desc)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Something went wrong!'}));
    },
    delete: (req, res) => {
        const {id} = req.params;
        const db = req.app.get('db')

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send({errorMessage: 'Something went wrong!'}));
    }
}
module.exports = {
    login: (req, res) => {
        const { username, password } = req.body

        req.app.get('db').login_user([username, password])
            .then((user) => {
                console.log(1111, user[0])
                req.session.userId = user[0].id
                console.log(req.session);
                res.sendStatus(200);
            })
    },

    register: (req, res) => {
        const { username, password } = req.body

        if (username) {
            req.app.get('db').check_user([username])
                .then((user) => {
                    console.log(username, user)
                    if (user.length !== 0) {
                        console.log('Username Taken')

                    } else {
                        req.app.get('db').create_user([username, password])
                            .then((user) => {
                                console.log(2222, user)
                                req.session.userId = user[0].id
                                res.sendStatus(200)
                            })
                            .catch((err) => {
                                res.status(500).send(err)
                            })
                    } 
                }) 
        } else {
            res.sendStatus(400)
        }
    },

    createProperties: (req, res) => {
        const { name,
            description,
            address,
            city,
            locationState,
            zip,
            image,
            loanAmount,
            monthlyMortgage,
            desiredRent
        } = req.body

        console.log(req.session.userId)

        req.app.get('db').create_properties([name, description, address, city, locationState, zip, image, loanAmount, monthlyMortgage, desiredRent, req.session.userId])
            .then((response) => res.status(200).send(response))
            .catch((err => {
                console.log(err)
                res.status(500).send(err)
            }))
    },

    getProperties: (req, res) => {
        req.app.get('db').get_properties([req.session.userId])
            .then((propertyList) => res.send(propertyList))

    },

    deleteProperties: (req, res) => {
        let { id } = req.params
        console.log(id)

        req.app.get('db').delete_property([id, req.session.userId])
            .then((property) => res.send(property))
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}
module.exports = {
    login: (req, res) => {
        const { username, password } = req.body
        req.session.username = username;
        req.session.password = password;
        req.app.get('db').login_user([username, password])
            .then((user) => {
                req.session.userId = user[0].user_id
            })
        console.log(req.session);
        res.sendStatus(200);
    },

    register: (req, res) => {
        const { username, password } = req.body
        req.session.username = username;
        req.session.password = password;

        req.app.get('db').create_user([username, password])
            .then(() => res.sendStatus(200))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            })
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

        req.app.get('db').create_properties([name, description, address, city, locationState, zip, image, loanAmount, monthlyMortgage, desiredRent, req.session.userId])
        .then((response) => res.status(200).send(response))
        .catch((err => {
            console.log(err)
            res.status(500).send(err)
        }))
    },

    getProperties: (req, res) => {
        req.app.get('db').get_properties([req.sessions.user_id])
    }
}
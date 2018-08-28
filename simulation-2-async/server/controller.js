module.exports = {
    login: (req, res) => {
        const {username, password} = req.body
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
        const {username, password} = req.body
        req.session.username = username;
        req.session.password = password;
        
         req.app.get('db').create_user([username, password])
         .then(() => res.sendStatus(200))
         .catch((err) => { 
        console.log(err)
        res.status(500).send(err)})
    }
}
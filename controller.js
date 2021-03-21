module.exports = {

    getPlanes: (req, res, next) => {
        const db = req.app.get('db')

        db.get_planes([25])
            .then(planes => {
                console.log(planes)
                res.status(200).send(planes)
            })
            .catch(error => {
                console.log(error)
                res.status(500).send(error)
            })
    }
}
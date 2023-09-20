const {Genre} = require('../database/models')

module.exports = {
    list : (req,res)=>{
        Genre.findAll()
            .then(genres =>{
                return res.render('genresList',{
                    genres
                })
            })
            .catch(error => console.error(error))
    },
    detail : (req,res)=>{
        Genre.findByPk(req.params.id)
            .then(genre =>{
                return res.render('genresDetail',{
                    genre
                })
            })
            .catch(error => console.error(error))
    }
}
class noticias{
    static buscaNoticias(app,req,res){
        let connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias((error,result)=>{
            res.render("noticias/noticias",{noticias:result});
        });
    }
    static buscaNoticia(app,req,res){
        let connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(req.query,(error,result)=>{
            res.render("noticias/noticia",{noticia:result});
        });
    }

}

module.exports = ()=>{
    return noticias;
}
class admin{
    static formulario_inclusao_noticia(app,req,res){
        res.render("admin/form_add_noticia");
    };

    static noticias_salvar(app,req,res){
        let connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(req.body,(error,result)=>{
            res.redirect("/noticias");
        });
    }; 

}


module.exports = () => {
    return admin;
};
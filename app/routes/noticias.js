module.exports = (app) =>{
    app.get('/noticias',(req,res)=>{
        app.app.controllers.noticias.buscaNoticias(app,req,res);
    });

    app.get('/noticia',(req,res)=>{
        app.app.controllers.noticias.buscaNoticia(app,req,res);            
    });
}

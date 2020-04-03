class NoticiasDAO{
    constructor(connection) {
        this.connection = connection;
    }
    getNoticias(callback){
        this.connection.query("select * from noticias order by data_criacao desc",callback);
    };

    getNoticia(id,callback){
        this.connection.query('select * from noticias where id_noticia = ?',id.id_noticia,callback);
    };    

    salvarNoticia(noticia,callback){
        this.connection.query('insert into noticias set ?',noticia,callback);
    }; 

    get5UltimasNoticias(callback){
        this.connection.query('Select * from noticias order by data_criacao desc limit 5',callback);
    }; 


}


module.exports = () => {
    return NoticiasDAO;
};
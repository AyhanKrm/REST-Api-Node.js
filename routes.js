'use strict';

module.exports = function(app){
    var jsonku = require('./controller');
    
    app.route('/')
        .get(jsonku.index);
        
    app.route('/tampil')
        .get(jsonku.tampildatamahasiswa);    
        
    app.route('/tampil/:id_mahasiswa')
        .get(jsonku.tampilid);    
        
    app.route('/tambah')
        .post(jsonku.addMahasiswa);    
        
    app.route('/ubah')
        .put(jsonku.updateMahasiswa);
    
    app.route('/hapus')
        .delete(jsonku.hapusMahasiswa);    
};
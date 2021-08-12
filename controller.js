'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok('Aplikasi REST API ku Berjalan!',res)
};

//menampilkan semua data mahasiswa
exports.tampildatamahasiswa = function(req, res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

//menampilkan semua data mahasiswa berdasarkan id
exports.tampilid = function(req, res){
    let id_mahasiswa = req.params.id_mahasiswa;
    connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id_mahasiswa],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res);
            }
        }
    );
};

//menambahkan data mahasiswa post
exports.addMahasiswa = function(req, res){
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;
    
    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?,?,?)',
    [nim, nama, jurusan],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok('Berhasil Menambah Data Mahasiswa Baru!', res);
        }
    });
};

//mengupdate data mahasiswa berdasarkan id put
exports.updateMahasiswa = function(req, res){
    let id = req.body.id_mahasiswa;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;
    
    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok('Berhasil Mengubah Data Mahasiswa!', res);
            }
        }    
    );
};
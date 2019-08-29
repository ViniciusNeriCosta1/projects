const express = require('express');

module.exports = function(app){
    const router = express.Router();
    app.use('/api', router);
    const Compromissos = require('../api/compromissos/compromissosService')
    Compromissos.register(router, '/compromissos');
    const Alunos = require('../api/alunos/alunosServices')
    Compromissos.register(router, '/alunos');
}
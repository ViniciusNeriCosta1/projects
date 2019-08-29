const Alunos = require('./alunos');

Alunos.methods(['get', 'post', 'put', 'delete']);
Alunos.updateOptions({ new: true, runValidators: true });

module.exports = Alunos;
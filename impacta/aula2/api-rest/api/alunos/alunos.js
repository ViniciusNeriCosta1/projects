const restful = require('node-restful');
const mongoose = restful.mongoose;

const alunosSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    data: { type: Date, required: true },
    descricao: { type: String, required: true },
    responsavel: { type: String, required: true },
    telefone: { type: String }
});

module.exports = restful.model('alunos', alunosSchema);
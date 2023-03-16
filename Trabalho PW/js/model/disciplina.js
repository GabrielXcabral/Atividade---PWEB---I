class Disciplina {
    constructor(codigoDisciplina, nomeDisciplina){
        this._codigo = codigoDisciplina;
        this._nome = nomeDisciplina;
        this._arraydeAlunos = [];
        //this._disciplinas = new Array(Aluno);
    }

    getNome(){
        return this._nome;
    }

    setNome(newNome_){
        this._nome = newNome_;
    }

    getCodigo(){
        return this._codigo;
    }

    setCodigo(newCodigo_){
        this._codigo = newCodigo_;
    }

    setAlunos(ObjAluno){
        this._arraydeAlunos.push(ObjAluno);

    }

    getAlunos(){
        return this._arraydeAlunos;
    }

    /*getArrayAlunosDaDisciplina(){
        return this._disciplinas;
    }*/

    /*setArrayAlunosNaDisciplina(aluno){
        this._disciplinas.push(aluno);
    }*/


}
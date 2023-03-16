class DisciplinaServico{

    constructor(){
        this._repositorioDisciplina = new DisciplinaRepositorio;        
    }

    inserir(disciplina) {    
        return this._repositorioDisciplina.inserir(disciplina);
        
    }

    remover(nomeDisciplina) {
        this._repositorioDisciplina.remover(nomeDisciplina);
    }

    listar() {
        return this._repositorioDisciplina.listar();
    }

    buscarPorNome(nomeDisciplina) {
        return this._repositorioDisciplina.buscarPorNome(nomeDisciplina);
    }

    inserirAlunoNaDisciplina(objAluno, codigo){
        //let objAluno = new Aluno(nome, idade)

        return this._repositorioDisciplina.inserirAlunoNaDisciplina(objAluno, codigo);

    }

}
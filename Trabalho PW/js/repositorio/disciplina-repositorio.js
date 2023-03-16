class DisciplinaRepositorio{
    constructor(){
        /*this._disciplina = new Array();
        this._obj = new Disciplina();
        this._alunosdadisciplina = new Array ();*/

        this._disciplina = [];

    }

    inserir(disciplina){
        this._disciplina.push(disciplina);
        return disciplina;

    }

    inserirAlunoNaDisciplina(aluno, codigo) {
        const variavel = this._disciplina.find(dis => dis._codigo == codigo);
        if(variavel){
            variavel._arraydeAlunos.push(aluno);
            console.log(variavel)
        }

        return this._disciplina._arraydeAlunos;
    }

    remover(nomeDisciplina) {
        /*const indxRemocao = this._disciplina.indexOf(Disciplina);
        this._disciplina.splice(indxRemocao, 1);*/
        let objeto = null;
        for (let i = 0; i < this._disciplina.length; i++){
            this._obj = this._disciplina[i];

            if(this._obj.getNome() === nomeDisciplina){
                objeto = this._disciplina[i];
            }      
        }

        const index = this._disciplina.indexOf(objeto);
        this._disciplina.splice(index, 1);
    }

    listar() {
        return this._disciplina;
    }

    buscarPorNome(nomeDisciplina) {
        return this._disciplina.filter(disciplina => disciplina.nomeDisciplina === nomeDisciplina);
    }
}
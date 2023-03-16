class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
        this.disciplina = new Disciplina();

    }

    inserir() {
        const codigo = document.querySelector("#cod").value;
        const nome = document.querySelector("#nomedisciplina").value;
        //const disciplina = this.disciplinaServico.inserir(codigo, nome);
        const disciplina = new Disciplina(codigo, nome);
        this.disciplinaServico.inserir(disciplina);

        if (disciplina) {
            this.mostrarDisciplinaNoHTML(codigo, nome);
            alert('Disciplina inserida!');
        } else {
            alert('Não foi colocado dados! Preencha os campos código e nome');
        }
    }

    mostrarDisciplinaNoHTML(codigo, nome) {      
        const elementoP = document.createElement("p");
        elementoP.textContent = `\nDisciplina: ${codigo} - ${nome}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplina(nome);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplina(disciplina) {
        this.disciplinaServico.remover(disciplina);
    }

    inserirAlunosNaDisciplina(){
        const nome = document.querySelector("#nome").value;
        const idade = document.querySelector("#idade").value;
        const codigo = document.querySelector("#codNovo").value; 
        const objAluno = new Aluno(nome, idade);

        this.disciplina.setAlunos(objAluno, codigo);
        const a = this.disciplinaServico.inserirAlunoNaDisciplina(objAluno,codigo);

    }
}
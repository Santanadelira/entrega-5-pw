class Student {
    constructor(nome, email, RA, curso, discplina){
        this.nome = nome
        this.email = email
        this.RA = RA
        this.curso = curso
        this.disciplina = discplina
    }
}

const Student1 = new Student("Claudinei dos Santos","claudis.santos@gmail.com", "3245678", "Química", ["Cálculo III", "Geometria analítica", "Físico-química"])
Student1.nome = "Claudinei dos Santos"
Student1.email = "claudis.santos@gmail.com"
Student1.RA = "3245678"
Student1.curso = "Química"


const Student2 = new Student("Virginia Silva dos Santos","virginia@gmail.com", "8759032", "Matemática", ["Cálculo III", "Geometria analítica", "Estatística"])
Student2.nome = "Virginia Silva dos Santoss"
Student2.email = "virginia@gmail.com"
Student2.RA = "8759032"
Student2.curso = "Matemática"

console.log(Student1, Student2)
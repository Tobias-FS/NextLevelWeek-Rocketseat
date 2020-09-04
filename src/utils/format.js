const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação fisica",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber
    return subjects[position]
}

module.exports = {
    subjects,
    weekdays,
    getSubject
}
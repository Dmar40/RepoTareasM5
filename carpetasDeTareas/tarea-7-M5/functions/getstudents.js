import fs from 'fs/promises'

export const getstudents = async (req, res) => {
   const response = await fs.readFile('./students.json', 'utf-8')
   const students = await JSON.parse(response)
    res.json(students);
}

export const getStudentsById = async  (req, res) => {
    const response = await fs.readFile('./students.json', 'utf-8')
    const students = await JSON.parse(response)
    const id = req.params.id
    const student = students.find((student) => student.id === parseInt(id))
    if (student) 
        res.json(student);
    else {
        res.status(404)
        res.send({ error: 'Estudiante no encontrado' });
    }
}
export const getStudentsByTitle = async (req, res) =>{
    const response = await fs.readFile('./students.json', 'utf-8')
    const students = await JSON.parse(response)
    const name = req.params.name
    const result = students.filter((student) => student.name.includes(name))
    if(result) res.send(result)
    else {
        res.status(404)
        res.send('no se encontro el nombre del estudiante')
       }    
}
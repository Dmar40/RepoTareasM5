import fs from 'fs/promises'


export const putStudents = async (req, res) => {
    // const response = await fs.readFile('./students.json', 'utf-8')
    // const students = await JSON.parse(response)
    students.push(req.body)
    const id = req.params.id
    const index = students.findIndex((student) => student.id === parseInt(id))
    students[index] = req.body

    res.send('se han actualizado los estudiantes') 
}
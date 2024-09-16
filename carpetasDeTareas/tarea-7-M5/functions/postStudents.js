import fs from 'fs/promises'

export const postStudents = async  (req, res) => {
    const response = await fs.readFile('./students.json', 'utf-8')
    const students = await JSON.parse(response)
    students.push(req.body)
    // await fs.writeFile('/students.json',JSON.stringify(students))
    res.send(`Se ha agregado el estudiante ${req.body.id}`)
}
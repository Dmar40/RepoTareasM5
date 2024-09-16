import fs from 'fs/promises'


export const deleteStudents = async (req, res) => {
    const response = await fs.readFile('./students.json', 'utf-8')
    const students = await JSON.parse(response)
    const id = req.params.id
    const result = students.findIndex((student) => student.id === parseInt(id))
    if(result !== -1){
        students.splice(result,1)
        res.send(`se ha eliminado el estudiante con el id ${id}`)
    }else{
        res.status(404)
        res.send('estudiante no encontrado')
    }
}
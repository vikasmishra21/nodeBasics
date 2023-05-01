const express = require('express')
const router = express.Router()
const Joi = require('joi')

const courses = [
    {id: 1, name: 'Java'},
    {id: 2, name: 'Kotlin'},
    {id: 3, name: 'Javascript'}
]

router.get('/', (req, res) => {
    res.send(courses)
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with the given id does not exists.')
    res.send(course)
})

router.post('/', (req, res) => {
    const { error } = validateCourse(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

router.put('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with the given id does not exists in this.')

    const { error } = validateCourse(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    course.name = req.body.name
    res.send(course)
})

router.delete('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with the given id does not exists.')
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema)
}

module.exports = router
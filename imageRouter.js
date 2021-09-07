const imageRouter = require('express').Router()
const multer  = require('multer')
const upload = multer()
const fs = require('fs')

imageRouter.post('/', upload.none(), async (req, res) => {
    const { body } = req
    const { image } = body

    console.log(image)
    const base64payload = Object.keys(body)
    const payload = base64payload[0]
    const buff = new Buffer(image, 'base64')
    fs.writeFileSync('original.txt', image)
    fs.writeFileSync('test.jpg', buff)
/*     const buff = new Buffer.from(body, 'base64')
    console.log(buff) */

    return res.status(200).send({
        "status": "ok"
    })
})

module.exports = imageRouter

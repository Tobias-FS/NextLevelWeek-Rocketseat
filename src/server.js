const proffys = [
    {
        name: "Diego Fernades",
        avatar:"htts://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsaap: "532653623562",
        bio: "qualquer coisa",
        subject: "Quimica",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Jozé",
        avatar:"htts://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsaap: "532653623562",
        bio: "qualquer coisa",
        subject: "Quimica",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html")
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

// console.log(__dirname)
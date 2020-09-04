const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {

    proffyValue = {
        name: "Diego Fernades",
        avatar:"https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsaap: "532653623562",
        bio: "qualquer coisa",
    }

    classValue = {
        subject: "Quimica",
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 20,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
})
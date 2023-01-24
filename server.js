/* 
  Här används en modul som skapats för att innehålla all
  databaskommunikation.

  Det är STARKT rekommenderat att dela upp sin kod i moduler så att
  själva Express-appen som definieras i den här filen inte innehåller så
  mycket kod att den blir svår att läsa.
*/
const db = require("./services/db")

const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/users", async (req, res) => {
  //denna callback är async för att fungera med await i koden
  let users = await db.getUsers()

  users.forEach((user) => {
    console.log(user.username, user.name)
  })
  res.send(`Antal users =  ${users.length}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

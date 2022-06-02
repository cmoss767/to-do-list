const mongoose = require('mongoose')
const connectDB = async () => {
  console.log(process.env.PORT)
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
    console.log(process.env.DB_STRING)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB

// @ts-check

const { MongoClient } = require('mongodb')

const uri =
  'mongodb+srv://changs8564:0907Aass!@cluster0.jwmna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = client

const express = require('express')
const app = new express()

app.set('port', (process.env.PORT || 8080));
app.get('/',(req, res) => {

})

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
})
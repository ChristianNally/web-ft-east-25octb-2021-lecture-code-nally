const express = require("express");
const app = express();
app.set('view engine','ejs');

const dbFns = require('./db/queries');

app.get('/',(req,res) => {
    dbFns.getAllObjectives((rows)=>{
        const templateVars = {rowarray: rows};
        res.render('home',templateVars);
    });
});

const port = process.env.PORT || 7888;
app.listen(port, () => {
    console.log(`Server is listening on port=${port}`);
});

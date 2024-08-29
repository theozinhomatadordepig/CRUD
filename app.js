const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const usuarioRoutes = require('./routes/usuarioRoutes');
const carroRoutes = require('./routes/carroRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(expressLayouts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/usuarios', usuarioRoutes);
app.use('/carros', carroRoutes);
app.get('/', (req, res) => {
    res.render('index', { email: '', passoword: ''});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

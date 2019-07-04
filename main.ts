import express =  require("express");

const PORT = 3000

let main = () =>
{
    let app : express.Application = express()

    app.set('view engine', 'pug')
    app.set('views', './views')

    app.get('/calculadora', function(req: any, res : any){
        res.render('calculadora', {
            suma : "0"
        })
    })
    app.get('/sumar', function(req: any, res : any){
        let op1 : string = req.query.op1
        let op2 : string = req.query.op2
        res.render('calculadora', {
            suma : parseInt(op1) + parseInt(op2)
        })
    })

    // Iniciamos la ejecucion del server
    app.listen(PORT, ()=>{
        console.log(`Server running in port ${PORT}`);
    })
}

main()
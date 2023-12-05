class coffeeController{
    async addCoffee(req,res){
        try {
            const {body} = req
            const newCoffee = await req.app.services.coffees.addCoffee(body)
            res.json({message:newCoffee})
        } catch (error) {
            res.status(500).json({message:error})
        }
    }
}

module.exports = coffeeController
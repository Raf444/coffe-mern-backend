class ColorController{
async addColor(req,res){
    try {
        const {colorName} = req.body
        const newColor = await req.app.services.colors.addColor(colorName)
        res.json({message:newColor})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
}

module.exports = ColorController
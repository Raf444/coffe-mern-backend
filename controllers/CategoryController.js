class CategoryController{
    async addCategory(req,res){
        try {
            const {categoryName} = req.body
            const newCategory = await req.app.services.categories.addCategory(categoryName)
            res.json({message:newCategory})
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
}

module.exports = CategoryController
class VendorController{
async addVendor(req,res){
    try {
        const {vendor,company} = req.body
        const newVendor = await req.app.services.vendors.addVendor(vendor,company)
        res.json({message:newVendor})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
}

module.exports = VendorController
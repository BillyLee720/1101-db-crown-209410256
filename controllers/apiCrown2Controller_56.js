const serviceCrown2Controller_56 = require('./serviceCrown2Controller_56')

exports.getCategories = async (req, res) => {
    try{
        const data = await serviceCrown2Controller_56.getCategories();
        return res.json(data);
    }catch(err){
        console.log('crow2Controller getCategories', err)
    }
}
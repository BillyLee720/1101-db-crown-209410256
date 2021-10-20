const Category_56 = require('../models/Category_56');

exports.getCategories = async (req,res) => {
    try {
        return await Category_56.fetchAll();
    }catch(err){
        console.log('getCategories',err);
    }
}
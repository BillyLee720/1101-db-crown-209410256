const serviceCrown2Controller_56 = require('./serviceCrown2Controller_56')

exports.getCategories = async (req, res) => {
    try{
        let results = await serviceCrown2Controller_56.getCategories();
        console.log('results', JSON.stringify(results));
        res.render('crown2_56', {
            data: results,
            title: 'Crown2_56',
            name: 'LEE, Bo-Yan',
            id: '209410256',
        });
    }catch(err){
        console.log('crow2Controller getCategories', err)
    }
}
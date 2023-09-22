const checkEmty = (req, res, next)=> {
    const {numberClass, age, fullName} = req.body
    if(numberClass && age && fullName){
        next()
    } else{
        res.status(500).send('ban phai nhap day du cac truong')
    }
}


const checkNumberClass = (req, res ,next)=> {
    const {numberClass} = req.body
    if (numberClass >=1 && numberClass <= 12 ) {
        next()
    }else {
        res.status(500).send('ban phai lop tu 1 den 12')

    }
}



module.exports = {
    checkEmty,
    checkNumberClass
}
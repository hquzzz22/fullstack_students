const logFuture =  (req,res, next) =>{
    console.log('day la tinh nang lay danh sach')
    next() //gọi hàm này để chạy xuống middleware tiếp theo 
}

module.exports= {
    logFuture,
}
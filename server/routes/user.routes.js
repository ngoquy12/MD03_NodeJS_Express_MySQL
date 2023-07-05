const express  = require('express');

const router  =express.Router();
const database  = require('../connection/connectMySQL');

// API lấy thông tin tất cả user
router.get('/', (req, res)=>{
  // Khai báo chuỗi query string -  Câu lệnh thao tác với SQL
  const queryString   = "select * from users;";

  // Gọi database
  database.query(queryString, (error, results)=>{
    // Nếu thất bại
    if(error){
      return res.status(500).json({
        status: 500, 
        message: "Đã có lỗi xảy. Vui lòng liên hệ để được giải đáp",
        error: error
      })
    }else{
      // Nếu thành công
      return res.status(200).json({
        status: 200, // Trạng thái lấy dữ liệu thành công
        results: results.length, // Số lượng bản ghi
        data: results, // Toàn bộ dữ liệu
      })
    }
  })
})


// API lấy thông tin một user theo ID
router.get('/:id', (req, res)=>{
  // Lấy id từ phía client
  const {id}  =req.params;
  // Khai báo chuỗi query string -  Câu lệnh thao tác với SQL
  const queryString   = "select * from users where UserId = ?";

  // Gọi database
  database.query(queryString, id, (error, results)=>{
    // Nếu thất bại
    if(error){
      return res.status(500).json({
        status: 500, 
        message: "Đã có lỗi xảy. Vui lòng liên hệ để được giải đáp",
        error: error
      })
    }else{
      // Nếu thành công
      return res.status(200).json({
        status: 200, // Trạng thái lấy dữ liệu thành công
        data: results, // Toàn bộ dữ liệu
      })
    }
  })
})

// API Xóa thông tin một user theo id
router.delete('/:id', (req, res)=>{
  // Lấy id từ phía client
  
})



module.exports = router
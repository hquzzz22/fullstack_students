const express = require("express");
const { logFuture} = require('../Middleware/logger/logger')

const app = express();
const studentRouter = express.Router();
const {
  getStudentDetail,
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent
} = require("../controllers/controlersStudents");
const { checkEmty, checkNumberClass } = require("../Middleware/validations/validationStudent");

// lấy danh sách học sinh
studentRouter.get("/",logFuture, getStudents);
// lấy thông tin chi tiết học sinh

studentRouter.get("/:id", getStudentDetail);
// thêm học sinh
studentRouter.post("/",checkEmty,checkNumberClass, addStudent);
// cập nhập học sinh
studentRouter.put("/:id", updateStudent);
// xóa học sinh
studentRouter.delete("/:id", deleteStudent);

module.exports = studentRouter;

// cac hàm controler xử lý
const {getList, StudentDetail, create, update, deleteStd} = require('../services/services')

console.log(create)

const getStudents = async(req, res) => {
  const students = await getList()
  if(students){
  return res.status(200).send(students);

  }else{
  return res.status(404).send("notfound");
  }
};

const getStudentDetail = async(req, res) => {
  const params = req.params; // thông tin người dùng resquest lên máy chủ cái này nó sẽ là 1 đối tượng (obj)mà người dùng gửi lên
  const id = params.id;
  const student = await StudentDetail(id)
  if(student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("not found");
  }

 
};

const addStudent = async (req, res) => {
  let student = req.body; //thông tin người dùng gửi lên từ body
  const newstudent = await create(student)
    res.status(202).send(newstudent)
 
};

const updateStudent = async(req, res) => {
  const { id } = req.params
  const student = req.body
  const updateStudent =await update(id,student)
  if(updateStudent) {
    res.status(200).send(updateStudent);
  }else{
    res.status(404).send("notfound");

  }
  
};

const deleteStudent = async(req, res) => {
  const { id } = req.params;
 const studentDelete = await deleteStd(id)
 if(studentDelete) {
  res.status(200).send(studentDelete);

 }else {
  res.status(404).send("not found");

 }
};
module.exports = {
  getStudentDetail,
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
};

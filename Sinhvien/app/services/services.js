const { Student } = require("../Model");
let students = [
    {
      id: 1,
      fullName: "tran hoang quy ",
      age: 18,
      numberClass: 12,
    },
    {
      id: 2,
      fullName: "tran van nhan ",
      age: 18,
      numberClass: 12,
    },
    {
      id: 3,
      fullName: "nguyen minh ly  ",
      age: 15,
      numberClass: 9,
    },
    {
      id: 4,
      fullName: "tran hoang long  ",
      age: 17,
      numberClass: 11,
    },
    {
      id: 5,
      fullName: "pham thanh luong  ",
      age: 16,
      numberClass: 10,
    },
  ];

  const getList =async () =>{
    const students =await Student.findAll()
    if(students) {
        return students
    } else {
        return false
    }
  }

const StudentDetail = async(id) => {
    const student = await Student.findOne({where: {id}})
    
      if (student) {
        return student
      } else {
        return false
      }
}


const create =async (student) => {

  const newStudent =await Student.create(student)
  //  const newstudent = {
  //   id: Math.random(),
  //   ...student,
  //  }

  //  students = [...students,newstudent]
  
   

    return newStudent


}

const update = async(id, student) => {
    const studentUpdate =await StudentDetail(id)  // lấy ra học sinh ban đầu chưa update
      if (studentUpdate) {
         studentUpdate.fullName = student.fullName
         studentUpdate.age= student.age
         studentUpdate.numberClass = student.numberClass
          
        const updateStudentd = await studentUpdate.save(); // llưu lại thông tin của học sinh vừa mới ul
        return updateStudentd
      } else {
        return false
      }
}

const deleteStd = async(id) => {
   const studentDelete = await StudentDetail(id)
    
      if (studentDelete) {
        await Student.destroy({
          where: {
            id,
          }})
        return studentDelete
      } else {
        return false
      }
}

  module.exports = {getList, StudentDetail, create, update, deleteStd
}
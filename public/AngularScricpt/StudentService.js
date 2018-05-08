app.service("StudentService", function ($http) {
    //get All Eployee  
    this.getAllStudents = function () {
        return $http.get("Student/GetStudentList");
    };
    // Adding Record  
    this.AddNewStudent = function (tbl_Student) {
        return $http({
            method: "post",
            url: "Student/AddStudent",
            data: JSON.stringify(tbl_Student),
            dataType: "json"
        });
    }
    // Updating record  
    this.UpdateStudent = function (tbl_Student) {
        return $http({
            method: "post",
            url: "Student/UpdateStudent",
            data: JSON.stringify(tbl_Student),
            dataType: "json"
        });
    }
    // Deleting records  
    this.deleteStudent = function (Id) {
        return $http.post('Student/DeleteStudent/' + Id)
    }
});  
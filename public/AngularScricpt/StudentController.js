app.controller("stuCntr", function ($scope, StudentService) {
    $scope.dvStudent = false;
    GetStudentList();
    $scope.students = [];
    $scope.student = {};
    var oldStudent = {};
    //To Get All Records  
    function GetStudentList() {
        StudentService.getAllStudents().success(function (stu) {
            $scope.students = stu;
        }).error(function () {
            alert('Error in getting records');
        });
    }
    // To display Add div  
    $scope.AddNewStudent = function () {
        $scope.Action = "Add";
        $scope.dvStudent = true;
    }
    // Adding New student record  
    $scope.AddStudent = function () {
        if ($scope.student.Id) {
            updateStudent($scope.student);
        }
        else {
            StudentService.AddNewStudent($scope.student).success(function (msg) {
                $scope.students.push(msg)
                $scope.dvStudent = false;
                $scope.student = {};
            }, function () {
                alert('Error in adding record');
            });
        }
    }
    // Deleting record.  
    $scope.deleteStudent = function (stu, index) {
        var retval = StudentService.deleteStudent(stu.Id).success(function (msg) {
            $scope.students.splice(index, 1);
            // alert('Student has been deleted successfully.');  
        }).error(function () {
            alert('Oops! something went wrong.');
        });
    }
    // Updateing Records  
    function updateStudent(tbl_Student) {

        var RetValData = StudentService.UpdateStudent(tbl_Student);
        RetValData.then(function (responceData) {
            $scope.student = {};
            $scope.dvStudent = false;
        }, function () {
            alert('Error in getting records');
        });
    }
    // Updateing Records  
    $scope.cancelEditStudent = function () {
        if ($scope.student.Id) {
            for (var prop in oldStudent) {
                //if (oldStudent.hasOwnPropetry(prop))
                    $scope.student[prop] = oldStudent[prop];
            }
        }
        $scope.student = {};
        $scope.dvStudent = false;
        
    }
    // Updateing Records  
    $scope.editStudent = function (stud) {
        oldStudent = Object.assign({},stud);
        $scope.student = stud;
        $scope.Action = "Update";
        $scope.dvStudent = true;
    }
});  
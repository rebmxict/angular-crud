function TodosController($scope) {
    $scope.estimates = [0, 1, 2, 3, 5, 8];

    $scope.todos = [{
        name: "Learn angular",
        estimate: 8,
        done: true},
    {
        name: "Install java",
        estimate: 2,
        done: false},
    {
        name: 'Uninstall ruby',
        estimate: 3,
        done: false}];
        
    $scope.addTodo = function() {
        if ($scope.todoName === "") {
            return false;
        }

        $scope.todos.push({
            name: $scope.todoName,
            estimate: $scope.todoEstimate,
            done: false
        });

        $scope.todoName = '';
        $scope.todoEstimate = 0;
    }
        
    $scope.sum = function(list, done) {
       var total = 0;
       angular.forEach(list, function(item) {
           if (item.done == done) total += item.estimate;
       });
       return total;    
    }
    
}

function TodoEditorController($scope) {
    $scope.editorEnabled = false;

    $scope.enableEditor = function() {
        $scope.editorEnabled = true;

        $scope.todoName = $scope.todo.name;
        $scope.todoEstimate = $scope.todo.estimate;
    },

    $scope.disableEditor = function() {
        $scope.editorEnabled = false;
    },

    $scope.save = function() {
        if ($scope.todoName === "") {
            return false;
        }

        $scope.todo.name = $scope.todoName;
        $scope.todo.estimate = $scope.todoEstimate;

        $scope.disableEditor();
    }
}


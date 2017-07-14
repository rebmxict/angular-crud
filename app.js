function TodosController($scope) {
    $scope.estimates = [0, 1, 2, 3, 5, 8];

    $scope.todos = [{
            id: "Learn angular",
            name: "sample name",
            destination: "sample destination",
            creation_date: "sample date",
            client_id: "sample client id",
            estimate: 8,
            done: true
        },
        {
            id: "Learn angular",
            name: "sample name",
            destination: "sample destination",
            creation_date: "sample date",
            client_id: "sample client id",
            estimate: 2,
            done: false
        },
        {
            name: 'Uninstall ruby',
            estimate: 3,
            done: false
        }
    ];

    $scope.addTodo = function() {
        if ($scope.id === "") {
            return false;
        }
        if ($scope.name === "") {
            return false;
        }
        if ($scope.destination === "") {
            return false;
        }
        if ($scope.creation_date === "") {
            return false;
        }
        if ($scope.client_id === "") {
            return false;
        }

        $scope.todos.push({
            id: $scope.id,
            name: $scope.name,
            destination: $scope.destination,
            creation_date: $scope.creation_date,
            client_id: $scope.client_id,
            estimate: $scope.todoEstimate,
            done: false
        });

        $scope.id = '';
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

            $scope.id = $scope.todo.id;
            $scope.name = $scope.todo.name;
            $scope.destination = $scope.todo.destination;
            $scope.creation_date = $scope.todo.creation_date;
            $scope.client_id = $scope.todo.client_id;
            $scope.todoEstimate = $scope.todo.estimate;
        },

        $scope.disableEditor = function() {
            $scope.editorEnabled = false;
        },

        $scope.save = function() {
            if ($scope.id === "") {
                return false;
            }
            if ($scope.name === "") {
                return false;
            }
            if ($scope.destination === "") {
                return false;
            }
            if ($scope.creation_date === "") {
                return false;
            }
            if ($scope.client_id === "") {
                return false;
            }

            $scope.todo.id = $scope.id;
            $scope.todo.name = $scope.name;
            $scope.todo.destination = $scope.destination;
            $scope.todo.creation_date = $scope.creation_date;
            $scope.todo.client_id = $scope.client_id;
            $scope.todo.estimate = $scope.todoEstimate;

            $scope.disableEditor();
        }
}
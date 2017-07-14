function TodosController($scope) {

    $scope.todos = [{
            id: "aLearn angular",
            name: "dsample name",
            weight: 1,
            destination: "sample destination",
            creation_date: "sample date",
            client_id: "sample client id",
            done: false
        },
        {
            id: "cLearn angular",
            name: "gsample name",
            weight: 12,
            destination: "sample destination",
            creation_date: "sample date",
            client_id: "sample client id",
            done: false
        },
        {
            id: "bLearn angular",
            name: "jsample name",
            weight: 3,
            destination: "sample destination",
            creation_date: "sample date",
            client_id: "sample client id",
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
        if ($scope.weight === "") {
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
            weight: $scope.weight,
            destination: $scope.destination,
            creation_date: $scope.creation_date,
            client_id: $scope.client_id,
            done: false
        });

        $scope.id = '';
    }

    $scope.sum = function(list, done) {
        var total = 0;
        angular.forEach(list, function(item) {
            if (item.done == done) total += item.weight;
        });
        return total;
    }

    $scope.sort = {
        column: 'weight',
        descending: false
    };

    $scope.changeSorting = function(column) {
        console.log(column);
        var sort = $scope.sort;
        if (sort.column == column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    };

}

function TodoEditorController($scope) {
    $scope.editorEnabled = false;

    $scope.enableEditor = function() {
            $scope.editorEnabled = true;

            $scope.id = $scope.todo.id;
            $scope.name = $scope.todo.name;
            $scope.weight = $scope.todo.weight;
            $scope.destination = $scope.todo.destination;
            $scope.creation_date = $scope.todo.creation_date;
            $scope.client_id = $scope.todo.client_id;
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
            if ($scope.weight === "") {
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
            $scope.todo.weight = $scope.weight;
            $scope.todo.destination = $scope.destination;
            $scope.todo.creation_date = $scope.creation_date;
            $scope.todo.client_id = $scope.client_id;

            $scope.disableEditor();
        }

    $scope.sort = {
        column: 'weight',
        descending: false
    };

    $scope.changeSorting = function(column) {
        var sort = $scope.sort;
        if (sort.column == column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    };
}
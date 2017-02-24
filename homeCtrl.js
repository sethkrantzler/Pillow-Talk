var app = angular.module('myApp',[]);

app.controller('homeCtrl', function ($scope) {

  $scope.statisticsArr = [];
  $scope.graphShow = true;
  $scope.index = 0;
  $scope.subIndex = 1;
  $scope.dailyGraphs = ['', 'dayQuality.png', ''];
  $scope.weeklyGraphs = ['weekHours.png', 'weekQuality.png', 'bedtimeWeekly.png'];
  $scope.monthlyGraphs = ['monthHours.png', 'monthQuality.png', 'bedtimeMonthly.png'];
  $scope.graphArray = [$scope.dailyGraphs, $scope.weeklyGraphs, $scope.monthlyGraphs];
  $scope.labels = [null,["1/21"],["1/4"]]


  $scope.dailyStats = {
    hours: "Total Hours: 8",
    bedtime: "Bedtime: 11:30 PM",
    wakeup: "Wake Up: 7:30 AM",
    awake: "Awake: (3, 15 Mins)",
    restless: "Restless: (2, 2 Mins)",
    percent: "Percent Asleep: 80%",
    steps: "Steps: 12,174",
    calories: "Calories: 1,400",
    stairs: "Stairs: 17 Flights",
  };

  $scope.weeklyStats = {
    hours: "Avg Hours: 7.56",
    bedtime: "Avg Bedtime: 11:30 PM",
    wakeup: "Avg Wake Up: 7:30 AM",
    awake: "Avg Awake: (1, 12 Mins)",
    restless: "Avg Restless: (2, 2 Mins)",
    percent: "Avg Percent Asleep: 86%",
    steps: "Avg Steps: 12,174",
    calories: "Avg Calories: 1,400",
    stairs: "Avg Stairs: 17 Flights",
  };

  $scope.monthlyStats = {
    hours: "Avg Hours: 6.5",
    bedtime: "Avg Bedtime: 12:36 PM",
    wakeup: "Avg Wake Up: 6:35 AM",
    awake: "Avg Awake: (4, 20 Mins)",
    restless: "Avg Restless: (2, 2 Mins)",
    percent: "Avg Percent Asleep: 80%",
    steps: "Avg Steps: 12,174",
    calories: "Avg Calories: 1,400",
    stairs: "Avg Stairs: 17 Flights",
  };

  $scope.statisticsArr.push($scope.dailyStats);
  $scope.statisticsArr.push($scope.weeklyStats);
  $scope.statisticsArr.push($scope.monthlyStats);

  $scope.changeIndex = function(num){
    $scope.index = num;
  }

  $scope.changeSubIndex = function(num){
    $scope.subIndex = num;
  }


});

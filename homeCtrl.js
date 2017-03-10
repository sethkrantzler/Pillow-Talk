var app = angular.module('myApp',[]);

app.controller('homeCtrl', function ($scope) {

  $scope.statisticsArr = [];
  $scope.graphShow = true;
  $scope.index = 0;
  $scope.subIndex = 1;
  $scope.titleArray = ["Today ", "January 21st-27th", "January", "January 21st","January 22nd", "January 23rd", "January 24th", "January 25th", "January 26th", "Today"]
  $scope.dailyGraphs = ['', 'dayQuality.png', ''];
  $scope.weeklyGraphs = ['weekHours.png', 'weekQuality.png', 'bedtimeWeekly.png'];
  $scope.sundayGraphs = ['', 'dayQuality7.png', ''];
  $scope.mondayGraphs = ['', 'dayQuality6.png', ''];
  $scope.tuesdayGraphs = ['', 'dayQuality5.png', ''];
  $scope.wednesdayGraphs = ['', 'dayQuality4.png', ''];
  $scope.thursdayGraphs = ['', 'dayQuality3.png', ''];
  $scope.fridayGraphs = ['', 'dayQuality2.png', ''];
  $scope.monthlyGraphs = ['monthHours.png', 'monthQuality.png', 'bedtimeMonthly.png'];
  $scope.graphArray = [$scope.dailyGraphs, $scope.weeklyGraphs, $scope.monthlyGraphs, $scope.sundayGraphs, $scope.mondayGraphs, $scope.tuesdayGraphs, $scope.wednesdayGraphs, $scope.thursdayGraphs, $scope.fridayGraphs, $scope.dailyGraphs];
  $scope.labels = ["1/21","1/22", "1/23", "1/24", "1/25", "1/26", "1/27"];


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

  $scope.changeIndex = function(num){
    $scope.index = num;
  }

  $scope.changeSubIndex = function(num){
    $scope.subIndex = num;
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  $scope.randomData = function(){
    $scope.statisticsArr.push($scope.dailyStats);
    $scope.statisticsArr.push($scope.weeklyStats);
    $scope.statisticsArr.push($scope.monthlyStats);
    for (var i = 0; i < 7; i++){
      $scope.newObj = {};
      $scope.newObj.hours =  "Total Hours: " + getRandomIntInclusive(4, 9).toString();
      $scope.newObj.bedtime = "Bedtime: " + getRandomIntInclusive(8, 12).toString() + ":" + getRandomIntInclusive(10, 60).toString() + " PM";
      $scope.newObj.wakeup = "Wake Up: " + getRandomIntInclusive(5, 9).toString() + ":" + getRandomIntInclusive(10, 60).toString() + " AM";
      $scope.newObj.awake = "Awake: (" + getRandomIntInclusive(1, 6).toString() + ", " + getRandomIntInclusive(2, 20).toString() + " Mins)";
      $scope.newObj.restless = "Restless: (" + getRandomIntInclusive(1, 6).toString() + ", " + getRandomIntInclusive(2, 20).toString() + " Mins)";
      $scope.newObj.percent = "Percent Asleep: " + getRandomIntInclusive(65, 100).toString() + "%";
      $scope.newObj.steps = "Steps: " +  getRandomIntInclusive(1, 12).toString() + "," + getRandomIntInclusive(100, 999).toString();
      $scope.newObj.calories = "Calories: " + getRandomIntInclusive(1, 3).toString() + "," + getRandomIntInclusive(100, 999).toString();
      $scope.newObj.stairs = "Stairs: " + getRandomIntInclusive(3, 20).toString() + " Flights";
      $scope.statisticsArr.push($scope.newObj)
    }
  };

  $scope.randomData()


});

var app = angular.module("app", ["chart.js"]).controller("LineCtrl", function ($scope) {

    $scope.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
    $scope.series = ['€ 25 k'];
    $scope.data = [
        [ 40, 70, 50, 45, 55, 65, 45, 50],
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
    $scope.colors = [{
        strokeColor: '#FFF',
        highlightFill: '#FFF',
        highlightStroke: '#FFF',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        pointBackgroundColor: 'rgba(255, 255, 255, 0.2)',
    }];
    $scope.options = {

    scales: {
        yAxes: [
            {
                id: 'y-axis-1',
                type: 'linear',
                display: false,
                position: 'left'
            }
        ]
        },
    };
});

Chart.defaults.global.defaultFontColor = "#fff";
Chart.defaults.global.defaultFontFamily = "Avenir Book";
Chart.defaults.global.tooltips.backgroundColor= "#fff";
Chart.defaults.global.tooltips.bodyFontColor= "#000";

// Custom select

angular.element(document).ready(function () {

    angular.element('select').each(function(){
        var $this = angular.element(this), numberOfOptions = angular.element(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            angular.element('div.select-styled.active').not(this).each(function(){
                angular.element(this).removeClass('active').next('ul.select-options').hide();
            });
            angular.element(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text(angular.element(this).text()).removeClass('active');
            $this.val(angular.element(this).attr('rel'));
            $list.hide();
        });
      
        angular.element(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

});

// Animation

angular.element('.anim').each(function(i) {
   delay =(i)*150;
   setTimeout(function (div) {
            div.show().addClass('animated');
        }, delay, angular.element(this));
});
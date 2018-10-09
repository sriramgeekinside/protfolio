angular
 .module('portfolio',[])
 .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
    })
 .controller('portfolioController', portfolioController);
portfolioController.$inject = ['$scope', '$http'];
function portfolioController($scope, $http) {
 var p = this;
 p.enableSuccess = false;
 p.submitForm = function(e){
    e.preventDefault();
    var data = p.form;
    $('.submitBtn').attr("disabled","disabled");
    $('#fupForm').css("opacity",".5");
    $http({
        url: "submit.php",
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: $.param(p.form)
    }).then(function(response){
        p.enableSuccess = true;
        $('#fupForm').css("opacity","");
        $(".submitBtn").removeAttr("disabled");
    },function(error){
        console.error(data);
    });
    // $.ajax({
    //     type: 'POST',
    //     url: 'submit.php',
    //     data: new FormData(this),
    //     contentType: false,
    //     cache: false,
    //     processData:false,
    //     beforeSend: function(){
    //         $('.submitBtn').attr("disabled","disabled");
    //         $('#fupForm').css("opacity",".5");
    //     },
    //     success: function(msg){
    //         if(msg == 'ok'){
    //             p.enableSuccess = true;
    //         }else{
                
    //         }
    //         $('#fupForm').css("opacity","");
    //         $(".submitBtn").removeAttr("disabled");
    //     }
    // });
 } 
}
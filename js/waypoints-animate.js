 // Custom waypoint triggered animations are defind here
// The waypoints are positioned in the HTML by using id="name-waypoint"
// Animations use animate.css https://github.com/daneden/animate.css
// Waypoints use noframework.waypoints.js from https://github.com/imakewebthings/waypoints/tree/master/lib

        $(document).ready(function(){
     
          // hide our element on page load

          $('#about-title-waypoint').css('opacity', 0);
          $('#about-waypoint1').css('opacity', 0);
          $('#about-waypoint2').css('opacity', 0);
          $('#about-waypoint3').css('opacity', 0);
          $('#services-title-waypoint').css('opacity', 0);
          $('#services-waypoint1').css('opacity', 0);
          $('#services-waypoint2').css('opacity', 0);
          $('#services-waypoint3').css('opacity', 0);
          $('#services-waypoint4').css('opacity', 0);
          $('#portfolio-title-waypoint').css('opacity', 0);
          $('#portfolio-waypoint1').css('opacity', 0);
          $('#portfolio-waypoint2').css('opacity', 0);
          $('#portfolio-waypoint3').css('opacity', 0);
          $('#portfolio-waypoint4').css('opacity', 0);


          //waypoint triggers  


          $('#about-title-waypoint').waypoint(function() {
              $('#about-title-waypoint').addClass('fadeIn');
          }, { offset: '70%' });

          $('#about-waypoint1').waypoint(function() {
              $('#about-waypoint1').addClass('fadeInRightBig');
          }, { offset: '70%' });

          $('#about-waypoint2').waypoint(function() {
              $('#about-waypoint2').addClass('fadeInLeftBig');
          }, { offset: '70%' });

          $('#about-waypoint3').waypoint(function() {
              $('#about-waypoint3').addClass('fadeInRightBig');
          }, { offset: '70%' });
         
          $('#services-title-waypoint').waypoint(function() {
              $('#services-title-waypoint').addClass('fadeIn');
          }, { offset: '70%' });

          $('#services-waypoint1').waypoint(function() {
              $('#services-waypoint1').addClass('fadeInLeftBig');
          }, { offset: '70%' });

          $('#services-waypoint2').waypoint(function() {
              $('#services-waypoint2').addClass('fadeInRightBig');
          }, { offset: '70%' });

          $('#services-waypoint3').waypoint(function() {
              $('#services-waypoint3').addClass('fadeInLeftBig');
          }, { offset: '70%' });

          $('#services-waypoint4').waypoint(function() {
              $('#services-waypoint4').addClass('fadeInRightBig');
          }, { offset: '70%' });

          $('#portfolio-title-waypoint').waypoint(function() {
              $('#portfolio-title-waypoint').addClass('fadeIn');
          }, { offset: '70%' });

          $('#portfolio-waypoint1').waypoint(function() {
              $('#portfolio-waypoint1').addClass('fadeInLeftBig');
          }, { offset: '70%' });

          $('#portfolio-waypoint2').waypoint(function() {
              $('#portfolio-waypoint2').addClass('fadeInRightBig');
          }, { offset: '70%' });

          $('#portfolio-waypoint3').waypoint(function() {
              $('#portfolio-waypoint3').addClass('fadeInLeftBig');
          }, { offset: '70%' });

          $('#portfolio-waypoint4').waypoint(function() {
              $('#portfolio-waypoint4').addClass('fadeInRightBig');
          }, { offset: '70%' });          
         
        });
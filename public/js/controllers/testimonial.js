angular.module('ae.testimonial', [])

.controller('TestimonialsCtrl', function ($scope, $resource) {
    $(".owl-carousel").owlCarousel({
        loop:true,
        dots: true,
        items: 1
    });
});
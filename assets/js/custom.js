var i = 0;
$(window).on('scroll', function () {
    //Proressbar
    setTimeout(function () {
        var hT = $('#skill_set').offset().top,
            hH = $('#skill_set').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH) && i == 0) {
            i++;
            //Progess bar
            var bar = new ProgressBar.Circle(laravel_container, {
                color: '#aaa',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 4,
                easing: 'bounce',
                duration: 3000,
                text: {
                   
                },
                from: { color: '#91278f', width: 1 },
                to: { color: '#cf97d7', width: 4 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);
                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "%");
                    }

                }
            });
            bar.text.style.fontFamily = 'Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';

            bar.animate(0.85);  // Number from 0.0 to 1.0
            //end progress bar
            //Progess bar
            var bar = new ProgressBar.Circle(php_container, {
                color: '#aaa',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 4,
                easing: 'bounce',
                duration: 3000,
                text: {
                  
                },
                from: { color: '#FA9D00', width: 1 },
                to: { color: '#FFD08D', width: 4 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "%");
                    }

                }
            });
            bar.text.style.fontFamily = 'Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';

            bar.animate(0.8);  // Number from 0.0 to 1.0
            //end progress bar

            var bar = new ProgressBar.Circle(mysql_container, {
                color: '#aaa',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 4,
                easing: 'bounce',
                duration: 3000,
                text: {
                   
                },
                from: { color: '#FFEA82', width: 1 },
                to: { color: '#ED6A5A', width: 4 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "%");
                    }

                }
            });
            bar.text.style.fontFamily = 'Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';

            bar.animate(0.75);  // Number from 0.0 to 1.0
            //end progress bar

            var bar = new ProgressBar.Circle(cake_php_container, {
                color: '#aaa',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 4,
                easing: 'bounce',
                duration: 3000,
                text: {
            
                },
                from: { color: '#00909E', width: 1 },
                to: { color: '#89DBEC', width: 4 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "%");
                    }

                }
            });
            bar.text.style.fontFamily = 'Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';

            bar.animate(0.6);  // Number from 0.0 to 1.0
            //end progress bar
            var bar = new ProgressBar.Line(angular_container, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#FFEA82',
                trailColor: '#eee',
                trailWidth: 4,
                svgStyle: { width: '100%', height: '100%' },
                text: {
                    style: {
                        // Text color.
                        // Default: same as stroke color (options.color)
                        color: '#999',
                        right: '0',
                        top: '30px',
                        padding: 0,
                        margin: 0,
                        transform: null
                    },
                    autoStyleContainer: false
                },
                from: { color: '#FFEA82' },
                to: { color: '#ED6A5A' },
                step: (state, bar) => {
                    bar.setText(Math.round(bar.value() * 100) + ' %');
                }
            });
            
            bar.animate(0.75);  // Number from 0.0 to 1.0
            //jquery container
             var bar = new ProgressBar.Line(jquery_container, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#42f47a',
                trailColor: '#eee',
                trailWidth: 4,
                svgStyle: { width: '100%', height: '100%' },
                text: {
                    style: {
                        // Text color.
                        // Default: same as stroke color (options.color)
                        color: '#999',
                        right: '0',
                        top: '30px',
                        padding: 0,
                        margin: 0,
                        transform: null
                    },
                    autoStyleContainer: false
                },
                from: { color: '#FFEA82' },
                to: { color: '#ED6A5A' },
                step: (state, bar) => {
                    bar.setText(Math.round(bar.value() * 100) + ' %');
                }
            });
            bar.animate(0.80);  // Number from 0.0 to 1.0

            //javascript container
             var bar = new ProgressBar.Line(javascript_container, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#d341f4',
                trailColor: '#eee',
                trailWidth: 4,
                svgStyle: { width: '100%', height: '100%' },
                text: {
                    style: {
                        // Text color.
                        // Default: same as stroke color (options.color)
                        color: '#999',
                        right: '0',
                        top: '30px',
                        padding: 0,
                        margin: 0,
                        transform: null
                    },
                    autoStyleContainer: false
                },
                from: { color: '#FFEA82' },
                to: { color: '#ED6A5A' },
                step: (state, bar) => {
                    bar.setText(Math.round(bar.value() * 100) + ' %');
                }
            });
            bar.animate(0.70);  // Number from 0.0 to 1.0

            //html_css container
             var bar = new ProgressBar.Line(html_css_container, {
                strokeWidth: 4,
                easing: 'easeInOut',
                duration: 1400,
                color: '#7fefc9',
                trailColor: '#eee',
                trailWidth: 4,
                svgStyle: { width: '100%', height: '100%' },
                text: {
                    style: {
                        // Text color.
                        // Default: same as stroke color (options.color)
                        color: '#999',
                        right: '0',
                        top: '30px',
                        padding: 0,
                        margin: 0,
                        transform: null
                    },
                    autoStyleContainer: false
                },
                from: { color: '#FFEA82' },
                to: { color: '#ED6A5A' },
                step: (state, bar) => {
                    bar.setText(Math.round(bar.value() * 100) + ' %');
                }
            });
            bar.animate(0.70);  // Number from 0.0 to 1.0
            $('#skill_set_temp').remove()

        }
    }, 500);
})
$(window).on("load", function () {
    $('footer').nextAll('div').remove();
});
$("#education").click(function () {
    $('html,body').animate({
        scrollTop: $(".education_section").offset().top - 20
    },
        'slow');
});
$("#profile").click(function () {
    $('html,body').animate({
        scrollTop: 0
    },
        'slow');
});
$("#skillset").click(function () {
    $('html,body').animate({
        scrollTop: $(".skillset_section").offset().top - 20
    }, 'slow');
});
$("#contact-us").click(function () {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top - 20
    }, 'slow');
});

(function ($, window, document, undefined) {

    // Function-level strict mode syntax
  'use strict';

    $.fn.animateCSS = function (effect, delay, callback) {

        return this.each(function () {

            var $this = $(this),
                transitionEnd = "webkitAnimationEnd oanimationend msAnimationEnd animationend";

            function run() {

                console.log(callback);

                $this.addClass( "animated " + effect);

                $this.bind( transitionEnd, function () {

                    $this.removeClass("animated " + effect);

                    if (typeof callback === "function") {

                        callback.call(this);

                        $this.unbind( transitionEnd );

                    }

                });

            }

            if (delay) {
                setTimeout(run, delay);
            } else {
                run();
            }

        });

    };

})(jQuery, window, document);
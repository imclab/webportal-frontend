require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        datatables: '../components/datatables/media/js/jquery.dataTables',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        datatables: {
            deps: ['jquery']
        }
    }
});

require(['app', 'jquery', 'translate'], function (app, $, translate) {
    'use strict';

    $(document).ready(function () {
        var replaceText = function () {
            var prop;
            var patt;
            for (prop in translate) {
                patt = new RegExp(prop, 'g');
                $('.js-wrapper').html($('.js-wrapper').html().replace(patt, translate[prop]));
            }
        };
        replaceText();
        app.init();
    });
});

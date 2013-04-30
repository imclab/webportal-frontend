require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        datatables: '../components/datatables/media/js/jquery.dataTables',
        autofill: '../components/autofill/media/js/AutoFill',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        datatables: {
            deps: ['jquery']
        },
        autofill: {
            deps: ['datatables']
        }
    }
});

require(['app', 'jquery', 'translate'], function (app, $, translate) {
    'use strict';

    $(document).ready(function () {
        var translateUI = function () {
            var prop;
            var patt;
            for (prop in translate) {
                patt = new RegExp(prop, 'g');
                $('.js-wrapper').html($('.js-wrapper').html().replace(patt, translate[prop]));
            }
        };
        translateUI();
        app.init();
    });
});

/* global define */

define(['jquery'], function ($) {
    'use strict';

    var user;

    user = {
        init : function() {
            console.log('init user');
            this.fetchUser();
        },

        fetchUser : function() {
            var self = this;
            $.ajax({
                url: '/server/username/info',
                dataType: 'text'
            })
            .done(
                function(data) {
                    console.log(data);
                    self.render(data);
                }
            )
            .fail(
                function(data) { self.fetchUserFail(data); }
            );
        },

        fetchUserFail : function () {
            $('#user').html('Null');
        },

        render : function(data) {
            try {
                var vals = data.split(',');
                console.log(data);
                $('#user').html(vals[0] + vals[1]);
                $('#money').html(vals[2]);
                $('#mail').html(vals[3]);
                $('#avatar').attr('src', 'http://minotar.net/avatar/' + vals[0]);
            } catch (err) {
                $('#user').html(err);
            }
        }
    };

    return user;

});
/* global define */

define(['jquery'], function ($) {
    'use strict';

    var user;

    user = {
        init : function() {
            this.fetchUser();
        },

        fetchUser : function() {
            var that = this;
            $.ajax({
                url: '/server/username/info',
                dataType: 'text'
            })
            .done(
                function(data) { that.render(data); }
            )
            .fail(
                function(data) { that.fetchUserFail(data); }
            );
        },

        fetchUserFail : function () {
            $('#user').html('Null');
        },

        render : function(data) {
            try {
                var vals = data.split(',');
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
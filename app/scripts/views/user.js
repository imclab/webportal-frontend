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
                success: that.render,
                error: that.fetchUserFail,
                dataType: 'text'
            });
        },

        fetchUserFail : function (data) {
            $('#user').html('Null');
            console.log(data);
        },

        render : function(data) {
            try {
                var vals = data.split(',');
                $('#user').html(vals[0] + vals[1]);
                $('#money').html(vals[2]);
                $('#mail').html(vals[3]);
                $('#avatarimg').attr('src', 'http://minotar.net/avatar/' + vals[0]);
            } catch (err) {
                $('#user').html(err);
            }
        }
    };

    return user;

});
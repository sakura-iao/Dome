
var user = {
    logout: function () {
        $.post(baseUrl + '/admin/logout', function (res) {
            alert(res.msg);
            if (res.code === 200) {
                // 退出成功，跳转到登录页面
                location.href = 'login.html';
            }
        });
    },

    login: function (username, password) {
        $.post(
            baseUrl + '/admin/login',
            { user_name: username, password: password },
            function (res) {
                console.log(res);
                console.log(res.code);

                alert(res.msg);
                if (res.code == 200) {
                    location.href = 'index.html';
                }
            },
            'json'
        )
    },
    getuser: function (callback) {
        $.get(baseUrl + '/admin/getUser', function (res) {
            callback(res);
        })
    }
}
AccountsTemplates.configure({
    showForgotPasswordLink: true,
    forbidClientAccountCreation: true,
    texts: {
        errors: {
            loginForbidden: "用户或密码错误",
            pwdMismatch: "密码不匹配",
        },
        title: {
            signIn: "登录",
            signUp: "注册",
        },
        button: {
            changePwd: "密码",
            enrollAccount: "Enroll Text",
            forgotPwd: "忘记密码",
            resetPwd: "重置密码",
            signIn: "登录",
            signUp: "注册",
        },
        inputIcons: {
            isValidating: "fa fa-spinner fa-spin",
            hasSuccess: "fa fa-check",
            hasError: "fa fa-times",
        }
    }
});

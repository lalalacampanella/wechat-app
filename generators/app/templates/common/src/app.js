//app.js
var Util = require('./utils/util');

App({
    onLaunch: function () {
        //调用API从本地缓存中获取数据1
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        console.log('wa');
    },
    getUserInfo: async function () {
        return await Util.getUserInfo();
    }
})

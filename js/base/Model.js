window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'hRRRrL03jHHRyJuplwIFdeb6-gzGzoHsz';
            var APP_KEY = 'wu44RXUHolqUMFOO7gFCCduM';
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        // 获取数据
        fetch: function () {
            var query = new AV.Query(resourceName)
            return query.find() // Promise对象
        },
        // 创建数据
        sava: function (object) {
            var X = AV.Object.extend(resourceName)
            var x = new X()
            return x.save(object)
        }
    }
}
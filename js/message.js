!function () {
    var view = View('section.message')
    var model = Model({ resourceName: 'Message' })
    // 只要和数据有关就放在model层里
    // var model = {
    //     init: function () {
    //         var APP_ID = 'hRRRrL03jHHRyJuplwIFdeb6-gzGzoHsz';
    //         var APP_KEY = 'wu44RXUHolqUMFOO7gFCCduM';
    //         AV.init({ appId: APP_ID, appKey: APP_KEY })
    //     },
    //     // 获取数据
    //     fetch: function () {
    //         var query = new AV.Query('Message')
    //         return query.find() // Promise对象
    //     },
    //     // 创建数据
    //     sava: function (name, content) {
    //         var Message = AV.Object.extend('Message')
    //         var message = new Message()
    //         return message.save({  // 返回Promise对象
    //             'name': name,
    //             'content': content
    //             // object就是存入数据的相关信息
    //         })
    //     }
    // }

    var controller = Controller({
        messageList: null,
        form: null,
        init: function (view, controller) {
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.loadMessages()
        },
        loadMessages: function () {
            this.model.fetch().then((messages) => {
                let array = messages.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}: ${item.content}`
                    this.messageList.appendChild(li)
                })
            })
        },
        bindEvents: function () {
            // submit事件包括提交按钮被点击和包含在任意一个input打回车
            this.form.addEventListener('submit', (e) => {
                // 提交默认会刷新页面，因此要阻止默认事件
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            // 得到用户输入的content
            let name = myForm.querySelector('input[name=name]').value
            let content = myForm.querySelector('input[name=content]').value
            if (content !== "" && name !== "") {
                this.model.sava({
                    'name': name, 'content': content
                }).then(function (object) {
                    // window.location.reload() // 存入成功后自动刷新页面,用户体验差！
                    // 不刷新，直接添加li
                    let li = document.createElement('li')
                    li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                    let messageList = document.querySelector('#messageList')
                    messageList.appendChild(li)
                    myForm.querySelector('input[name=content]').value = ''
                })
            }
        }
    })
    controller.init(view, model)
}.call()

//     var controller = {
//         view: null,
//         model: null,
//         messageList: null,
//         init: function (view, model) {
//             this.view = view
//             this.model = model

//             this.messageList = view.querySelector('#messageList')
//             this.form = view.querySelector('form')
//             this.model.init()
//             this.loadMessages()
//             this.bindEvents()
//         },
//         loadMessages: function () {
//             this.model.fetch().then((messages) => {
//                 let array = messages.map((item) => item.attributes)
//                 array.forEach((item) => {
//                     let li = document.createElement('li')
//                     li.innerText = `${item.name}: ${item.content}`
//                     this.messageList.appendChild(li)
//                 })
//             })
//         },
//         bindEvents: function () {
//             // submit事件包括提交按钮被点击和包含在任意一个input打回车
//             this.form.addEventListener('submit', (e) => {
//                 // 提交默认会刷新页面，因此要阻止默认事件
//                 e.preventDefault()
//                 this.saveMessage()
//             })
//         },
//         saveMessage: function () {
//             let myForm = this.form
//             // 得到用户输入的content
//             let name = myForm.querySelector('input[name=name]').value
//             let content = myForm.querySelector('input[name=content]').value
//             if (content !== "" && name !== "") {
//                 this.model.sava({
//                     'name': name, 'content': content
//                 }).then(function (object) {
//                     // window.location.reload() // 存入成功后自动刷新页面,用户体验差！
//                     // 不刷新，直接添加li
//                     let li = document.createElement('li')
//                     li.innerText = `${object.attributes.name}: ${object.attributes.content}`
//                     let messageList = document.querySelector('#messageList')
//                     messageList.appendChild(li)
//                     myForm.querySelector('input[name=content]').value = ''
//                 })
//             }
//         }
//     }
//     controller.init(view, model)
// }.call()




// 创建表
// var TestObject = AV.Object.extend('TestObject');
// 在表中创建一行数据
// var testObject = new TestObject();
// 保存数据，若成功就运行alert
// testObject.save({
//     words: 'Hello World!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })
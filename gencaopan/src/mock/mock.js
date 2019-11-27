// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
	let articles = [];
	for (let i = 0; i < 10; i++) {
		let newArticleObject = {
            title: Random.csentence(5, 20), //  Random.csentence( min, max )
			cover: Random.dataImage('73x62', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
			userName: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
			createAt: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
		}
		articles.push(newArticleObject)
	}

	return {
		data: articles
	}
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/article/index', 'post', produceNewsData);
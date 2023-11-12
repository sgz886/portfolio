// 如果是前端转给后端(真正部署的情况), 就像下面这么写
// window.MY_APP_API_URL = '/api/v1';
// , 然后配置代理
// netfliy的配置代理写法是
// /api/v1/*  http://beanstalk.../api/v1/:splat    200
// (splat是*的意思)

// 如果只是测试要写成 (真实的后端)
// window.MY_APP_API_URL = 'http://gordon-portfolio-backend-env.eba-n57y3b2h.ap-southeast-2.elasticbeanstalk.com:3002/api/v1';
// 或者 (本地起后端)
window.MY_APP_API_URL = 'http://localhost:3002/api/v1';

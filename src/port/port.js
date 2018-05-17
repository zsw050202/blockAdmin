let apiPort = {};
let host = 'http://localhost:8888';

apiPort.login = host + '/admin/login';
apiPort.getUsers = host + '/admin/users';
apiPort.addUser = host + '/admin/addUser';
apiPort.deleteUser = host + '/admin/deleteUser';
apiPort.addBlock = host +'/admin/addBlock';
apiPort.articles = host + '/admin/articles';
apiPort.queryArticle = host + '/admin/queryArticles';
apiPort.updateArticle = host + '/admin/updateArticle';
apiPort.deleteArticle = host + '/admin/deleteArticle';

export default apiPort;

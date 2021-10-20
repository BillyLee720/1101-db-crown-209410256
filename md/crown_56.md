# Frist One

![](https://i.imgur.com/7xA5p1I.png)

**_index.ejs_**

```html
<body>
  <h1><%= title %></h1>
  <p>Welcome to <%= title %></p>
  <p></p>
  <h3>My name is <%= name %></h3>
  <h3>My student id is <%= id %></h3>
</body>
```

**_index.js_**

```
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'LEE, Bo-Yan',
    id: '209410256',
  });
});
```

### Q2

(local) 將 crown theme 裡面的 index.ejs 複製到 views/crown_xx.ejs，並能在 Chrome 中顯示路由 /crown_xx，如下圖 localhost:3000/crown_xx。標題要有學號及姓名，如 P1 的傳入方式。請繳交
Chrome 截圖，要有 URL
routes/crown_xx.js ，相關重點以圖片呈現
views/crown_xx.ejs ，相關重點以圖片呈現

![](./擷取2.png)

routes/crown_56.js
![](./crown_56.png)
views/crown_56.ejs
![](./crown56ejs.png)

### Q3

(local) 請將 crown_xx.ejs 裡面 category 五筆資料 PostgreSQL 中，資料庫名稱 crown_xx, table 名稱 category_xx。繳交

![](./tempsnip.png)

### Q4

(heroku) 請將 P2 這一題的結果，在 heroku server 上顯示，路由是 /crown_xx。請繳交
Chrome 截圖 (要看到 URL，上面有 heroku app )
Github Repo URL
Heroku 畫面，要有 app 名稱

[github](https://github.com/BillyLee720/1101-db-crown-209410256)

![](herokucrown.png)
![](heroku.png)

### Q5

(heroku) 請將 P3 資料庫 category_xx 五筆資料，放到 Heroku Posgres 上。請繳交
Chrome 截圖 (要看到 URL，上面有 heroku database, category_xx, 和 5 筆資料 )
Heroku 畫面，要看到 DATABASE_URL 資料
請提供 Heroku DATABASE_URL 資料，並將之拆分提供文字放入 code (```)中

![](./pgadmindata.png)
![](./databaseurl.png)

Database

```
postgres://wukdsksghyaxel:b7bb9cf9f8095343aa9c560083f13870184ee174b29be0d68437e77551d77c86@ec2-52-87-123-108.compute-1.amazonaws.com:5432/d358o0lk32408p

Name : wukdsksghyaxel
password : b7bb9cf9f8095343aa9c560083f13870184ee174b29be0d68437e77551d77c86
Host : ec2-52-87-123-108.compute-1.amazonaws.com
Database : d358o0lk32408p
```

### Q6

(local) 將 views/crown_xx.ejs 複製一份成 crown2_xx.ejs，能夠直接到 PostgreSQL server 取得 category 5 筆資料，套入到 crown2_xx.ejs 中。在 Chrome 中要顯示路由 /crown2_xx 。標題要有 Crown2_xx (from title) 學號 (from id) 及姓名(from name)。請繳交
Chrome 截圖，要有 URL
app.js ，相關重點以圖片標註呈現
routes/crown2_xx.js，相關重點以圖片標註呈現呈現
views/crown2_xx.ejs ，相關重點以圖片標註呈現呈現
![](./crown2chrome.png)
![](./appjs.png)
![](./crown2route.png)
![](./crown2ejs.png)

### Q7

(heroku) 請將 P6 這一題的結果，在 heroku server 上顯示，路由是 /crown2_xx，category 資料必須要從 Heroku Posgres 上取得。請繳交
Chrome 截圖 (要看到 URL，上面有 heroku app )
Github Repo URL

![](./herokucrown2.png)

[Github](https://github.com/BillyLee720/1101-db-crown-209410256)

---

### Q8

(local) 實作 api 路由 /api_xx/category_xx，能夠直接到 PostgreSQL server 取得 category 5 筆資料並以 json 方式顯示。
請繳交
Chrome 截圖，要有 路由 /api_xx/category_xx
app.js ，相關重點以圖片標註呈現
routes/api_xx.js，相關重點以圖片標註呈現呈現
controllers/apiCrown2Controller_xx.js ，相關重點以圖片標註呈現呈現

![](./localapi.png)
![](./apiapp.png)
![](./routeapi.png)
![](./apicontroller.png)

### Q9

(heroku) 請將 P8 這一題的結果，在 heroku server 上顯示，路由是 /api_xx/category_xx，category 資料必須要從 Heroku Posgres 上取得。請繳交
Chrome 截圖 (要看到 /api_xx/category_xx，上面有 heroku app )
Github Repo URL

![](./apiheroku.png)
[GitHub](https://github.com/BillyLee720/1101-db-crown-209410256)

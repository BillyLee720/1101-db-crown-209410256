# Frist One

![](https://i.imgur.com/7xA5p1I.png)

***index.ejs***
```html
<body>
  <h1>
    <%= title %>
  </h1>
  <p>Welcome to
    <%= title %>
  </p>
  <p></p>
  <h3>My name is
    <%= name %>
  </h3>
  <h3>My student id is
    <%= id %>
  </h3>
</body>
```
***index.js***
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

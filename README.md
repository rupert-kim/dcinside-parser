#dcinside-parser

Parsing dcinside article by gallery name & article number

##installation

```bash
npm install https://github.com/hiun/dcinside-parser.git
```

##example

###input

```javascript
var dc = require('./dcinside-parser');

dc({
    gallery: 'sejong', //gallery name (String, required)
    id: 1,             //specific post id (Number, required)
    logging: true      //log result in console (Boolean, optional)
}, function (data) {
    //do stuff
});
```

###output
```javascript
{ 
    title: '세종대학교에 관련된 사진과 내용이 있어야 합니다.',
    txt: '안녕하세요. 디시인사이드 운영자입니다.세종대학교 관련된 사진과 내용이 있어야 합니다. 비방, 욕설, 음란물 등록 시 삭제 및 차단 조치가 되고 민, 형사상의 불이익을 받으실 수 있습니다. 기타 자세한 사항은 갤러리 상단의 갤러리 이용안내를 참고해 주시기 바랍니다.감사합니다.',
    date: Tue Nov 28 2006 17:52:16 GMT+0900 (KST),
    views: 14561,
    comments: 62,
    recUp: 2,
    recDown: 0 
}
```

##License

MIT
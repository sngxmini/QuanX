
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://www.kejiwanjia.com/wp-json/b2/v1/userMission`;
const method = `POST`;
const headers = {
'Accept' : `application/json, text/plain, */*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Origin' : `https://www.kejiwanjia.com`,
'Cookie' : `Hm_lpvt_56cd01307dc3c795bb735a379cdc5e35=1637284051; Hm_lvt_56cd01307dc3c795bb735a379cdc5e35=1637284004; _ga=GA1.1.1594676417.1637284004; _ga_82DHH1SNHE=GS1.1.1637284004.1.1.1637284051.0; b2_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3Lmtlaml3YW5qaWEuY29tIiwiaWF0IjoxNjM3Mjg0MDM1LCJuYmYiOjE2MzcyODQwMzUsImV4cCI6MTYzODA2MTYzNSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiODYwMiJ9fX0.PpvwQF8GAZAwcOvASfPtwgKMqWcGl5xXEli2zoYbI9U; __gads=ID=78e990371830091e-226f88ab27cf00b6:T=1637284005:RT=1637284005:S=ALNI_MYbWbUuuoluIxGhD37LcHFTcj0tKg`,
'Connection' : `keep-alive`,
'Host' : `www.kejiwanjia.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1`,
'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3Lmtlaml3YW5qaWEuY29tIiwiaWF0IjoxNjM3Mjg0MDM1LCJuYmYiOjE2MzcyODQwMzUsImV4cCI6MTYzODA2MTYzNSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiODYwMiJ9fX0.PpvwQF8GAZAwcOvASfPtwgKMqWcGl5xXEli2zoYbI9U`,
'Referer' : `https://www.kejiwanjia.com/task`,
'Accept-Language' : `zh-cn`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

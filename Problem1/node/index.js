console.log("aaaaa")

const express = require('express');

const app = express()
app.use(express.json())

app.listen(8080, () => {
   console.log('Server is running on port 8080');
});

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Request-Method', '*');
   res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
   res.header('Access-Control-Allow-Headers', '*');

   if (req.method === 'OPTIONS') {
      res.sendStatus(200);
   } else {
      next();
   }
});

app.post('/', (req, res) => {
   const pattern = req.body.pattern;
   console.log(pattern);

   // 以下に処理を記述し、res.writeに出力内容を渡してください。
   // ===============処理記述部分==================
   let number = "";

   const fizzBuzz = (array) => {
    let result = "";
    let isText = false;
    for (let i = 1; i <= 30; i++) {
      for (let j = array.length - 1; j >= 0; j--) {
        if (i % array[j].num === 0) {
          result += array[j].text;
          isText = true;
          break;
        }
      }
      if (i === 30) break;
      isText ? (result += ", ") : (result += i + ", ");
      isText = false;
    }
    return result;
  };
  
   req.on("data", (chunk) => {
     number += chunk;
   });
   req.on("end", () => {
     number = JSON.parse(number);
     result = fizzBuzz(number.obj);
     res.end(JSON.stringify({ data: result }));
   });

   
    
     const answer = result;


   // ===========================================
   res.writeHead(200, { 'Content-Type': 'text/html' });
   // 出力結果を以下に渡してください。
   res.write(answer);
   res.end();
});


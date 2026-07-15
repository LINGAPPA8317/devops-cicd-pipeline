const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevOps CI/CD Project</title>

    <style>
        body{
            margin:0;
            font-family:Arial, sans-serif;
            background:linear-gradient(135deg,#0f172a,#1e3a8a);
            color:white;
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
        }

        .card{
            background:rgba(255,255,255,0.1);
            padding:40px;
            border-radius:15px;
            text-align:center;
            box-shadow:0 10px 25px rgba(0,0,0,0.3);
            width:500px;
        }

        h1{
            color:#38bdf8;
        }

        p{
            font-size:18px;
        }

        .status{
            margin:20px 0;
            font-size:22px;
            color:#22c55e;
            font-weight:bold;
        }

        button{
            padding:12px 25px;
            font-size:16px;
            border:none;
            border-radius:8px;
            cursor:pointer;
            background:#38bdf8;
            color:white;
            transition:0.3s;
        }

        button:hover{
            background:#0ea5e9;
        }

        footer{
            margin-top:25px;
            font-size:14px;
            color:#ddd;
        }
    </style>
</head>

<body>

<div class="card">
    <h1>🚀 DevOps CI/CD Pipeline</h1>

    <p>Welcome to my Node.js application.</p>

    <div class="status">
      Application is Running Successfully
    </div>

    <p><strong>Technology Stack</strong></p>

    <p>
        Node.js |
        Express |
        Docker |
        Jenkins |
        GitHub |
        AWS EC2
    </p>

    <button onclick="showMessage()">
        Test Application
    </button>

    <footer>
        Created by <strong>Lingappa M</strong><br><br>
        CI/CD Auto Deployment Successful
    </footer>

</div>

<script>
function showMessage(){
    alert(" Congratulations! Your CI/CD Pipeline is Working Successfully.");
}
</script>

</body>
</html>
`);
});

app.listen(3000, () => {
    console.log("Server is running on Port 3000");
});

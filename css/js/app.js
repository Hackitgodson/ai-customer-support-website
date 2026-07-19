*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:#0d1117;
    color:white;
}

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    background:#161b22;
    position:sticky;
    top:0;
}

.logo{
    font-size:28px;
    font-weight:700;
    color:#00d4ff;
}

nav ul{
    display:flex;
    list-style:none;
}

nav ul li{
    margin-left:25px;
}

nav ul li a{
    color:white;
    text-decoration:none;
    transition:.3s;
}

nav ul li a:hover{
    color:#00d4ff;
}

.hero{
    text-align:center;
    padding:120px 10%;
}

.hero h1{
    font-size:55px;
    margin-bottom:20px;
}

.hero p{
    max-width:700px;
    margin:auto;
    font-size:20px;
    color:#ccc;
}

.btn{
    display:inline-block;
    margin-top:40px;
    background:#00d4ff;
    color:black;
    padding:15px 40px;
    text-decoration:none;
    border-radius:8px;
    font-weight:bold;
    transition:.3s;
}

.btn:hover{
    transform:translateY(-5px);
}

.services{
    padding:80px 8%;
}

.services h2{
    text-align:center;
    margin-bottom:50px;
    font-size:40px;
}

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.card{
    background:#161b22;
    padding:30px;
    border-radius:12px;
    transition:.3s;
}

.card:hover{
    transform:translateY(-10px);
}

.card h3{
    color:#00d4ff;
    margin-bottom:15px;
}

footer{
    text-align:center;
    padding:30px;
    background:#161b22;
    margin-top:60px;
}

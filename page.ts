// Create Page

export default function generatePage(randomId: string) {
    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL Shortener</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</head>

<body>
    <div class="container">
        <header class="header">
            <h1> <a href='/'> Simple URL Shortener </a></h1>
            <p>This is a simple url shortener written using OpenKV and Deno</p>
        </header>
        <main class="main">
           <h1> Short URL :</h1>
           <input type='text' value='${Deno.env.get('SITE_URL')}/?id=${randomId}' class="input" readonly/>
           <a href='/'><button  class='btn'>Make Another</button></a>    
        </main>
    </div>
</body>

</html>`;
    return htmlContent;
}

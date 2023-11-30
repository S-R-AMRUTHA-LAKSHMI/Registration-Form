<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>SIGNUP</title>
        <link rel="stylesheet"  href="/style.css">

    </head>
    <body>
        <div class="form-container">
            <h2>Signup</h2>
            <form action="/signup" method="post">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="username" placeholder="Enter your name" required autocomplete="off">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="password" required>
                </div>
    
                <button type="submit" class="submit-btn">Signup</button>
    
            
            </form>
           
        </div>
      
    </body>
</html>

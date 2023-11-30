<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>LOGIN</title>
        <link rel="stylesheet"  href="/style.css">

    </head>
    <body>
        <div class="form-container">
            <h2>Login</h2>
            <form action="/login" method="post">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="username" placeholder="Enter your name" required autocomplete="off">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="password" required>
                </div>
    
                <button type="submit" class="submit-btn">Login</button>
    
            
            </form>
            <p><b>Don't have an account?</b> <a href="/signup">Signup</a></p>
        </div>
      
    </body>
</html>

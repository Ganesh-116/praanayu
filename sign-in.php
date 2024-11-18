<?php 

session_start();

	include("connection.php");
	include("functions.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$user_name = $_POST['user_name'];
		$password = $_POST['password'];

		if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
		{

			//read from database
			$query = "select * from users where user_name = '$user_name' limit 1";
			$result = mysqli_query($con, $query);

			if($result)
			{
				if($result && mysqli_num_rows($result) > 0)
				{

					$user_data = mysqli_fetch_assoc($result);
					
					if($user_data['password'] === $password)
					{

						$_SESSION['user_id'] = $user_data['user_id'];
						header("Location: home.php");
						die;
					}
				}
			}
			
			echo "wrong username or password!";
		}else
		{
			echo "wrong username or password!";
		}
	}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="sign-up.css">
</head>
<body>
    <div class="container">
        <div class="left-side">
            <img src="C:\Users\DELL\Desktop\project.1\SIP project\praanayyu.png"height="200" width="300" alt="Background Image" class="animated-image">
        </div>
        <div class="right-side">
            <h1>Login</h1>
            
        
                <form action="post">

                <input type="text" placeholder="user_name" required>
                <input type="password" placeholder="Password" required>
                <div class="checkbox">
                    <a href="forgot.html">Forgot password?</a>
                </div>
                
                <input id="button" type="submit" value="Login"><br><br>
                <a href="signup.php">Click to Signup</a><br><br>
            </form>
        </div>
    </div>
</body>
</html>
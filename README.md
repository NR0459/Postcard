# Postcard creator
I am familiar with HTML/CSS, JavaScript, and PHP and upon looking through all the requirements, I knew Postcard app was the closest one to my skill level. 

# Getting Started
 Source files
 
postcard.html
postcatd.js
ms folder
mail.php
class.phpmailer.php - A full-featured email creation and transfer class for PHP (https://github.com/PHPMailer/PHPMailer)

# How to use the application
To run this application properly, follow the steps below.

1.	Open the application on your browser.
2.	Upload an image from your local machine using the BROWSE button on left side of the screen. 
3.	When uploading is completed, the selected image will appear your screen. 
4.	To write a message on the selected image, use the “Top Line” and/or “Bottom Line” text box on the top right side of the screen.
5.	Click “Save”. The image is saved to your local folder.
6.	To email the saved image, fill up the “To” and “From” field, then select the appropriate image and click send.

# Issues Faced
1.	I haven’t had a chance to implement webcam functionality into web application before. However, after researching I was able to design code to use Webcam but I couldn’t figure out how to write text on the screen after taking picture. As a result, I decided to go with file upload method.
2.	Image is saved to the “ms” folder with the name “myImage.” This name is static, but it would be better if the image name was dynamically changed each time it is saved. 
3.	Mail functionality doesn’t work. I used xampp to set my local server. Need more time/research into this issue.

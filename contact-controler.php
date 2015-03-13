<?php
///**
//// * Created by PhpStorm.
//// * User: jason
//// * Date: 3/11/2015
//// * Time: 9:32 PM
//// */
////// tell controller to retrieve form data
////try {
////	if(!@isset($_POST["email"]) || !@isset($_POST["firstName"]) || !@isset($_POST["lastName"]) || !@isset($_POST["txtAreaComments"])) {
////		throw new Exception('invalid input post');
////	}
////	$firstName = $_POST["firstName"];
////	$lastName = $_POST["lastName"];
////	$txtAreaComments = $_POST["textAreaComments"];
////
////
////	// convey message to self
////	$to = "kingjason1.jk@gmail.com";
////	$from = $_POST["email"];
////
////	// build headers
////	$headers = array();
////	$headers["To"] = $to;
////	$headers["From"] = $from;
////	$headers["Reply-To"] = $from;
////	$headers["Subject"] = "Message relay from jason@kingscreations.org";
////	$headers["MIME-Version"] = "1.0";
////	$headers["Content-Type"] = "text/html; charset=UTF-8";
////
////	// build message
////	$message = <<< EOF
////	<html>
////		<body>
////			<?php echo $txtAreaComments; ?><!--<br>Sent by:-->
<!--//			--><?php //echo $firstName "." $lastName; ?>
<!--//		</body>-->
<!--//	</html>-->
<!--//EOF;-->
<!--//	// send the email-->
<!--//-->
<!--//	error_reporting(E_ALL & ~(E_STRICT | E_NOTICE | E_DEPRECATED));-->
<!--//	$mailer =& Mail::factory("sendmail");-->
<!--//	$status = $mailer->send($to, $headers, $message);-->
<!--//	if(PEAR::isError($status) === true)-->
<!--////	{-->
<!--////		echo "<div class=\"alert alert-danger\" role=\"alert\"><strong>Jumpin Jehosaphat!</strong> Unable to send mail message:" . $status->getMessage() . "</div>";-->
<!--////	}-->
<!--////	else {-->
<!--////		echo "<div class=\"alert alert-success\" role=\"alert\">Thank you. Your email has been sent.-->
<!--////} catch(Exception $exception) {-->
<!--////	echo " < p class=\"alert alert-danger\" role=\"alert\">Exception: " . $exception->getMessage() . "</p>";-->
<!--////}-->
<!--//-->
<!--//		?>-->
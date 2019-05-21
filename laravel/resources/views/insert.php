<?php

  header('Access-Control-Allow-Origin:, *');
  header('Access-Control-Allow-Methods:, GET, POST, PUT, DELETE');
  header('Access-Control-Allow-Headers:, Origin, Content-Type');
  echo "connection established";die;
  // $data    = json_decode(file_get_contents("php://input"));
  // echo "<pre>";print_r($data->firstname);die;   
  $connect = mysqli_connect("localhost","root","","angular5project");
  $data    = json_decode(file_get_contents("php://input"));   
  if(count($data) > 0)
  {
    $first_name = mysqli_real_escape_string($connect,$data->name);
    $email      = mysqli_real_escape_string($connect,$data->email);
    $query      = "INSERT INTO user_table(firstname,email) VALUES ('$first_name','$email')";

    if(mysqli_query($connect,$query))
    {
      echo "Data Insert successfully...!!";
    }
    else
    {
     echo "Error";
    }
  }
?>
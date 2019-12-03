<?php
	require('conector.php');
	$con = new conectorBD();

	$response['conexion'] = $con->initConexion($con->database);
	if ($response['conexion'] == 'OK'){
		$conexion = $con->getConexion();
		$insert = $conexion->prepare('INSERT INTO usuarios (email, nombre, password , fecha_nacimiento) VALUES (?,?,?,?)');
		$insert->bind_param("ssss", $email, $nombre, $password, $fecha_nacimiento);

		$d_password = "123456";
		$email = "Henry@gmail.com";
		$nombre = "Henry";
		$password = password_hash($d_password, PASSWORD_DEFAULT);
		$fecha_nacimiento = "1992-12-08";

		$insert->execute();

		$email = 'dude@gmail.com';
		$nombre = 'Dude';
		$password = password_hash($d_password, PASSWORD_DEFAULT);
		$fecha_nacimiento = '1992-12-03';

		$insert->execute();

		$email = 'John@gmail.com';
		$nombre = 'John';
		$password = password_hash($d_password, PASSWORD_DEFAULT);
		$fecha_nacimiento = '1992-11-02';

		$insert->execute();
		$response['resultado'] = "1";
		$response['msg']= 'Informacio de inicio:';
		$getUsers = $con->consultar(['usuarios'],['*'],$condicion = "");
		while ($fila= $getUsers->fetch_assoc()) {
			$response['msg'].=$fila['email'];
		}
		$response['msg'].= 'contraenia: '.$d_password;
		}else{
			$response['resultado'] == "0";
			$response['msg'] = 'No se pudo conectar a la base de datos';
		}

		echo json_encode($response);

 ?>

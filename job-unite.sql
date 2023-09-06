-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2023 a las 01:08:50
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `job-unite`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `email`
--

CREATE TABLE `email` (
  `id_email` int(3) NOT NULL,
  `email` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_laboral`
--

CREATE TABLE `estado_laboral` (
  `id_estado_laboral` int(2) NOT NULL,
  `estado_description` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado_laboral`
--

INSERT INTO `estado_laboral` (`id_estado_laboral`, `estado_description`) VALUES
(1, 'empleado'),
(2, 'desempleado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nacionalidad`
--

CREATE TABLE `nacionalidad` (
  `id_nacionalidad` int(2) NOT NULL,
  `nombre_pais` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nacionalidad`
--

INSERT INTO `nacionalidad` (`id_nacionalidad`, `nombre_pais`) VALUES
(1, 'ARGENTINA'),
(2, 'BOLIVIA'),
(3, 'BRASIL'),
(4, 'CHILE'),
(5, 'COLOMBIA'),
(6, 'ECUADOR'),
(7, 'PARAGUAY'),
(8, 'PERU'),
(9, 'URUGUAY'),
(10, 'VENEZUELA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel_educacion`
--

CREATE TABLE `nivel_educacion` (
  `id_nivel_edu` int(2) NOT NULL,
  `edu_nivel` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nivel_educacion`
--

INSERT INTO `nivel_educacion` (`id_nivel_edu`, `edu_nivel`) VALUES
(1, 'SECUNDARIO COMPLETO'),
(2, 'SECUNDARIO INCOMPLETO'),
(3, 'TERCIARIO COMPLETO'),
(4, 'TERCIARIO INCOMPLETO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nro_cel`
--

CREATE TABLE `nro_cel` (
  `id_cel` int(3) NOT NULL,
  `num_cel` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `id_provincia` int(2) NOT NULL,
  `nombre_provincia` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`id_provincia`, `nombre_provincia`) VALUES
(1, 'BUENOS AIRES'),
(2, 'CATAMARCA'),
(3, 'CHACO'),
(4, 'CHUBUT'),
(5, 'CORDOBA'),
(6, 'CORRIENTES'),
(7, 'ENTRE RIOS'),
(8, 'FORMOSA'),
(9, 'JUJUY'),
(10, 'LA PAMPA'),
(11, 'LA RIOJA'),
(12, 'MENDOZA'),
(13, 'MISIONES'),
(14, 'NEUQUEN'),
(15, 'RIO NEGRO'),
(16, 'SALTA'),
(17, 'SAN JUAN'),
(18, 'SAN LUIS'),
(19, 'SANTA CRUZ'),
(20, 'SANTA FE'),
(21, 'SANTIAGO DEL ESTERO'),
(22, 'TIERRA DEL FUEGO'),
(23, 'TUCUMAN');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rubro`
--

CREATE TABLE `rubro` (
  `id_rubro` int(2) NOT NULL,
  `rol_description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rubro`
--

INSERT INTO `rubro` (`id_rubro`, `rol_description`) VALUES
(1, 'salud'),
(2, 'tecInfo'),
(3, 'educacion'),
(4, 'finanzas'),
(5, 'manufactura'),
(6, 'ventas'),
(7, 'administracion'),
(8, 'alimenticio'),
(9, 'construccion'),
(10, 'profesionales'),
(11, 'otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(3) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_info`
--

CREATE TABLE `users_info` (
  `id_info` int(100) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `dni` varchar(8) NOT NULL,
  `cuil` varchar(11) NOT NULL,
  `fecha_nacimiento` int(15) NOT NULL,
  `barrio` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_type`
--

CREATE TABLE `users_type` (
  `id_type` int(2) NOT NULL,
  `description` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_type`
--

INSERT INTO `users_type` (`id_type`, `description`) VALUES
(1, 'postulante'),
(2, 'empresa'),
(3, 'particular');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `email`
--
ALTER TABLE `email`
  ADD PRIMARY KEY (`id_email`);

--
-- Indices de la tabla `estado_laboral`
--
ALTER TABLE `estado_laboral`
  ADD PRIMARY KEY (`id_estado_laboral`);

--
-- Indices de la tabla `nacionalidad`
--
ALTER TABLE `nacionalidad`
  ADD PRIMARY KEY (`id_nacionalidad`);

--
-- Indices de la tabla `nivel_educacion`
--
ALTER TABLE `nivel_educacion`
  ADD PRIMARY KEY (`id_nivel_edu`);

--
-- Indices de la tabla `nro_cel`
--
ALTER TABLE `nro_cel`
  ADD PRIMARY KEY (`id_cel`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id_provincia`);

--
-- Indices de la tabla `rubro`
--
ALTER TABLE `rubro`
  ADD PRIMARY KEY (`id_rubro`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- Indices de la tabla `users_info`
--
ALTER TABLE `users_info`
  ADD PRIMARY KEY (`id_info`);

--
-- Indices de la tabla `users_type`
--
ALTER TABLE `users_type`
  ADD PRIMARY KEY (`id_type`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2147483648;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

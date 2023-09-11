-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-09-2023 a las 20:13:57
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
-- Base de datos: `job`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `id_contacto` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `num_tel` varchar(255) NOT NULL,
  `domicilio` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id_contacto`, `id_user`, `num_tel`, `domicilio`) VALUES
(1, 1, '3704563459', 'barrio villa del carmen'),
(2, 2, '3704563459', 'barrio villa del carmen'),
(3, 3, '3704563459', 'barrio villa del carmen'),
(4, 4, '3704563459', 'barrio villa del carmen'),
(5, 5, '3704563459', 'barrio villa del carmen'),
(6, 7, '3704563459', 'barrio villa del carmen'),
(7, 8, '3704563459', 'barrio villa del carmen'),
(8, 19, '3704563459', 'barrio villa del carmen'),
(9, 20, '3704563459', 'barrio villa del carmen');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleador`
--

CREATE TABLE `empleador` (
  `id_empleador` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `num_telEmpresa` varchar(255) DEFAULT NULL,
  `domicilioEmpresa` varchar(255) DEFAULT NULL,
  `nombre_empresa` varchar(255) NOT NULL,
  `id_rubro` int(11) DEFAULT NULL,
  `otro_rubro` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_laboral`
--

CREATE TABLE `estado_laboral` (
  `id_EstadoLaboral` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado_laboral`
--

INSERT INTO `estado_laboral` (`id_EstadoLaboral`, `descripcion`) VALUES
(1, 'desempleado'),
(2, 'empleado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `id_genero` int(11) NOT NULL,
  `sexo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`id_genero`, `sexo`) VALUES
(1, 'Masculino'),
(2, 'Femenino'),
(3, 'Sin especificar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nacionalidad`
--

CREATE TABLE `nacionalidad` (
  `id_pais` int(11) NOT NULL,
  `nombre_pais` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nacionalidad`
--

INSERT INTO `nacionalidad` (`id_pais`, `nombre_pais`) VALUES
(1, 'Argentina'),
(2, 'Bolivia'),
(3, 'Brasil'),
(4, 'Chile'),
(5, 'Colombia'),
(6, 'Ecuador'),
(7, 'Paraguay'),
(8, 'Perú'),
(9, 'Uruguay'),
(10, 'Venezuela'),
(11, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel_educacion`
--

CREATE TABLE `nivel_educacion` (
  `id_NivelEducacion` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nivel_educacion`
--

INSERT INTO `nivel_educacion` (`id_NivelEducacion`, `descripcion`) VALUES
(1, 'secundario completo'),
(2, 'secundario incompleto'),
(3, 'terciario completo'),
(4, 'terciario incompleto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `particular`
--

CREATE TABLE `particular` (
  `id_Particular` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `particular`
--

INSERT INTO `particular` (`id_Particular`, `id_user`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 7),
(7, 8),
(8, 19),
(9, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulante`
--

CREATE TABLE `postulante` (
  `id_postulante` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_EstadoLaboral` int(11) DEFAULT NULL,
  `id_NivelEducacion` int(11) DEFAULT NULL,
  `id_rubro` int(11) DEFAULT NULL,
  `otro_rubro` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `id_provincia` int(11) NOT NULL,
  `nombre_provincia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`id_provincia`, `nombre_provincia`) VALUES
(1, 'Buenos Aires'),
(2, 'Catamarca'),
(3, 'Chaco'),
(4, 'Chubut'),
(5, 'Cordoba'),
(6, 'Córrientes'),
(7, 'Entre Ríos'),
(8, 'Formosa'),
(9, 'Jujuy'),
(10, 'La Pampa'),
(11, 'La Rioja'),
(12, 'Mendoza'),
(13, 'Misiones'),
(14, 'Neuquen'),
(15, 'Río Negro'),
(16, 'Salta'),
(17, 'San Juan'),
(18, 'San Luis'),
(19, 'Santa Cruz'),
(20, 'Santa Fe'),
(21, 'Santiago del Estero'),
(22, 'Tierra del Fuego'),
(23, 'Tucuman');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rubro`
--

CREATE TABLE `rubro` (
  `id_rubro` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rubro`
--

INSERT INTO `rubro` (`id_rubro`, `descripcion`) VALUES
(1, 'Salud'),
(2, 'Tecnologia'),
(3, 'Educación'),
(4, 'Finanzas'),
(5, 'Manufactura'),
(6, 'Ventas'),
(7, 'Administración'),
(8, 'Alimenticio'),
(9, 'Construcción'),
(10, 'Docente'),
(11, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `user_name`, `user_email`, `user_password`, `estado`) VALUES
(1, 'Agustinm12', 'wagu520@live.com', '$2b$10$owjbvtIWMGIqyOdhSSjLieHnf653oBk6eoT6y2/pNmMyOObihbNDy', 1),
(2, 'Agustinm12456456', 'wagu52564560@live.com', '$2b$10$fn8waH8IDw41ECkjQ/zhGuTblvXuezhwLnPq9or/ykHhXh86KdsLu', 1),
(3, 'Agustinm', 'wagu52012@live.com', '$2b$10$QuAjyjH0GNphj7OMXwVHfe.IlI1am4aIED5UAwAFdiPHiTh5rSRJ.', 1),
(4, 'Agustinm1200000', 'wagu52015@live.com', '$2b$10$/B2/V61Cxokmb1wDbOmcWeUEgJux.UAiqWyA1JcBCH6yt3mglGZ0m', 1),
(5, 'Agustinm1212222', 'wagu52088@live.com', '$2b$10$/y9wxFhAjG7tqF5oK2yMneVER/PMppamdxB6toeLNTLFp1e1p9Ety', 1),
(7, 'Agustinm64', 'wagu52064@live.com', '$2b$10$WVgbLeFPTOYwCe/3779I3O3Z82.ok.X7s5ANZCJitEmkxmmlbjwgu', 1),
(8, 'Agustinm98', 'wagu52098@live.com', '$2b$10$NgHUrtMZU1V2yAbUIFO3e.CNc.ZERNVcXxIizey7355E7QfnYjanS', 1),
(19, 'Agustinm987987', 'wagu000@live.com', '$2b$10$nXxVnNnVXbITsNQtj0v0yuG90JCjc2em4cvL2gVLmZfpl6teOaiVy', 1),
(20, 'Agustinm98798768456', 'wagu777@live.com', '$2b$10$1p42LvQpyT2bNP./HdYlTOIkMOqgKTTKW33V4uTr5XxsIiY7X1XFG', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_info`
--

CREATE TABLE `users_info` (
  `id_info` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `dni` int(11) NOT NULL,
  `cuil` int(11) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `id_genero` int(11) DEFAULT NULL,
  `id_rol` int(11) DEFAULT NULL,
  `id_pais` int(11) DEFAULT NULL,
  `id_provincia` int(11) DEFAULT NULL,
  `otro_pais` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_info`
--

INSERT INTO `users_info` (`id_info`, `id_user`, `nombre`, `apellido`, `dni`, `cuil`, `fecha_nacimiento`, `id_genero`, `id_rol`, `id_pais`, `id_provincia`, `otro_pais`) VALUES
(1, 1, 'John', 'Doe', 44876123, 2147483647, '2001-12-30', 1, 3, 2, NULL, NULL),
(2, 2, 'John', 'Doe', 44876123, 2147483647, '2001-12-30', 3, 3, 6, NULL, NULL),
(3, 3, 'John', 'Doe', 44876123, 2147483647, '2001-12-30', 2, 3, 10, NULL, NULL),
(4, 4, 'John', 'Doe', 44876123, 2147483647, '2001-12-30', 3, 3, 10, NULL, NULL),
(5, 5, 'John', 'Doe', 44876123, 2147483647, '2001-12-30', 1, 3, 1, 11, NULL),
(6, 7, 'John', 'Doe', 44876123, 2147483647, '2001-12-30', 1, 3, 9, NULL, NULL),
(7, 8, 'John', 'Doe', 44876123, 2147483647, '2001-12-30', 1, 3, 6, NULL, NULL),
(8, 19, 'John', 'Doe', 44876123, 2147483647, '2001-12-30', 1, 3, 8, NULL, NULL),
(9, 20, 'John', 'Doe', 44876123, 2147483647, '2001-12-30', 2, 3, 4, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_rol`
--

CREATE TABLE `user_rol` (
  `id_rol` int(11) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_rol`
--

INSERT INTO `user_rol` (`id_rol`, `description`) VALUES
(1, 'postulante'),
(2, 'empresa'),
(3, 'particular');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id_contacto`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `empleador`
--
ALTER TABLE `empleador`
  ADD PRIMARY KEY (`id_empleador`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_rubro` (`id_rubro`);

--
-- Indices de la tabla `estado_laboral`
--
ALTER TABLE `estado_laboral`
  ADD PRIMARY KEY (`id_EstadoLaboral`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`id_genero`);

--
-- Indices de la tabla `nacionalidad`
--
ALTER TABLE `nacionalidad`
  ADD PRIMARY KEY (`id_pais`);

--
-- Indices de la tabla `nivel_educacion`
--
ALTER TABLE `nivel_educacion`
  ADD PRIMARY KEY (`id_NivelEducacion`);

--
-- Indices de la tabla `particular`
--
ALTER TABLE `particular`
  ADD PRIMARY KEY (`id_Particular`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `postulante`
--
ALTER TABLE `postulante`
  ADD PRIMARY KEY (`id_postulante`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_EstadoLaboral` (`id_EstadoLaboral`),
  ADD KEY `id_NivelEducacion` (`id_NivelEducacion`),
  ADD KEY `id_rubro` (`id_rubro`);

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
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `Users_user_name_unique` (`user_name`),
  ADD UNIQUE KEY `Users_user_email_unique` (`user_email`);

--
-- Indices de la tabla `users_info`
--
ALTER TABLE `users_info`
  ADD PRIMARY KEY (`id_info`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_genero` (`id_genero`),
  ADD KEY `id_rol` (`id_rol`),
  ADD KEY `id_pais` (`id_pais`),
  ADD KEY `id_provincia` (`id_provincia`);

--
-- Indices de la tabla `user_rol`
--
ALTER TABLE `user_rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `empleador`
--
ALTER TABLE `empleador`
  MODIFY `id_empleador` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estado_laboral`
--
ALTER TABLE `estado_laboral`
  MODIFY `id_EstadoLaboral` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `nacionalidad`
--
ALTER TABLE `nacionalidad`
  MODIFY `id_pais` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `nivel_educacion`
--
ALTER TABLE `nivel_educacion`
  MODIFY `id_NivelEducacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `particular`
--
ALTER TABLE `particular`
  MODIFY `id_Particular` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `postulante`
--
ALTER TABLE `postulante`
  MODIFY `id_postulante` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `provincia`
--
ALTER TABLE `provincia`
  MODIFY `id_provincia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `rubro`
--
ALTER TABLE `rubro`
  MODIFY `id_rubro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `users_info`
--
ALTER TABLE `users_info`
  MODIFY `id_info` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `user_rol`
--
ALTER TABLE `user_rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD CONSTRAINT `contacto_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `empleador`
--
ALTER TABLE `empleador`
  ADD CONSTRAINT `empleador_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  ADD CONSTRAINT `empleador_ibfk_2` FOREIGN KEY (`id_rubro`) REFERENCES `rubro` (`id_rubro`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `particular`
--
ALTER TABLE `particular`
  ADD CONSTRAINT `particular_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `postulante`
--
ALTER TABLE `postulante`
  ADD CONSTRAINT `postulante_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  ADD CONSTRAINT `postulante_ibfk_2` FOREIGN KEY (`id_EstadoLaboral`) REFERENCES `estado_laboral` (`id_EstadoLaboral`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `postulante_ibfk_3` FOREIGN KEY (`id_NivelEducacion`) REFERENCES `nivel_educacion` (`id_NivelEducacion`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `postulante_ibfk_4` FOREIGN KEY (`id_rubro`) REFERENCES `rubro` (`id_rubro`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `users_info`
--
ALTER TABLE `users_info`
  ADD CONSTRAINT `users_info_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  ADD CONSTRAINT `users_info_ibfk_2` FOREIGN KEY (`id_genero`) REFERENCES `genero` (`id_genero`),
  ADD CONSTRAINT `users_info_ibfk_3` FOREIGN KEY (`id_rol`) REFERENCES `user_rol` (`id_rol`),
  ADD CONSTRAINT `users_info_ibfk_4` FOREIGN KEY (`id_pais`) REFERENCES `nacionalidad` (`id_pais`),
  ADD CONSTRAINT `users_info_ibfk_5` FOREIGN KEY (`id_provincia`) REFERENCES `provincia` (`id_provincia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

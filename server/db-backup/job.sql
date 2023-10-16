-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-10-2023 a las 01:37:31
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `id_depar` int(11) NOT NULL,
  `nombre_depar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`id_depar`, `nombre_depar`) VALUES
(1, 'Formosa'),
(2, 'Pilcomayo'),
(3, 'Pilagás'),
(4, 'Laishí'),
(5, 'Pirané'),
(6, 'Patiño'),
(7, 'Bermejo'),
(8, 'Ramon Lista'),
(9, 'Matacos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleador`
--

CREATE TABLE `empleador` (
  `id_empleador` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `num_tel_empresa` varchar(255) DEFAULT NULL,
  `domicilio_empresa` varchar(255) DEFAULT NULL,
  `nombre_empresa` varchar(255) NOT NULL,
  `id_rubro` int(11) DEFAULT NULL,
  `otro_rubro` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleador`
--

INSERT INTO `empleador` (`id_empleador`, `id_user`, `num_tel_empresa`, `domicilio_empresa`, `nombre_empresa`, `id_rubro`, `otro_rubro`) VALUES
(1, 3, '3704563459', 'barrio villa del carmen', 'Honda', 9, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_laboral`
--

CREATE TABLE `estado_laboral` (
  `id_estado_laboral` int(11) NOT NULL,
  `desc_estado_laboral` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado_laboral`
--

INSERT INTO `estado_laboral` (`id_estado_laboral`, `desc_estado_laboral`) VALUES
(1, 'desempleado'),
(2, 'empleado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `id_genero` int(11) NOT NULL,
  `genero` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`id_genero`, `genero`) VALUES
(1, 'Masculino'),
(2, 'Femenino'),
(3, 'Sin especificar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id_image` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_pfp` tinyint(1) NOT NULL DEFAULT 0,
  `id_user` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidad`
--

CREATE TABLE `localidad` (
  `id_local` int(11) NOT NULL,
  `nombre_local` varchar(255) NOT NULL,
  `id_depar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `localidad`
--

INSERT INTO `localidad` (`id_local`, `nombre_local`, `id_depar`) VALUES
(1, 'Formosa', 1),
(2, 'Colonia Pastoril', 1),
(3, 'Gran Guardia', 1),
(4, 'San Hilario', 1),
(5, 'Mariano Boedo', 1),
(6, 'Villa del Carmen', 1),
(7, 'Clorinda', 2),
(8, 'Laguna Naick Neck', 2),
(9, 'Riacho He He', 2),
(10, 'Monte Lindo', 2),
(11, 'S.F Laishí', 3),
(12, 'Gral. Mansilla', 3),
(13, 'Herradura', 3),
(14, 'Yatai', 3),
(15, 'Misión Tacaagle', 4),
(16, 'Laguna Gallo', 4),
(17, 'Tres Lagunas', 4),
(18, 'El Espinillo', 4),
(19, 'Pirané', 5),
(20, 'El Colorado', 5),
(21, 'Villa Dos Trece', 5),
(22, 'Mayor Villafañe', 5),
(23, 'Palo Santo', 5),
(24, 'Las Lomitas', 6),
(25, 'Comandante Fontana', 6),
(26, 'Villa Gral Guemes', 6),
(27, 'Estanislao del Campo', 6),
(28, 'Pozo del Tigre', 6),
(29, 'Gral. Belgrano', 6),
(30, 'San Martin I', 6),
(31, 'San Martin II', 6),
(32, 'Fortin Lugones', 6),
(33, 'Subt. Perin', 6),
(34, 'Posta Cambio Zalazar', 6),
(35, 'Colonia Sarmiento', 6),
(36, 'Juan G. Bazan', 6),
(37, 'Bartolomé De Las Casas', 6),
(38, 'El Recreo', 6),
(39, 'Fortin Sargento Leyes', 6),
(40, 'Fortin Soledad', 7),
(41, 'Guadalcazar', 7),
(42, 'Lamadrid', 7),
(43, 'La Rinconada', 7),
(44, 'Los Chiriguanos', 7),
(45, 'Pozo de Maza', 7),
(46, 'Pozo del Mortero', 7),
(47, 'Vaca Perdida', 7),
(48, 'Gral. Mosconi', 8),
(49, 'El Potrillo', 8),
(50, 'Ing. Juarez', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel_educacion`
--

CREATE TABLE `nivel_educacion` (
  `id_nivel_educacion` int(11) NOT NULL,
  `desc_nivel_educacion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nivel_educacion`
--

INSERT INTO `nivel_educacion` (`id_nivel_educacion`, `desc_nivel_educacion`) VALUES
(1, 'secundario completo'),
(2, 'secundario incompleto'),
(3, 'terciario completo'),
(4, 'terciario incompleto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id_pais` int(11) NOT NULL,
  `nombre_pais` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id_pais`, `nombre_pais`) VALUES
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
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `id_post` int(11) NOT NULL,
  `post_title` varchar(255) NOT NULL,
  `post_content` varchar(255) NOT NULL,
  `is_emprise_post` tinyint(1) NOT NULL DEFAULT 0,
  `id_user` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`id_post`, `post_title`, `post_content`, `is_emprise_post`, `id_user`, `createdAt`, `updatedAt`) VALUES
(1, 'Se busca abogado', 'Estoy buscando un abogado, si esta interesado, comnicarse conmigo... 3704563459', 0, 1, '2023-10-14 18:35:23', '2023-10-14 18:35:23'),
(2, 'Se busca jardinero', 'Estoy buscando un jardinero, si esta interesado, comnicarse conmigo... 3704563459', 1, 3, '2023-10-14 18:37:19', '2023-10-14 18:37:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulante`
--

CREATE TABLE `postulante` (
  `id_postulante` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_estado_laboral` int(11) DEFAULT NULL,
  `id_nivel_educacion` int(11) DEFAULT NULL,
  `id_rubro` int(11) DEFAULT NULL,
  `otro_rubro` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `postulante`
--

INSERT INTO `postulante` (`id_postulante`, `id_user`, `id_estado_laboral`, `id_nivel_educacion`, `id_rubro`, `otro_rubro`) VALUES
(1, 2, 1, 1, 8, NULL);

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
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `rol_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `rol_name`) VALUES
(1, 'postulante'),
(2, 'empresa'),
(3, 'particular');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rubro`
--

CREATE TABLE `rubro` (
  `id_rubro` int(11) NOT NULL,
  `desc_rubro` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rubro`
--

INSERT INTO `rubro` (`id_rubro`, `desc_rubro`) VALUES
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
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `id_rol` int(11) DEFAULT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id_user`, `user_name`, `user_email`, `user_password`, `id_rol`, `estado`) VALUES
(1, 'Agustinm12', 'wagu520@live.com', '$2b$10$UWx6Ky53rgHLUkX3Xn4e2uX5DC/yhbt8rxOZMofwMVcR1IL1sgHbS', 3, 1),
(2, 'Agustinm123', 'wagu5201@live.com', '$2b$10$2G29ToUNuO/UntSEru5iU.XKoXHvLcMZjPlDWeNjllhmA8GTGZ8yG', 1, 1),
(3, 'Agustinm124', 'wagu5203@live.com', '$2b$10$lODsiaVzkd5t70PuY88yFeqgymSXoDdLcRiJCYXinGaxPr7SLaUES', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_info`
--

CREATE TABLE `user_info` (
  `id_info` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `dni` int(11) NOT NULL,
  `cuil` int(11) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `id_genero` int(11) DEFAULT NULL,
  `id_pais` int(11) DEFAULT NULL,
  `id_provincia` int(11) DEFAULT NULL,
  `otro_pais` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_info`
--

INSERT INTO `user_info` (`id_info`, `id_user`, `nombre`, `apellido`, `dni`, `cuil`, `fecha_nacimiento`, `id_genero`, `id_pais`, `id_provincia`, `otro_pais`) VALUES
(1, 1, 'John', 'Doe', 44876123, 2147483647, '2001-12-30', 3, 9, NULL, NULL),
(2, 2, 'Server', 'cloudinary', 44876123, 2147483647, '2001-12-30', 3, 11, NULL, 'Oregon'),
(3, 3, 'John', 'Doe', 44876123, 2147483647, '2001-12-30', 1, 1, 13, NULL);

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
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`id_depar`);

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
  ADD PRIMARY KEY (`id_estado_laboral`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`id_genero`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id_image`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `localidad`
--
ALTER TABLE `localidad`
  ADD PRIMARY KEY (`id_local`),
  ADD KEY `id_depar` (`id_depar`);

--
-- Indices de la tabla `nivel_educacion`
--
ALTER TABLE `nivel_educacion`
  ADD PRIMARY KEY (`id_nivel_educacion`);

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id_pais`);

--
-- Indices de la tabla `particular`
--
ALTER TABLE `particular`
  ADD PRIMARY KEY (`id_Particular`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `postulante`
--
ALTER TABLE `postulante`
  ADD PRIMARY KEY (`id_postulante`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_estado_laboral` (`id_estado_laboral`),
  ADD KEY `id_nivel_educacion` (`id_nivel_educacion`),
  ADD KEY `id_rubro` (`id_rubro`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id_provincia`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `rubro`
--
ALTER TABLE `rubro`
  ADD PRIMARY KEY (`id_rubro`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `user_user_name_unique` (`user_name`),
  ADD UNIQUE KEY `user_user_email_unique` (`user_email`),
  ADD KEY `id_rol` (`id_rol`);

--
-- Indices de la tabla `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`id_info`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_genero` (`id_genero`),
  ADD KEY `id_pais` (`id_pais`),
  ADD KEY `id_provincia` (`id_provincia`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `id_depar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `empleador`
--
ALTER TABLE `empleador`
  MODIFY `id_empleador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `estado_laboral`
--
ALTER TABLE `estado_laboral`
  MODIFY `id_estado_laboral` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id_image` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `localidad`
--
ALTER TABLE `localidad`
  MODIFY `id_local` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `nivel_educacion`
--
ALTER TABLE `nivel_educacion`
  MODIFY `id_nivel_educacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `paises`
--
ALTER TABLE `paises`
  MODIFY `id_pais` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `particular`
--
ALTER TABLE `particular`
  MODIFY `id_Particular` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `postulante`
--
ALTER TABLE `postulante`
  MODIFY `id_postulante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `provincia`
--
ALTER TABLE `provincia`
  MODIFY `id_provincia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `rubro`
--
ALTER TABLE `rubro`
  MODIFY `id_rubro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user_info`
--
ALTER TABLE `user_info`
  MODIFY `id_info` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD CONSTRAINT `contacto_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `empleador`
--
ALTER TABLE `empleador`
  ADD CONSTRAINT `empleador_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `empleador_ibfk_2` FOREIGN KEY (`id_rubro`) REFERENCES `rubro` (`id_rubro`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `localidad`
--
ALTER TABLE `localidad`
  ADD CONSTRAINT `localidad_ibfk_1` FOREIGN KEY (`id_depar`) REFERENCES `departamento` (`id_depar`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `particular`
--
ALTER TABLE `particular`
  ADD CONSTRAINT `particular_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `postulante`
--
ALTER TABLE `postulante`
  ADD CONSTRAINT `postulante_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `postulante_ibfk_2` FOREIGN KEY (`id_estado_laboral`) REFERENCES `estado_laboral` (`id_estado_laboral`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postulante_ibfk_3` FOREIGN KEY (`id_nivel_educacion`) REFERENCES `nivel_educacion` (`id_nivel_educacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postulante_ibfk_4` FOREIGN KEY (`id_rubro`) REFERENCES `rubro` (`id_rubro`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `user_info`
--
ALTER TABLE `user_info`
  ADD CONSTRAINT `user_info_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `user_info_ibfk_2` FOREIGN KEY (`id_genero`) REFERENCES `genero` (`id_genero`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_info_ibfk_3` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_info_ibfk_4` FOREIGN KEY (`id_provincia`) REFERENCES `provincia` (`id_provincia`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

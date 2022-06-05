-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 05, 2022 at 10:44 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dansmultipro_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(50) NOT NULL,
  `name` varchar(200) NOT NULL,
  `password` text NOT NULL,
  `username` varchar(255) NOT NULL,
  `gender` varchar(2) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `refresh_token` text DEFAULT NULL,
  `email` text NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `username`, `gender`, `phone_number`, `created_at`, `refresh_token`, `email`, `deleted_at`) VALUES
('700c6a80-11a3-4274-bea5-735be038141a', 'Dio Pratama', '81dc9bdb52d04dc20036dbd8313ed055', 'Dio', 'L', '0089808080', '2022-06-05 06:34:30', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJxdWVyeUxvZ2luIjp7ImlkIjoiNzAwYzZhODAtMTFhMy00Mjc0LWJlYTUtNzM1YmUwMzgxNDFhIiwibmFtZSI6IkRpbyBQcmF0YW1hIiwicGFzc3dvcmQiOiI4MWRjOWJkYjUyZDA0ZGMyMDAzNmRiZDgzMTNlZDA1NSIsInVzZXJuYW1lIjoiRGlvIiwiZ2VuZGVyIjoiTCIsInBob25lX251bWJlciI6IjAwODk4MDgwODAiLCJjcmVhdGVkX2F0IjoiMjAyMi0wNi0wNVQwNjozNDozMC4wMDBaIiwicmVmcmVzaF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp4ZFdWeWVVeHZaMmx1SWpwN0ltbGtJam9pTnpBd1l6WmhPREF0TVRGaE15MDBNamMwTFdKbFlUVXROek0xWW1Vd016Z3hOREZoSWl3aWJtRnRaU0k2SWtScGJ5QlFjbUYwWVcxaElpd2ljR0Z6YzNkdmNtUWlPaUk0TVdSak9XSmtZalV5WkRBMFpHTXlNREF6Tm1SaVpEZ3pNVE5sWkRBMU5TSXNJblZ6WlhKdVlXMWxJam9pUkdsdklpd2laMlZ1WkdWeUlqb2lUQ0lzSW5Cb2IyNWxYMjUxYldKbGNpSTZJakF3T0RrNE1EZ3dPREFpTENKamNtVmhkR1ZrWDJGMElqb2lNakF5TWkwd05pMHdOVlF3Tmpvek5Eb3pNQzR3TURCYUlpd2ljbVZtY21WemFGOTBiMnRsYmlJNmJuVnNiQ3dpWlcxaGFXd2lPaUprZVc5d2NtRjBZVzFoTmtCbmJXRnBiQzVqYjIwaUxDSmtaV3hsZEdWa1gyRjBJanB1ZFd4c2ZTd2lhV0YwSWpveE5qVTBOREUzT0RRMkxDSmxlSEFpT2pFMk5UUTFNRFF5TkRaOS5haENjV0N0Z0MxMXdtUjVtSFRFRnNuaEJFTUxlWDg2TmZDbEtnSjVtVUVnIiwiZW1haWwiOiJkeW9wcmF0YW1hNkBnbWFpbC5jb20iLCJkZWxldGVkX2F0IjpudWxsfSwiaWF0IjoxNjU0NDE4MjAyLCJleHAiOjE2NTQ1MDQ2MDJ9.CXUlCU9BTXYx8EbGk8cSVan0SgWWitpXyaLbFcjJ3Fk', 'dyopratama6@gmail.com', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

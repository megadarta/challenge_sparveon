-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 27 Okt 2021 pada 12.17
-- Versi server: 10.1.32-MariaDB
-- Versi PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `challenge_sparveon`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `akun_user`
--

CREATE TABLE `akun_user` (
  `id_akun_user` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `akun_user`
--

INSERT INTO `akun_user` (`id_akun_user`, `username`, `email`, `password`, `created_at`, `updated_at`) VALUES
(9, 'ardy', 'ardy@gmail.com', '$2b$10$ZY1O0e/hS3o7uMeRiAOvTuQ62bqDncwOVvCyrjH6V9ZDJQE.WYURW', NULL, NULL),
(10, 'Endang', 'endang@gmail.com', '$2b$10$alA.FfR86iq7X/gYG07WvegE1yn8Nvql6egUkSQPyw1KiI2qRQUy2', NULL, NULL),
(11, 'admin', 'admin@gmail.com', '$2b$10$/JZ24AxowQeMSOJjWp6/i.d2Bq8eeq.CjQqmWYo0MEG0umMcoicKW', NULL, NULL),
(12, 'maria', 'admin@gmail.com', '$2b$10$evKS.XgwD1AQC8nCWBDgkeHfGzdIDM0P3ExU4BJyMcV5ot62R4Phq', NULL, NULL),
(13, 'maria', 'admin@gmail.com', '$2b$10$JzEY2YyrCZlhXBzg0m/O4.iz9to.uyhSQLvKLyBdgK8pUprVnZAeW', NULL, NULL),
(14, '123123', 'vhvh@gmail.com', '$2b$10$0rrdKRWa2F1uFxJbICwxGO7DxOJYKcAxq/mjjxMH4ByAeL7pWva7i', NULL, NULL),
(15, 'test', 'admin@gmail.com', '$2b$10$yazW2lWIio2FuanMGlesDeRBc55v7e7qvRI9z5ZcJvXYrJLa04B7a', NULL, NULL),
(16, 'tyo123', 'tyo@gmail.com', '$2b$10$SMpHUCVLUHWN9jjdysWxdeQqWErOvkbBSSN7M0m0YUqeSg0fy9rAy', NULL, NULL),
(17, 'babay1', 'bayu@gmail.com', '$2b$10$or7nOtqhI534Cw17z2LRruLekpjOk054SfwRhK6N8/X5YxfdijIMS', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `akun_user`
--
ALTER TABLE `akun_user`
  ADD PRIMARY KEY (`id_akun_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `akun_user`
--
ALTER TABLE `akun_user`
  MODIFY `id_akun_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

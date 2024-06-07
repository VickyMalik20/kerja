-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Jun 2024 pada 18.22
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mtbfmttr`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `mtbf_mttr_results`
--

CREATE TABLE `mtbf_mttr_results` (
  `id` int(11) NOT NULL,
  `shift1_failures` int(11) DEFAULT NULL,
  `shift1_downtime` int(11) DEFAULT NULL,
  `shift1_mtbf` float DEFAULT NULL,
  `shift1_mttr` float DEFAULT NULL,
  `shift2_failures` int(11) DEFAULT NULL,
  `shift2_downtime` int(11) DEFAULT NULL,
  `shift2_mtbf` float DEFAULT NULL,
  `shift2_mttr` float DEFAULT NULL,
  `shift3_failures` int(11) DEFAULT NULL,
  `shift3_downtime` int(11) DEFAULT NULL,
  `shift3_mtbf` float DEFAULT NULL,
  `shift3_mttr` float DEFAULT NULL,
  `total_failures` int(11) DEFAULT NULL,
  `total_downtime` int(11) DEFAULT NULL,
  `total_mtbf` float DEFAULT NULL,
  `total_mttr` float DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `machine_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `mtbf_mttr_results`
--

INSERT INTO `mtbf_mttr_results` (`id`, `shift1_failures`, `shift1_downtime`, `shift1_mtbf`, `shift1_mttr`, `shift2_failures`, `shift2_downtime`, `shift2_mtbf`, `shift2_mttr`, `shift3_failures`, `shift3_downtime`, `shift3_mtbf`, `shift3_mttr`, `total_failures`, `total_downtime`, `total_mtbf`, `total_mttr`, `tanggal`, `machine_name`) VALUES
(118, 1, 1, 480, 1, 1, 1, 480, 1, 1, 1, 480, 1, 3, 3, 480, 1, '2024-06-18', 'autoloader'),
(119, 1, 1, 480, 1, 1, 1, 480, 1, 1, 1, 480, 1, 3, 3, 480, 1, '2024-06-17', 'autoloader');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mtbf_mttr_results2`
--
-- Kesalahan membaca struktur untuk tabel mtbfmttr.mtbf_mttr_results2: #1932 - Table &#039;mtbfmttr.mtbf_mttr_results2&#039; doesn&#039;t exist in engine
-- Kesalahan membaca data untuk tabel mtbfmttr.mtbf_mttr_results2: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `mtbfmttr`.`mtbf_mttr_results2`&#039; at line 1

-- --------------------------------------------------------

--
-- Struktur dari tabel `mtbf_mttr_results_2`
--

CREATE TABLE `mtbf_mttr_results_2` (
  `id` int(11) NOT NULL,
  `shift1_failures` int(11) DEFAULT NULL,
  `shift1_downtime` int(11) DEFAULT NULL,
  `shift1_mtbf` float DEFAULT NULL,
  `shift1_mttr` float DEFAULT NULL,
  `shift2_failures` int(11) DEFAULT NULL,
  `shift2_downtime` int(11) DEFAULT NULL,
  `shift2_mtbf` float DEFAULT NULL,
  `shift2_mttr` float DEFAULT NULL,
  `shift3_failures` int(11) DEFAULT NULL,
  `shift3_downtime` int(11) DEFAULT NULL,
  `shift3_mtbf` float DEFAULT NULL,
  `shift3_mttr` float DEFAULT NULL,
  `total_failures` int(11) DEFAULT NULL,
  `total_downtime` int(11) DEFAULT NULL,
  `total_mtbf` float DEFAULT NULL,
  `total_mttr` float DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `machine_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `mtbf_mttr_results_2`
--

INSERT INTO `mtbf_mttr_results_2` (`id`, `shift1_failures`, `shift1_downtime`, `shift1_mtbf`, `shift1_mttr`, `shift2_failures`, `shift2_downtime`, `shift2_mtbf`, `shift2_mttr`, `shift3_failures`, `shift3_downtime`, `shift3_mtbf`, `shift3_mttr`, `total_failures`, `total_downtime`, `total_mtbf`, `total_mttr`, `tanggal`, `machine_name`) VALUES
(6, 3, 3, 160, 1, 3, 3, 160, 1, 3, 3, 160, 1, 9, 9, 160, 1, '2024-06-07', 'autoloader'),
(7, 1, 1, 480, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1440, 1, '2024-06-21', 'blowing');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `mtbf_mttr_results`
--
ALTER TABLE `mtbf_mttr_results`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `mtbf_mttr_results_2`
--
ALTER TABLE `mtbf_mttr_results_2`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `mtbf_mttr_results`
--
ALTER TABLE `mtbf_mttr_results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT untuk tabel `mtbf_mttr_results_2`
--
ALTER TABLE `mtbf_mttr_results_2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

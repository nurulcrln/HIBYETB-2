-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2022 at 05:55 PM
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
-- Database: `db_hibyetb`
--

-- --------------------------------------------------------

--
-- Table structure for table `artikel`
--

CREATE TABLE `artikel` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(10000) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `url_foto` varchar(255) DEFAULT NULL,
  `pengunggah` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artikel`
--

INSERT INTO `artikel` (`id`, `judul`, `deskripsi`, `foto`, `url_foto`, `pengunggah`, `createdAt`, `updatedAt`) VALUES
(3, 'Apa itu TBC?', 'Suatu penyakit bakteri menular yang berpotensi serius yang terutama mempengaruhi paru-paru. Bakteri penyebab TB menyebar ketika orang yang terinfeksi batuk atau bersin. Kebanyakan orang yang terinfeksi dengan bakteri yang menyebabkan tuberkulosis tidak memiliki gejala. Ketika gejala memang terjadi, biasanya berupa batuk (kadang-kadang ada bercak darah), penurunan berat badan, berkeringat di malam hari, dan demam. Pengobatan tidak selalu diperlukan untuk orang-orang tanpa gejala. Pasien dengan gejala aktif akan membutuhkan perjalanan pengobatan panjang yang melibatkan beberapa antibiotik.', 'd898685b30b98c7e06eac91a0c22c824.jpg', 'http://localhost:5000/images/artikel/d898685b30b98c7e06eac91a0c22c824.jpg', 'Rika Arista', '2022-12-03 13:34:29', '2022-12-10 19:39:11'),
(6, 'Mengenal Fakta Seputar TBC', 'Tuberkulosis atau TBC di Indonesia adalah salah satu jenis penyakit infeksi yang menyerang banyak orang, bahkan sering kali berakhir dengan kematian. Lalu, apa itu TBC? Tuberkulosis atau TBC adalah penyakit yang disebabkan oleh infeksi bakteri Mycobacterium tuberculosis yang merusak jaringan tubuh manusia dan biasanya menyerang paru-paru.\r\nDi Indonesia, TBC adalah penyakit infeksi yang paling banyak berakhir dengan kematian dan menjadi nomor 1. Selain itu, perlu diketahui kuman TBC dapat bertahan dalam udara bebas selama 1-2 jam. Bahkan, setiap detik satu orang terinfeksi penyakit TBC dan membutuhkan layanan pengobatan selama 6 bulan.\r\nTBC lebih banyak terjadi pada laki-laki (60%) daripada perempuan (40%). Proporsi kasus tuberkulosis terbanyak tahun 2016 ditemukan pada kelompok usia produktif (25-34 tahun) yaitu sebesar 18,07%, diikuti kelompok umur 45-54 tahun sebesar 17,25 persen.\r\nTerakhir, saat telah terinfeksi TBC penderita mendapatkan pengobatan selama 6 bulan secara rutin. Tidak hanya itu, berdasarkan data dari WHO, Indonesia juga menjadi negara kedua penderita TBC terbanyak di dunia.', '8aeca81229b9da2a9013cb0de39a326c.png', 'http://localhost:5000/images/artikel/8aeca81229b9da2a9013cb0de39a326c.png', 'Okinawa', '2022-12-10 18:13:41', '2022-12-10 18:13:41'),
(7, 'Ciri Ciri Penyakit Tbc Yang Sudah Parah', 'Kemungkinan infeksi TBC masih merupakan infeksi TBC aktif sehingga gejala batuk masih tersisa. Bakteri TBC dapat menular dan menimbulkan sejumlah gejala setelah infeksi terjadi. Tanda dan gejala TB aktif meliputi: Batuk selama tiga minggu atau lebih ,Batuk darah atau lendir, Nyeri dada, Penurunan berat badan, Kelelahan, Demam, Keringat di malam hari, Panas dingin, Kehilangan selera makan. Oleh sebab itu sebaiknya anda berkonsultasi dengan dokter spesialis paru-paru untuk mendapatkan penanganan TBC dengan tepat. ', 'fd05d01f6b300cfa2a1f9552c18af848.jpg', 'http://localhost:5000/images/artikel/fd05d01f6b300cfa2a1f9552c18af848.jpg', 'Nabil', '2022-12-11 01:57:56', '2022-12-11 01:57:56'),
(10, 'Organ yang diserang TBC', 'Penyakit TBC disebabkan oleh bakteri yang bernama Mycobacterium Tuberculosis. Penyakit ini menular melalui percikan dahak penderita TBC saat bersin atau batuk. Bakteri yang terdapat dalam percikan dahak ini kemudian masuk melalui sistem pernapasan dan masuk ke paru-paru. Bakteri TBC bisa diam di paru-paru dan tidak menimbulkan gejala yang disebut fase laten. Jika daya tahan tubuh penderita menurun bakteri TBC bisa menjadi aktif dan mulai menimbulkan gejala.\r\nBakteri ini juga bisa menyebar ke organ tubuh lain melalui peredaran darah, melalui cairan limfa, atau menular langsung sehingga terjadi TBC ekstra paru. Gejala TBC ekstra paru berbeda-beda tergantung organ yang terserang. Berikut organ tubuh selain paru-paru yang bisa terkena TBC. Kelenjar getah bening, Organ pencernaan, Tulang dan sendi, Otak dan sistem saraf pusat, Ginjal dan saluran kencing, Kulit.', '8dcfb5789597fb5ea1a6fe6822f93ae8.jpg', 'http://localhost:5000/images/artikel/8dcfb5789597fb5ea1a6fe6822f93ae8.jpg', 'nurul', '2022-12-11 02:15:16', '2022-12-11 02:15:16'),
(11, 'Cara Penularan TBC ', 'Bakteri TB ditularkan melalui droplet yang terinfeksi di udara. Begitu tetesan ini memasuki udara, siapa pun di dekatnya dapat menghirupnya. Seseorang dengan TB dapat menularkan bakteri melalui bersin, batuk, berbicara, dan nyanyian. \r\n\r\nOrang dengan sistem kekebalan yang berfungsi dengan baik mungkin tidak mengalami gejala TB, bahkan jika mereka telah tertular bakteri tersebut, dikenal sebagai infeksi TB laten atau tidak aktif.', 'f21f3ce3ec344af2064026646c0738f2.jpg', 'http://localhost:5000/images/artikel/f21f3ce3ec344af2064026646c0738f2.jpg', 'Nurul', '2022-12-11 15:32:51', '2022-12-11 15:32:51'),
(12, 'Tahapan penularan dari penyakit tuberkulosis', 'Infeksi primer ketika bakteri masuk melalui hidung dan mulut yang menghirup udara dengan kandungan bakteri penyebab tuberkulosis. Bakteri ini bisa mencapai paru-paru, lalu mulai memperbanyak diri.\r\nInfeksi laten, terjadi ketika sistem imun melakukan perlawanan saat bakteri mulai berkembang biak. Ketika sistem imun kuat, maka bakteri dapat dihancurkan untuk  menahan perkembangan infeksinya. \r\nInfeksi aktif, terjadi ketika sistem imut tidak kuat atau lemah melawan serangan bakteri TB. Alhasil, bakteri akan lebih bebas memperbanyak diri dan menyerang sel-sel sehat di paru-paru.\r\nSetelah terinfeksi, Sahabat MIKA harus menjalani pengobatan dengan mengonsumsi obat TBC secara teratur selama 6-12 bulan. Pengobatan TBC memiliki tujuan untuk mengurangi jumlah bakteri secara perlahan untuk meminimalisir risiko penularan.', '39c5868540956cdf6e5fb28d3a8d9c23.jpg', 'http://localhost:5000/images/artikel/39c5868540956cdf6e5fb28d3a8d9c23.jpg', 'Nabil', '2022-12-11 15:33:38', '2022-12-11 15:33:38');

-- --------------------------------------------------------

--
-- Table structure for table `dokters`
--

CREATE TABLE `dokters` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `url_foto` varchar(255) DEFAULT NULL,
  `spesialis` varchar(255) DEFAULT NULL,
  `tempat_praktik` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dokters`
--

INSERT INTO `dokters` (`id`, `nama`, `email`, `foto`, `url_foto`, `spesialis`, `tempat_praktik`, `phone`, `createdAt`, `updatedAt`) VALUES
(11, 'Fero Fernando', 'halodoc4@gmail.com', '8a3af5328d58e2d885f698050a4b1aa0.jpg', 'http://localhost:5000/images/dokter/8a3af5328d58e2d885f698050a4b1aa0.jpg', 'Jantung', 'Bandung', 4837284, '2022-12-08 16:12:11', '2022-12-11 00:41:53'),
(12, 'Aisyah Nuna', 'halodoc1@gmail.com', '89ec43905d4d655dd0ed67fac3d61aac.jpg', 'http://localhost:5000/images/dokter/89ec43905d4d655dd0ed67fac3d61aac.jpg', 'Paru', 'Surabaya', 675674562, '2022-12-08 16:55:58', '2022-12-09 05:56:37'),
(13, 'Hasna Asyifa', 'halodoc2@gmail.com', '03498d8ad532b56c13eca079135eaf14.jpg', 'http://localhost:5000/images/dokter/03498d8ad532b56c13eca079135eaf14.jpg', 'Paru', 'Banjarnegara', 48923891, '2022-12-09 02:34:08', '2022-12-09 05:56:57'),
(14, 'Hermanto Akman', 'halodoc3@gmail.com', 'ff9c8fff0744614006c89030127b9c19.jpg', 'http://localhost:5000/images/dokter/ff9c8fff0744614006c89030127b9c19.jpg', 'Jantung', 'Purbalingga', 2147483647, '2022-12-09 05:51:52', '2022-12-09 05:57:29'),
(15, 'Mersy Deli Ayu', 'halodoc5@gmail.com', 'bacf2204157909fee990592b20c8dfff.jpg', 'http://localhost:5000/images/dokter/bacf2204157909fee990592b20c8dfff.jpg', 'Paru', 'Purwokerto', 668264896, '2022-12-09 05:53:32', '2022-12-09 17:02:39');

-- --------------------------------------------------------

--
-- Table structure for table `reminder`
--

CREATE TABLE `reminder` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tgl_mulai` datetime DEFAULT NULL,
  `tgl_selesai` datetime DEFAULT NULL,
  `jam_pagi` time DEFAULT NULL,
  `ket_pagi` varchar(255) DEFAULT NULL,
  `jam_siang` time DEFAULT NULL,
  `ket_siang` varchar(255) DEFAULT NULL,
  `jam_malam` time DEFAULT NULL,
  `ket_malam` varchar(255) DEFAULT NULL,
  `total_hari` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reminder`
--

INSERT INTO `reminder` (`id`, `user_id`, `tgl_mulai`, `tgl_selesai`, `jam_pagi`, `ket_pagi`, `jam_siang`, `ket_siang`, `jam_malam`, `ket_malam`, `total_hari`, `createdAt`, `updatedAt`) VALUES
(15, 5, '2022-12-13 00:00:00', '2023-02-13 00:00:00', '07:22:22', 'Obat Pagi', '13:22:22', 'Obat Siang', '23:22:22', 'Obat Malam', 62, '2022-12-11 10:22:21', '2022-12-11 10:14:18'),
(24, 6, '2022-12-23 00:00:00', '0000-00-00 00:00:00', '20:27:00', 'Obat Pagi', '11:17:00', 'Obat Siang', '23:17:00', 'Obat Malam', 0, '2022-12-11 12:17:22', '2022-12-11 14:26:39'),
(25, 7, '2022-12-20 00:00:00', '2023-02-24 00:00:00', '02:52:00', 'Obat Pagi', '13:52:00', 'Obat Siang', '23:52:00', 'Obat Malam', 66, '2022-12-11 15:52:39', '2022-12-11 15:58:06'),
(26, 8, '2022-12-14 00:00:00', '2023-03-21 00:00:00', '04:27:00', 'Obat Pagi', '13:27:00', 'Obat Siang', '20:28:00', 'Obat Malam', 97, '2022-12-11 16:28:09', '2022-12-11 16:28:40'),
(27, 9, '2022-12-22 00:00:00', '2023-06-01 00:00:00', '04:37:00', 'Obat Pagi', '12:37:00', 'Obat Siang', '23:37:00', 'Obat Malam', 161, '2022-12-11 16:37:51', '2022-12-11 16:38:08'),
(28, 10, '2022-12-23 00:00:00', '2023-04-25 00:00:00', '06:51:00', 'Obat Pagi', '14:51:00', 'Obat Siang', '18:52:00', 'Obat Malam', 123, '2022-12-11 16:52:05', '2022-12-11 16:52:28');

-- --------------------------------------------------------

--
-- Table structure for table `spesialis`
--

CREATE TABLE `spesialis` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `spesialis`
--

INSERT INTO `spesialis` (`id`, `nama`, `createdAt`, `updatedAt`) VALUES
(2, 'Penyakit Dalam', '2022-12-02 15:39:28', '2022-12-02 15:39:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nik` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `nik`, `age`, `phone`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(5, 'nurul', 'nurul@email.com', 2147483647, 21, 2147483647, '73l8gRjwLftklgfdXT+MdiMEjJwGPVMsyVxe16iYpk8=', 'user', '2022-12-11 07:35:02', '2022-12-11 07:35:02'),
(6, 'Adinda Puteri Faqiha', 'adinda@email.com', 2147483647, 21, 2147483647, '73l8gRjwLftklgfdXT+MdiMEjJwGPVMsyVxe16iYpk8=', 'user', '2022-12-11 10:25:18', '2022-12-11 10:25:18'),
(7, 'Nurul Carolina', 'nurul@gmail.com', 2147483647, 21, 2147483647, '73l8gRjwLftklgfdXT+MdiMEjJwGPVMsyVxe16iYpk8=', 'user', '2022-12-11 15:51:57', '2022-12-11 15:51:57'),
(8, 'dicoding', 'dicoding@gmail.com', 2147483647, 21, 2147483647, '73l8gRjwLftklgfdXT+MdiMEjJwGPVMsyVxe16iYpk8=', 'user', '2022-12-11 16:26:40', '2022-12-11 16:26:40'),
(9, 'kampusmerdeka', 'km@gmail.com', 2147483647, 21, 2147483647, '73l8gRjwLftklgfdXT+MdiMEjJwGPVMsyVxe16iYpk8=', 'user', '2022-12-11 16:37:01', '2022-12-11 16:37:01'),
(10, 'dicodingindo', 'dico@gmail.com', 13515436, 21, 2147483647, '73l8gRjwLftklgfdXT+MdiMEjJwGPVMsyVxe16iYpk8=', 'user', '2022-12-11 16:50:40', '2022-12-11 16:50:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artikel`
--
ALTER TABLE `artikel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dokters`
--
ALTER TABLE `dokters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reminder`
--
ALTER TABLE `reminder`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_relation` (`user_id`);

--
-- Indexes for table `spesialis`
--
ALTER TABLE `spesialis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artikel`
--
ALTER TABLE `artikel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `dokters`
--
ALTER TABLE `dokters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `reminder`
--
ALTER TABLE `reminder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `spesialis`
--
ALTER TABLE `spesialis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reminder`
--
ALTER TABLE `reminder`
  ADD CONSTRAINT `user_relation` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

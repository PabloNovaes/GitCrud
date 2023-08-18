SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `idade` int(2) NOT NULL,
  `avatar_url` varchar(150) DEFAULT NULL,
  `created_date` varchar(10) NOT NULL,
  `created_time` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `users` (`id`, `nome`, `idade`, `avatar_url`, `created_date`, `created_time`) VALUES
(255, 'defunkt', 28, 'https://avatars.githubusercontent.com/u/2?v=4', '06/08/2023', '21:12:13'),
(256, 'pjhyett', 24, 'https://avatars.githubusercontent.com/u/3?v=4', '06/08/2023', '21:12:14'),
(257, 'wycats', 16, 'https://avatars.githubusercontent.com/u/4?v=4', '06/08/2023', '21:12:14'),
(258, 'ezmobius', 18, 'https://avatars.githubusercontent.com/u/5?v=4', '06/08/2023', '21:12:15'),
(259, 'ivey', 29, 'https://avatars.githubusercontent.com/u/6?v=4', '06/08/2023', '21:12:15'),
(260, 'evanphx', 27, 'https://avatars.githubusercontent.com/u/7?v=4', '06/08/2023', '21:12:16'),
(261, 'vanpelt', 29, 'https://avatars.githubusercontent.com/u/17?v=4', '06/08/2023', '21:12:16'),
(262, 'wayneeseguin', 30, 'https://avatars.githubusercontent.com/u/18?v=4', '06/08/2023', '21:12:17'),
(263, 'brynary', 20, 'https://avatars.githubusercontent.com/u/19?v=4', '06/08/2023', '21:12:17'),
(264, 'kevinclark', 33, 'https://avatars.githubusercontent.com/u/20?v=4', '06/08/2023', '21:12:18'),
(265, 'technoweenie', 27, 'https://avatars.githubusercontent.com/u/21?v=4', '06/08/2023', '21:12:18'),
(266, 'macournoyer', 18, 'https://avatars.githubusercontent.com/u/22?v=4', '06/08/2023', '21:12:19'),
(267, 'takeo', 19, 'https://avatars.githubusercontent.com/u/23?v=4', '06/08/2023', '21:12:19'),
(268, 'caged', 21, 'https://avatars.githubusercontent.com/u/25?v=4', '06/08/2023', '21:12:20'),
(269, 'topfunky', 22, 'https://avatars.githubusercontent.com/u/26?v=4', '06/08/2023', '21:12:20'),
(270, 'anotherjesse', 25, 'https://avatars.githubusercontent.com/u/27?v=4', '06/08/2023', '21:12:21'),
(271, 'roland', 24, 'https://avatars.githubusercontent.com/u/28?v=4', '06/08/2023', '21:12:21'),
(272, 'lukas', 23, 'https://avatars.githubusercontent.com/u/29?v=4', '06/08/2023', '21:12:22'),
(273, 'fanvsfan', 25, 'https://avatars.githubusercontent.com/u/30?v=4', '06/08/2023', '21:12:22'),
(274, 'tomtt', 30, 'https://avatars.githubusercontent.com/u/31?v=4', '06/08/2023', '21:12:23'),
(275, 'railsjitsu', 32, 'https://avatars.githubusercontent.com/u/32?v=4', '06/08/2023', '21:12:23'),
(276, 'nitay', 16, 'https://avatars.githubusercontent.com/u/34?v=4', '06/08/2023', '21:12:24'),
(277, 'kevwil', 32, 'https://avatars.githubusercontent.com/u/35?v=4', '06/08/2023', '21:12:24'),
(279, 'jamesgolick', 24, 'https://avatars.githubusercontent.com/u/37?v=4', '06/08/2023', '21:12:25'),
(280, 'atmos', 33, 'https://avatars.githubusercontent.com/u/38?v=4', '06/08/2023', '21:12:26'),
(281, 'errfree', 32, 'https://avatars.githubusercontent.com/u/44?v=4', '06/08/2023', '21:12:26');


ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=288;
COMMIT;


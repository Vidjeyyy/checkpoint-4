DROP TABLE IF EXISTS `comments`;

CREATE TABLE
    `comments` (
        `id` INT PRIMARY KEY AUTO_INCREMENT,
        `content` TEXT
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COLLATE = utf8_general_ci;
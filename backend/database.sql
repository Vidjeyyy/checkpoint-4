DROP TABLE IF EXISTS users;
CREATE TABLE `users` (
  `users_id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `password` varchar(255),
  `is_admin` boolean
);

DROP TABLE IF EXISTS smartphones;

CREATE TABLE `smartphones` (
  `smartphones_id` int PRIMARY KEY AUTO_INCREMENT,
  `models_id` int,
  `price` int,
  `brands_id` int,
  `rams_id` int,
  `storages_id` int
);

DROP TABLE IF EXISTS rams;


CREATE TABLE `rams` (
  `rams_id` int PRIMARY KEY AUTO_INCREMENT,
  `value` int
);

DROP TABLE IF EXISTS storages;

CREATE TABLE `storages` (
  `storages_id` int PRIMARY KEY AUTO_INCREMENT,
  `value` int
);

DROP TABLE IF EXISTS models;

CREATE TABLE `models` (
  `models_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `brands_id` int,
  `price` int
);

DROP TABLE IF EXISTS brands;

CREATE TABLE `brands` (
  `brands_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `imgUrl` varchar(255)
);

ALTER TABLE `smartphones` ADD FOREIGN KEY (`brands_id`) REFERENCES `brands` (`brands_id`);

ALTER TABLE `smartphones` ADD FOREIGN KEY (`rams_id`) REFERENCES `rams` (`rams_id`);

ALTER TABLE `smartphones` ADD FOREIGN KEY (`storages_id`) REFERENCES `storages` (`storages_id`);

ALTER TABLE `smartphones` ADD FOREIGN KEY (`models_id`) REFERENCES `models` (`models_id`);

ALTER TABLE `models` ADD FOREIGN KEY (`brands_id`) REFERENCES `brands` (`brands_id`);



INSERT INTO users (email, password, is_admin)
VALUES
    ('utilisateur1@example.com', 'motdepasse1', true),
    ('utilisateur2@example.com', 'motdepasse2', false),
    ('utilisateur3@example.com', 'motdepasse3', false);


INSERT INTO brands (name, imgUrl)
VALUES
    ('Apple', 'https://svgshare.com/i/ukX.svg'),
    ('Samsung', 'https://i.postimg.cc/ncKffVWJ/Samsung-Logo-650x366-removebg-preview.png'),
    ('Sony', 'https://svgshare.com/i/ukv.svg'),
    ('Huawei', 'https://svgshare.com/i/umq.svg'),
    ('BlackBerry', 'https://i.postimg.cc/XJg90C95/Blackberry-Logo-650x366-removebg-preview.png'),
    ('LG', 'https://i.postimg.cc/xdJsYtdz/LG-Logo-650x366-removebg-preview.png');

INSERT INTO models (name, brands_id, price)
VALUES
    ('iPhone 13', 1, 129),
    ('iPhone 13 Pro', 1, 139),
    ('iPhone 13 mini', 1, 69),
    ('iPhone 12', 1, 99),
    ('iPhone 12 Pro', 1, 109),
    ('iPhone SE', 1, 49),
    ('iPhone 11', 1, 59),
    ('iPhone XR', 1, 69),
    ('iPhone XS', 1, 89),
    ('iPhone 8', 1, 44),
    ('iPhone SE 2020', 1, 39),
    ('iPhone X', 1, 89),
    ('iPhone 7', 1, 34),
    ('iPhone 6s', 1, 24),
    ('iPhone SE 2nd Gen', 1, 49),
    ('iPhone XS Max', 1, 99),
    ('iPhone 12 mini', 1, 69),
    ('iPhone 11 Pro', 1, 99),
    ('iPhone 11 Pro Max', 1, 109),
    ('iPhone 12 Pro Max', 1, 119),
    ('Galaxy S21 Ultra', 2, 124),
    ('Galaxy S21 Plus', 2, 104),
    ('Galaxy S21', 2, 89),
    ('Galaxy Note 20 Ultra', 2, 129),
    ('Galaxy Note 20', 2, 99),
    ('Galaxy S20 Ultra', 2, 119),
    ('Galaxy S20 Plus', 2, 99),
    ('Galaxy S20 FE', 2, 69),
    ('Galaxy A71', 2, 44),
    ('Galaxy A52', 2, 39),
    ('Galaxy S10', 2, 79),
    ('Galaxy S10 Plus', 2, 89),
    ('Galaxy S10e', 2, 69),
    ('Galaxy Note 10', 2, 94),
    ('Galaxy Note 10 Plus', 2, 104),
    ('Galaxy S9', 2, 59),
    ('Galaxy S9 Plus', 2, 69),
    ('Galaxy A50', 2, 34),
    ('Galaxy A20', 2, 24),
    ('Galaxy M51', 2, 39),
    ('Xperia 1 III', 3, 129),
    ('Xperia 5 III', 3, 99),
    ('Xperia 10 III', 3, 49),
    ('Xperia 5 II', 3, 89),
    ('Xperia 1 II', 3, 109),
    ('Xperia 10 II', 3, 39),
    ('Xperia 5', 3, 69),
    ('Xperia 1', 3, 99),
    ('Xperia XZ3', 3, 49),
    ('Xperia XZ2', 3, 34),
    ('Xperia XZ1', 3, 29),
    ('Xperia XZ1 Compact', 3, 34),
    ('Xperia 10', 3, 24),
    ('Xperia L4', 3, 19),
    ('Xperia XA2', 3, 19),
    ('Xperia XA2 Ultra', 3, 29),
    ('Xperia XZ Premium', 3, 49),
    ('Xperia XZs', 3, 29),
    ('Xperia L3', 3, 17),
    ('Xperia XA1', 3, 19),
    ('Xperia L3', 3, 17);




INSERT INTO rams (value)
VALUES
    (1),
    (2),
    (3),
    (4),
    (6),
    (8),
    (16);

INSERT INTO storages (value)
VALUES
    (8),
    (16),
    (32),
    (64),
    (128),
    (256),
    (512),
    (1024);

INSERT INTO smartphones (models_id, price, brands_id, rams_id, storages_id)
VALUES
 (1, 299, 1, 1, 3),
    (2, 199, 2, 1, 2),
    (2, 199, 3, 1, 2),
    (2, 199, 4, 1, 2),
    (2, 199, 5, 1, 2),
    (3, 249, 2, 1, 2),
    (4, 399, 1, 1, 4),
    (5, 499, 2, 2, 5),
    (6, 299, 3, 1, 3),
    (7, 599, 4, 4, 6),
    (8, 699, 5, 3, 6),
    (9, 299, 1, 2, 4),
    (10, 199, 2, 1, 2),
    (11, 599, 3, 4, 6),
    (12, 499, 4, 2, 5),
    (13, 399, 5, 2, 4),
    (14, 299, 1, 1, 4),
    (15, 499, 2, 2, 5),
    (16, 399, 3, 2, 4),
    (17, 699, 4, 3, 6),
    (18, 599, 5, 4, 6),
    (19, 499, 1, 3, 5),
    (20, 299, 2, 2, 4),
    (21, 599, 3, 4, 6),
    (22, 699, 4, 3, 6),
    (23, 399, 5, 2, 4),
    (24, 299, 1, 1, 4),
    (25, 499, 2, 2, 5),
    (26, 399, 3, 2, 4),
    (27, 699, 4, 3, 6),
    (28, 599, 5, 4, 6),
    (29, 499, 1, 3, 5),
    (30, 299, 2, 2, 4),
    (31, 599, 3, 4, 6),
    (32, 699, 4, 3, 6),
    (33, 399, 5, 2, 4),
    (34, 299, 1, 1, 4),
    (35, 499, 2, 2, 5),
    (36, 399, 3, 2, 4),
    (37, 699, 4, 3, 6),
    (38, 599, 5, 4, 6),
    (39, 499, 1, 3, 5),
    (40, 299, 2, 2, 4);


drop table  if exists 'test';
CREATE TABLE `test` (
                        `id` varchar(255) NOT NULL,
                        `name` varchar(255) DEFAULT NULL,
                        PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
insert  into test (id,name)values ('2','测试');
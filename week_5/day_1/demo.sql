CREATE TABLE melons (
	melon_id SERIAL PRIMARY KEY,
  melon_type VARCHAR(30) NOT NULL,
  name VARCHAR(30) NOT NULL,
  price FLOAT NOT NULL,
  seedless BOOLEAN NOT NULL
);

INSERT INTO melons (melon_type,name,price,seedless)
VALUES ('Musk','Honeydew',1,False);

SELECT * FROM melons;

INSERT INTO melons (melon_type,name,price,seedless)
VALUES ('Hybrid','Crenshaw',2,False),
('Hybrid','Crane',2.5,False);

INSERT INTO melons(melon_type, name, price, seedless)
VALUES('Musk', 'Casaba', 2.5, False),
        ('Musk', 'Cantaloupe', 0.99, False),
        ('Musk', 'Persian Melon', 3, False),
        ('Musk', 'Christmas Melon', 5.5, False),
        ('Musk', 'Armenian Cucumber', 4.5, False),
        ('Hybrid', 'Galia', 3.75, False),
        ('Winter', 'Winter Melon', 0.99, True),
        ('Musk', 'Canary', 1.5, False),
        ('Musk', 'Hami', 2.75, True),
        ('Watermelon', 'Densuke', 250, False),
        ('Watermelon', 'Ali Baba', 2.5, False),
        ('Watermelon', 'Ancient', 3, False),
        ('Watermelon', 'Arkansas Black', 4, False),
        ('Watermelon', 'Dixie Queen', 2, False),
        ('Watermelon', 'Blacktail Mountain', 2.75, True),
        ('Watermelon', 'Carolina Cross 180', 4.25, False),
        ('Watermelon', 'Charleston Gray', 2, False),
        ('Watermelon', 'Chris Cross', 2.5, False),
        ('Watermelon', 'Desert King', 2, False),
        ('Watermelon', 'Congo', 2, False),
        ('Watermelon', 'Crimson Sweet', 1.75, False);

SELECT * FROM melons;
SELECT * FROM melons
WHERE seedless = true;

SELECT seedless, COUNT(*)
FROM melons
GROUP BY seedless;
SELECT * FROM melons
WHERE price >= 5;
SELECT * FROM melons
WHERE melon_type = 'Watermelon' AND name LIKE 'A%';

SELECT name, price FROM melons
WHERE price IN (1,2,3);
UPDATE melons
SET seedless = true
WHERE melon_type = 'Watermelon' AND name LIKE 'C%';

SELECT * FROM melons

DELETE FROM melons
WHERE price > 3;
SELECT * FROM melons;
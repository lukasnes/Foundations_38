DROP TABLE IF EXISTS favorite_animals;
DROP TABLE IF EXISTS guests;
DROP TABLE IF EXISTS animals;
DROP TABLE IF EXISTS pen_feed;
DROP TABLE IF EXISTS pens;
DROP TABLE IF EXISTS feed;
DROP TABLE IF EXISTS species;

CREATE TABLE species (
    species_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE feed (
    feed_id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    type VARCHAR(20) NOT NULL
);

CREATE TABLE pens (
    pen_id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    environment VARCHAR(30),
    species_id INTEGER REFERENCES species(species_id)
);

CREATE TABLE pen_feed(
    pen_feed_id SERIAL PRIMARY KEY,
    pen_id INTEGER REFERENCES pens(pen_id),
    feed_id INTEGER REFERENCES feed(feed_id)
);

CREATE TABLE animals (
    animal_id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    species_id INTEGER REFERENCES species(species_id),
    pen_id INTEGER REFERENCES pens(pen_id)
);

CREATE TABLE guests (
    guest_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    primary_phone VARCHAR(20) NOT NULL
);

CREATE TABLE favorite_animals (
    favorite_animal_id SERIAL PRIMARY KEY,
    guest_id INTEGER REFERENCES guests(guest_id),
    animal_id INTEGER REFERENCES animals(animal_id)
);

INSERT INTO species(name, description)
VALUES ('Lion','An animal mostly found in the jungles and deserts of Africa. Gathering in prides, with intricate social structures, they are one of many great cats which roam the earth.'),
('Tiger','Many different tigers exist, all of which are generally found in the jungles, where they reign as apex predators.'),
('Bear','From the vast tundras of the arctic circle, to the lush forests of the European landscapes, to the tall sycamore trees of the Americas, bears rule the forests. Mostly passive, but easy to anger, they are dangerous predators.'),
('Monkey','An animal most commonly found in rainforests, they are believed to share a common ancestor with humans. Swinging through the tree tops, they are very territorial creatures.'),
('Penguin','Native only to the southernmost frigid lands of antarctica, these flightless birds subsist on a diet of fish, and move in massive bands. They huddle together tightly to keep each other warm in the frozen temperatures.');

INSERT INTO feed(name,type)
VALUES ('Raw Cow','Meat'),
('Raw Chicken','Meat'),
('Raw Fish','Seafood'),
('Honey','Sweet'),
('Banana','Fruit'),
('Apple','Fruit');

INSERT INTO pens(name,environment,species_id)
VALUES ('Tiger Pen','Forest Plains',2),
('Lion Pen','Savannah',1),
('Bear Pen','Rocky Caves',3),
('Monkey Pen','Tall Trees',4),
('Penguin Pen','Cold Water Pool',5);

INSERT INTO pen_feed(pen_id,feed_id)
VALUES (1,1),
(1,2),
(2,1),
(2,2),
(3,3),
(3,4),
(4,5),
(4,6),
(5,3);

INSERT INTO animals(name,species_id,pen_id)
VALUES ('Leo',1,2),
('Clara',1,2),
('Simba',1,2),
('Tigger',2,1),
('Stripes',2,1),
('Bosco',3,3),
('Pooh',3,3),
('Smokey',3,3),
('Bobo',4,4),
('Mickey',4,4),
('Star',4,4),
('Pokey',5,5),
('Slippers',5,5),
('Bubbles',5,5);

INSERT INTO guests(first_name,last_name,primary_phone)
VALUES ('Sam','Johnson','(345) 724-9943'),
('Smith','Smith','(446) 221-7054'),
('Jenny','Parker','(736) 281-3004'),
('Rawland','Pears','(336) 845-3921'),
('Portia','Brown','(401) 383-2001');

INSERT INTO favorite_animals(guest_id,animal_id)
VALUES (1,3),
(1,7),
(1,14),
(2,5),
(2,7),
(3,10),
(3,12),
(4,5),
(4,9),
(4,11),
(5,12),
(5,13),
(5,14);
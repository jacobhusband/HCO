CREATE TABLE products (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price INT NOT NULL
);

INSERT INTO "products" ("name", "description", "price")
VALUES ('grey sofa', 'old but good', 300),
       ('blue sofa', 'stinky smelly', 400)
RETURNING *;

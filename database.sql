CREATE TABLE products (
    productId INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    PRIMARY KEY(productId)
);

CREATE TABLE images (
    imageId INT GENERATED ALWAYS AS IDENTITY,
    productId INT,
    url VARCHAR(255) NOT NULL,
    PRIMARY KEY(imageId),
    CONSTRAINT fk_product
        FOREIGN KEY(productId)
            REFERENCES products(productId)
            ON DELETE CASCADE
);

INSERT INTO products(name, description, price)
VALUES ('Grey Sofa', 'Old and raggity sofa', 200);

INSERT INTO images(productId, url)
VALUES (1, 'https://secure.img1-fg.wfcdn.com/im/66690414/compr-r85/1287/128797044/erinn-6725-upholstered-loveseat.jpg');

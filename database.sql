CREATE TABLE products (
    productId INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    imageId INT,
    PRIMARY KEY(productId),
    CONSTRAINT fk_image
    FOREIGN KEY(imageId)
        REFERENCES products(productId)
            ON DELETE CASCADE
);

CREATE TABLE images (
    imageId INT GENERATED ALWAYS AS IDENTITY,
    productId INT,
    url VARCHAR(255) NOT NULL,
    PRIMARY KEY(imageId),
    CONSTRAINT fk_product
        FOREIGN KEY(productId)
            REFERENCES products(productId)
            ON DELETE SET NULL
);

INSERT INTO products(name, description, price)
VALUES ('Grey Sofa', 'Old and raggity sofa', 200),
       ('Blue Sofa', 'Nice and clean sofa', 300);

INSERT INTO images(productId, url)
VALUES (1, 'https://secure.img1-fg.wfcdn.com/im/66690414/compr-r85/1287/128797044/erinn-6725-upholstered-loveseat.jpg'), (2, 'https://thedump.com/images/thumbs/0036751_melbourne-blue-sofa-chaise.jpeg'),
       (2, 'http://mobileimages.lowes.com/productimages/6917aa19-313e-4b4a-bcb9-a3ba2b0abe98/14914318.jpg');

select "name" as "title",
       "description" as "info",
       "url",
        json_agg("url") as "imageUrls"
  from "products"
  join "images" using ("imageid");

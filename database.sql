drop table if exists images;
drop table if exists products;

create table products (
  product_no serial primary key,
  name text not null,
  description text not null,
  category text not null,
  price numeric not null,
  date timestamp not null default current_timestamp
);

create table images (
  image_no serial primary key,
  product_no integer not null references products on delete cascade,
  url text not null
);

insert into products(name, description, category, price)
values ('Grey Sofa', 'Old and raggity sofa', 'sofa', 200),
       ('Blue Sofa', 'Nice and clean sofa', 'sofa', 300);

insert into images(product_no, url)
values (1, 'https://secure.img1-fg.wfcdn.com/im/66690414/compr-r85/1287/128797044/erinn-6725-upholstered-loveseat.jpg'), (2, 'https://thedump.com/images/thumbs/0036751_melbourne-blue-sofa-chaise.jpeg'),
       (2, 'http://mobileimages.lowes.com/productimages/6917aa19-313e-4b4a-bcb9-a3ba2b0abe98/14914318.jpg');

select products.name, products.description, products.price, products.date as date, json_agg(images.url) as url, min(products.category) as category
from products
join images on products.product_no = images.product_no
group by products.name, products.date, products.description, products.price;

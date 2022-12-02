drop table if exists images;
drop table if exists products;
drop table if exists users;

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

create table users (
  user_no serial primary key,
  email text unique not null,
  hashedPassword text not null
);

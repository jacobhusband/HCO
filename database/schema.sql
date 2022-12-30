drop table if exists products cascade;
drop table if exists images cascade;
drop table if exists users cascade;

create table if not exists products (
  product_no serial primary key,
  name text not null,
  description text not null,
  link text,
  category text not null,
  price numeric not null,
  date timestamp not null default current_timestamp
);

create table if not exists images (
  image_no serial primary key,
  product_no integer not null references products on delete cascade,
  url text not null
);

create table if not exists users (
  user_no serial primary key,
  email text unique not null,
  hashedPassword text not null
);

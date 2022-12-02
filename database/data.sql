
insert into users(email)
values ('jakehusband2@gmail.com');

insert into products(name, description, category, price)
values ('Grey Sofa', 'Old and raggity sofa', 'sofa', 200),
       ('Blue Sofa', 'Nice and clean sofa', 'sofa', 300),
       ('Brown Table', 'Sturdy and strong', 'table', 250),
       ('King Mattress', 'Soft and bouncy', 'mattress', 400);

insert into images(product_no, url)
values (1, 'https://www.livingspaces.com/globalassets/productassets/200000-299999/250000-259999/253000-253999/253100-253199/253180/253180_grey_fabric_reversible_sofa_chaise_signature_01.jpg?w=820&h=553&mode=pad'),
       (1, 'https://www.livingspaces.com/globalassets/productassets/200000-299999/250000-259999/253000-253999/253100-253199/253180/253180_grey_fabric_reversible_sofa_chaise_side_02.jpg?w=820&h=553&mode=pad'),
       (1, 'https://www.livingspaces.com/globalassets/productassets/200000-299999/250000-259999/253000-253999/253100-253199/253180/253180_grey_fabric_reversible_sofa_chaise_side_18.jpg?w=820&h=553&mode=pad'),
       (2, 'https://www.livingspaces.com/globalassets/productassets/200000-299999/290000-299999/292000-292999/292000-292099/292075/292075_grey_fabric_sofa_signature_01.jpg?w=820&h=553&mode=pad'),
       (2, 'https://www.livingspaces.com/globalassets/productassets/200000-299999/290000-299999/292000-292999/292000-292099/292075/292075_grey_fabric_sofa_side_18.jpg?w=820&h=553&mode=pad'),
       (2, 'https://www.livingspaces.com/globalassets/productassets/200000-299999/290000-299999/292000-292999/292000-292099/292075/292075_grey_fabric_sofa_detail_44.jpg?w=820&h=553&mode=pad'),
       (3, 'https://www.livingspaces.com/globalassets/productassets/200000-299999/260000-269999/262000-262999/262500-262599/262539/262539_brown_mdf_dining_table_signature_04.jpg?w=820&h=553&mode=pad'),
       (3, 'https://www.livingspaces.com/globalassets/productassets/200000-299999/260000-269999/262000-262999/262500-262599/262539/262539_brown_mdf_dining_table_detail_47.jpg?w=820&h=553&mode=pad'),
       (3, 'https://www.livingspaces.com/globalassets/productassets/200000-299999/260000-269999/262000-262999/262500-262599/262539/262539_brown_mdf_dining_table_detail_49.jpg?w=820&h=553&mode=pad'),
       (4, 'https://www.livingspaces.com/globalassets/productassets/200000-299999/230000-239999/236000-236999/236300-236399/236309/236309_none_fabric_mattress_signature_01.jpg?w=820&h=553&mode=pad'),
       (4, 'https://www.livingspaces.com/globalassets/productassets/200000-299999/230000-239999/236000-236999/236300-236399/236309/236309_none_fabric_mattress_front_19.jpg?w=820&h=553&mode=pad'),
       (4, 'https://www.livingspaces.com/globalassets/productassets/200000-299999/230000-239999/236000-236999/236300-236399/236309/236309_multicolor_fabric_mattress_side_18.jpg?w=820&h=553&mode=pad');

select products.name, products.description, products.price, products.date as date, json_agg(images.url) as url, min(products.category) as category
from products
join images on products.product_no = images.product_no
group by products.name, products.date, products.description, products.price;

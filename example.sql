drop table if exists bananas
drop table if exists monkeys

create table monkeys (
  monkey_no serial primary key,
  name text not null,
  weight numeric not null check (weight > 0)
);

create table bananas (
  banana_no serial primary key,
  monkey_no integer not null references monkeys on delete cascade,
  weight numeric,
  taste text not null
);

insert into monkeys(name, weight)
values ('Harold', 120.6), ('Jacob', 42.3), ('Ham', 50.6);

insert into bananas(monkey_no, weight, taste)
values (1, 2, 'good'), (1, 3, 'really good'), (3, 1, 'meh'), (3, 3, 'pretty good');

select monkeys.name, monkeys.weight, bananas.weight as bananWeight, bananas.taste as bananTaste
from monkeys join bananas on monkeys.monkey_no = bananas.monkey_no;

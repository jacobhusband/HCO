drop table if exists bananas;
drop table if exists monkeys;

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
values (4, 2, 'good'), (4, 3, 'really good'), (3, 1, 'meh'), (3, 3, 'pretty good');

insert into bananas(monkey_no, weight, taste)
values (1, 7, 'glorious'), (1, 5, 'super good'), (3, 2, 'ight'), (3, 4, 'delicious');

select monkeys.name, min(monkeys.weight) as monkeyWeight, json_agg(bananas.taste) as yummyLevel, json_agg(bananas.weight) as bananaWeight
from monkeys join bananas on monkeys.monkey_no = bananas.monkey_no
group by monkeys.name;

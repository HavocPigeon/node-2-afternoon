create table if not exists products (
    id serial primary key not null,
    name varchar(40) not null,
    description varchar(80) not null,
    price int not null
    image_url text not null,
);

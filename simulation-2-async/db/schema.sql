create table properties (
property_id serial primary key,
property_name varchar(50),
property_description varchar(150),
address varchar(50),
city varchar(50),
us_state varchar(50),
zip int,
image_url text,
loan_amount int,
monthly_mortgage int,
desired_rent int,
users_id int references users(id)
);

create table users (
id serial primary key,
username varchar(50),
password varchar(50)    
);
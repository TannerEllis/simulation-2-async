create table properties (
property_id int not null primary key,
property_name varchar(50),
property_description varchar(150),
address varchar(50),
city varchar(50),
state varchar(50),
zip int,
image_url varchar(50),
loan_amount money,
monthly_mortgage money,
desired_rent money,
seller_id int, 
foreign key(seller_id) references users(user_id)
);

create table users (
user_id serial primary key,
username varchar(50),
password varchar(50)
);
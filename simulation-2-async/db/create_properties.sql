insert into properties (property_name, property_description, address, city, us_state, zip, image_url, loan_amount, monthly_mortgage, desired_rent, users_id )
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)

returning *;
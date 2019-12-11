SELECT u1.last_name AS NAME, u1.first_name, s1.price
FROM `member` AS m1
INNER JOIN subscription AS s1
    ON s1.id_sub = m1.id_sub
INNER JOIN
    user_card AS u1
    ON m1.id_user_card = u1.id_user
WHERE s1.price > 42 ORDER BY u1.last_name, u1.first_name ASC;
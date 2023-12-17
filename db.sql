-- CREATE TABLE
--     books (
--         id SERIAL PRIMARY KEY NOT NULL,
--         isbn VARCHAR(50) NOT NULL,
--         title VARCHAR(50) NOT NULL,
--         author VARCHAR(50) NOT NULL,
--         description VARCHAR(50),
--         genre VARCHAR(50),
--         page_count INT,
--         publication_date VARCHAR(50),
--         createdAt DATE,
--         updatedAt DATE
--     );

-- -- INSERT INTO books (id, title, genre, page_count)  values (123, 'test-data1', 'Non-Fiction', 200);
-- -- INSERT INTO books (id, title, author, info, genre, page_count, publication_date) values (122, 'test-data2', 'Jon Smith', 'a test book','Non-Fiction', 200, 'December 3rd 2023');

CREATE TABLE threads (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    isbn_num VARCHAR(200) NOT NULL REFERENCES books(isbn),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT check(rating >= 1 and rating <= 5)
);
# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
avatar          | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
artist      | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
writers     | string    |
producers   | string    |
editors     | string    |
link        | string    | 

## annotations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
body        | string    | not null
char_start  | integer   | not null
char_end    | integer   | not null

## comments
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
body          | text      | not null
user_id       | integer   | not null
annotation_id | integer   | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key (references tracks), indexed
genre_id    | integer   | not null, foreign key (references genres), indexed

## genres
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
genre       | string    | not null, unique

## votes
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users)
voteable_id   | integer   | not null, foreign key (references either comments or posts)
votable_type  | integer   | not null, either comment or post
value         | boolean   | not null

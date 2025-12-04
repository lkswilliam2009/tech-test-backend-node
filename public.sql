/*
 Navicat Premium Data Transfer

 Source Server         : POSTGRES LOCAL
 Source Server Type    : PostgreSQL
 Source Server Version : 140005
 Source Host           : localhost:5432
 Source Catalog        : tech_test_backend_node_db
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140005
 File Encoding         : 65001

 Date: 04/12/2025 19:46:30
*/


-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS "public"."books";
CREATE TABLE "public"."books" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "author" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "published_year" int4 NOT NULL,
  "stock" int4 NOT NULL DEFAULT 0,
  "isbn" varchar(13) COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp(6) DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO "public"."books" VALUES ('640de514-d86e-4ed7-9549-7907279d1ed8', 'Brave New World', 'Aldous Huxley', 1932, 4, '9780060850524', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('c6209f32-4763-41ed-975d-d9336e01f0ba', 'The Lord of the Rings', 'J.R.R. Tolkien', 1954, 6, '9780618640157', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('94a0133c-c63e-4262-8d55-86dc7bfac085', 'Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 1997, 7, '9780590353427', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('28df9216-a55a-452e-a4c2-ccc6eab26840', 'The Chronicles of Narnia', 'C.S. Lewis', 1950, 5, '9780066238501', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('8f7c7c15-11de-4669-9076-f1daa50590ef', 'One Hundred Years of Solitude', 'Gabriel García Márquez', 1967, 3, '9780060883287', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('e8a6788d-44f1-4d51-ac15-a248ef357659', 'The Hunger Games', 'Suzanne Collins', 2008, 6, '9780439023481', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('74eab296-4b26-4e88-bc79-31d9358b0ac8', 'The Road', 'Cormac McCarthy', 2006, 4, '9780307387899', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('9a5ddeec-3c2c-4228-a753-4cbd480d08c1', 'The Kite Runner', 'Khaled Hosseini', 2003, 5, '9781594631931', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('c83ac488-1860-4308-9a87-401ea95f040b', 'The Girl with the Dragon Tattoo', 'Stieg Larsson', 2005, 4, '9780307949486', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('6c7b1e53-ad70-4d0b-a3c2-1eaa7d828d0b', 'The Book Thief', 'Markus Zusak', 2005, 6, '9780375842207', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('0d325805-ef57-410e-b01c-14974a297c79', 'Life of Pi', 'Yann Martel', 2001, 5, '9780156027328', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('c3a79803-5713-431b-adbc-806f0e063200', 'The Great Gatsby', 'F. Scott Fitzgerald', 1925, 2, '9780743273565', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('da15405e-86e6-46b0-b7fc-31937292d47a', 'To Kill a Mockingbird', 'Harper Lee', 1960, 2, '9780446310789', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('7df6e2eb-3eb2-4e85-8692-5e1bc84b7e98', 'Pride and Prejudice', 'Jane Austen', 1813, 4, '9780141439518', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('30a9dc0e-4f5c-4747-be5a-36a75b9babd1', '1984', 'George Orwell', 1949, 4, '9780451524935', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('21101238-8bdf-47df-834a-948c48f0445c', 'The Catcher in the Rye', 'J.D. Salinger', 1951, 2, '9780316769488', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('fbb8e218-2ca0-4709-b0cb-233dcbe0562e', 'The Hobbit', 'J.R.R. Tolkien', 1937, 6, '9780547928227', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('89f67f45-0af9-4f42-8e69-64b0a83b2646', 'The Da Vinci Code', 'Dan Brown', 2003, 3, '9780307474278', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('aa0232e8-d62f-46a6-bc59-d05f3071f667', 'The Little Prince', 'Antoine de Saint-Exupéry', 1943, 6, '9780156012195', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');
INSERT INTO "public"."books" VALUES ('12c3c38f-d767-405a-84f9-ffc4467ed0bf', 'The Alchemist', 'Paulo Coelho', 1988, 20, '9780062315007', '2025-12-03 18:25:26.70438', '2025-12-03 18:25:26.70438');

-- ----------------------------
-- Table structure for borrowings
-- ----------------------------
DROP TABLE IF EXISTS "public"."borrowings";
CREATE TABLE "public"."borrowings" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "book_id" uuid,
  "member_id" uuid,
  "borrow_date" date NOT NULL,
  "return_date" date,
  "status" varchar(10) COLLATE "pg_catalog"."default" NOT NULL DEFAULT 'BORROWED'::character varying,
  "created_at" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp(6) DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of borrowings
-- ----------------------------
INSERT INTO "public"."borrowings" VALUES ('ffc52d23-bca5-4fbb-ab8c-6eb9b4d7ca23', 'fbb8e218-2ca0-4709-b0cb-233dcbe0562e', '8d082993-0aeb-4360-ba58-85986abbfaac', '2025-12-04', NULL, 'BORROWED', '2025-12-04 15:30:14.911565', '2025-12-04 15:30:14.911565');
INSERT INTO "public"."borrowings" VALUES ('8698f8f9-5e16-4c71-b9fd-208886ecfefa', '89f67f45-0af9-4f42-8e69-64b0a83b2646', '8d082993-0aeb-4360-ba58-85986abbfaac', '2025-12-04', NULL, 'BORROWED', '2025-12-04 15:30:51.091871', '2025-12-04 15:30:51.091871');
INSERT INTO "public"."borrowings" VALUES ('7b6ed148-263d-4a51-885c-5b3b0ff35085', 'aa0232e8-d62f-46a6-bc59-d05f3071f667', '53857dfa-5a17-4420-970b-f082b69f8f74', '2025-12-04', NULL, 'BORROWED', '2025-12-04 16:40:29.267382', '2025-12-04 16:40:29.267382');
INSERT INTO "public"."borrowings" VALUES ('923aaebc-d76c-4d38-b7f4-ac6d1e98421e', 'aa0232e8-d62f-46a6-bc59-d05f3071f667', '53857dfa-5a17-4420-970b-f082b69f8f74', '2025-12-04', NULL, 'BORROWED', '2025-12-04 16:46:22.771286', '2025-12-04 16:46:22.771286');
INSERT INTO "public"."borrowings" VALUES ('1e4f6963-190d-467f-87ba-24b46d956180', '12c3c38f-d767-405a-84f9-ffc4467ed0bf', '8d082993-0aeb-4360-ba58-85986abbfaac', '2025-12-04', '2025-12-04', 'RETURNED', '2025-12-04 15:31:12.141791', '2025-12-04 15:31:12.141791');

-- ----------------------------
-- Table structure for members
-- ----------------------------
DROP TABLE IF EXISTS "public"."members";
CREATE TABLE "public"."members" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "phone" varchar(15) COLLATE "pg_catalog"."default" NOT NULL,
  "address" text COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp(6) DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of members
-- ----------------------------
INSERT INTO "public"."members" VALUES ('966223f6-dab6-4326-a80a-4608a2b20159', 'John Doe', 'john.doe@email.com', '081234567890', '123 Main St, City', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('2a67a1cb-1723-468e-84d3-de2b10604c2a', 'Jane Smith', 'jane.smith@email.com', '081234567891', '456 Oak Ave, Town', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('5bd5c0ff-4f62-4dd1-8881-705da48fccb5', 'Robert Johnson', 'robert.j@email.com', '081234567892', '789 Pine Rd, Village', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('aee03ff6-9c5a-41f2-a8cc-c65821f6ccab', 'Mary Williams', 'mary.w@email.com', '081234567893', '321 Elm St, Borough', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('d0142f45-c449-43d7-8d79-d76a069bc7bb', 'Michael Brown', 'michael.b@email.com', '081234567894', '654 Maple Dr, District', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('c2222ef0-be7e-45db-91a0-32148c44f456', 'Sarah Davis', 'sarah.d@email.com', '081234567895', '987 Cedar Ln, County', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('ead3fbb1-2f0d-4c81-b5e8-0956a82b1b9f', 'James Wilson', 'james.w@email.com', '081234567896', '147 Birch Ave, State', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('d0130739-a77f-4343-9b23-4a514d907aae', 'Emily Taylor', 'emily.t@email.com', '081234567897', '258 Spruce St, Province', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('e409a348-a818-45e2-9293-1e95d37f2b7d', 'David Anderson', 'david.a@email.com', '081234567898', '369 Ash Rd, Territory', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('beb66d28-4527-4b31-be14-6512c4062c4b', 'Lisa Thomas', 'lisa.t@email.com', '081234567899', '741 Walnut Ct, Region', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('c82884a6-a1a0-4340-bf70-bd5c13d2bbfb', 'Kevin Martin', 'kevin.m@email.com', '081234567800', '852 Cherry Ln, Area', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('887f138b-489d-4365-a4d9-91205f22fbd2', 'Jennifer White', 'jennifer.w@email.com', '081234567801', '963 Palm Ave, Zone', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('d1187ca4-09c7-40a5-806b-0642beb5a4ac', 'Christopher Lee', 'chris.l@email.com', '081234567802', '159 Beach Rd, Sector', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('92e6b2dd-2838-4168-bf38-6d6207ce2a88', 'Amanda Clark', 'amanda.c@email.com', '081234567803', '357 Coast St, District', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('951fbfae-cc68-47f6-990d-522b847baa77', 'Daniel Martinez', 'daniel.m@email.com', '081234567804', '468 River Dr, County', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('49aa8a7f-b7c3-44ba-8e7a-e72f9a8cf914', 'Michelle Garcia', 'michelle.g@email.com', '081234567805', '789 Lake Ave, State', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('71b4c2a8-7ddc-4bfa-8feb-782d55e127dd', 'Andrew Robinson', 'andrew.r@email.com', '081234567806', '951 Ocean Blvd, Province', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('bac15965-84f2-4071-b1a7-3b842a171d60', 'Patricia Rodriguez', 'patricia.r@email.com', '081234567807', '753 Bay St, Territory', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('7fd53343-1667-4713-9ce0-69e10d1a2dab', 'Joseph Hall', 'joseph.h@email.com', '081234567808', '246 Harbor Rd, Region', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('cdbae311-83c4-4938-99e2-547f3252f481', 'Nicole King', 'nicole.k@email.com', '081234567809', '135 Port Ave, Area', '2025-12-03 18:25:41.161465', '2025-12-03 18:25:41.161465');
INSERT INTO "public"."members" VALUES ('8d082993-0aeb-4360-ba58-85986abbfaac', 'test', 'test@123.com', '+6281394439980', 'asdadas', '2025-12-04 14:18:36.270769', '2025-12-04 14:18:36.270769');
INSERT INTO "public"."members" VALUES ('53857dfa-5a17-4420-970b-f082b69f8f74', 'test', 'test@1234.com', '+6281394439980', 'asdadas', '2025-12-04 14:22:21.827661', '2025-12-04 14:22:21.827661');

-- ----------------------------
-- View structure for tview_history_borrowings
-- ----------------------------
DROP VIEW IF EXISTS "public"."tview_history_borrowings";
CREATE VIEW "public"."tview_history_borrowings" AS  SELECT a.id,
    a.book_id,
    b.title,
    b.author,
    b.published_year,
    b.stock,
    b.isbn,
    a.member_id,
    c.name,
    c.email,
    c.phone,
    c.address,
    a.borrow_date,
    a.return_date,
    a.status,
    a.created_at,
    a.updated_at
   FROM borrowings a
     LEFT JOIN books b ON a.book_id = b.id
     LEFT JOIN members c ON a.member_id = c.id;

-- ----------------------------
-- Uniques structure for table books
-- ----------------------------
ALTER TABLE "public"."books" ADD CONSTRAINT "books_isbn_key" UNIQUE ("isbn");

-- ----------------------------
-- Primary Key structure for table books
-- ----------------------------
ALTER TABLE "public"."books" ADD CONSTRAINT "books_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table borrowings
-- ----------------------------
ALTER TABLE "public"."borrowings" ADD CONSTRAINT "borrowings_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table members
-- ----------------------------
ALTER TABLE "public"."members" ADD CONSTRAINT "members_email_key" UNIQUE ("email");

-- ----------------------------
-- Primary Key structure for table members
-- ----------------------------
ALTER TABLE "public"."members" ADD CONSTRAINT "members_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table borrowings
-- ----------------------------
ALTER TABLE "public"."borrowings" ADD CONSTRAINT "borrowings_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "public"."books" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."borrowings" ADD CONSTRAINT "borrowings_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "public"."members" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

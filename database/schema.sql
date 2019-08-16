DROP TABLE IF EXISTS expenses;

CREATE TABLE expenses
(
  id serial,
  description varchar(50) NOT NULL,
  category varchar(50) NOT NULL,
  company varchar(50),
  amount numeric(1000, 2) NOT NULL,
  date date default CURRENT_DATE,
  CONSTRAINT "Expenses_pkey" PRIMARY KEY (id)
)
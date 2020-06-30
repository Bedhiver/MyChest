------------------------------------------------------------
--        Script Postgre 
------------------------------------------------------------



------------------------------------------------------------
-- Table: user
------------------------------------------------------------
CREATE TABLE public.user(
	id_user         SERIAL NOT NULL ,
	email_user      VARCHAR (50) NOT NULL ,
	password_user   VARCHAR (50) NOT NULL ,
	question_user   VARCHAR (150) NOT NULL ,
	answer_user     VARCHAR (50) NOT NULL  ,
	CONSTRAINT user_PK PRIMARY KEY (id_user)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: type
------------------------------------------------------------
CREATE TABLE public.type(
	id_type     SERIAL NOT NULL ,
	name_type   VARCHAR (50) NOT NULL  ,
	CONSTRAINT type_PK PRIMARY KEY (id_type)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: account
------------------------------------------------------------
CREATE TABLE public.account(
	id_account         SERIAL NOT NULL ,
	name_account       VARCHAR (50) NOT NULL ,
	password_account   VARCHAR (50) NOT NULL ,
	comment_account    VARCHAR (200) NOT NULL ,
	id_user            INT  NOT NULL ,
	id_type            INT  NOT NULL  ,
	CONSTRAINT account_PK PRIMARY KEY (id_account)

	,CONSTRAINT account_user_FK FOREIGN KEY (id_user) REFERENCES public.user(id_user)
	,CONSTRAINT account_type0_FK FOREIGN KEY (id_type) REFERENCES public.type(id_type)
)WITHOUT OIDS;




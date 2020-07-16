import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "../accounts/Account";

@Index("user_pk", ["idUser"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_user" })
  idUser: number;

  @Column("character varying", { unique: true, name: "email_user", length: 50 })
  emailUser: string;

  @Column("character varying", { name: "password_user", length: 50 })
  passwordUser: string;

  @Column("character varying", { name: "question_user", length: 150 })
  questionUser: string;

  @Column("character varying", { name: "answer_user", length: 50 })
  answerUser: string;

  @OneToMany(() => Account, (account) => account.idUser)
  accounts: Account[];
}

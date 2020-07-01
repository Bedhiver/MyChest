import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Type } from "./Type";
import { User } from "../src/users/User";

@Index("account_pk", ["idAccount"], { unique: true })
@Entity("account", { schema: "public" })
export class Account {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_account" })
  idAccount: number;

  @Column("character varying", { name: "name_account", length: 50 })
  nameAccount: string;

  @Column("character varying", { name: "password_account", length: 50 })
  passwordAccount: string;

  @Column("character varying", { name: "comment_account", length: 200 })
  commentAccount: string;

  @ManyToOne(() => Type, (type) => type.accounts)
  @JoinColumn([{ name: "id_type", referencedColumnName: "idType" }])
  idType: Type;

  @ManyToOne(() => User, (user) => user.accounts)
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  idUser: User;
}

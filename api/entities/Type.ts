import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./Account";

@Index("type_pk", ["idType"], { unique: true })
@Entity("type", { schema: "public" })
export class Type {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_type" })
  idType: number;

  @Column("character varying", { name: "name_type", length: 50 })
  nameType: string;

  @OneToMany(() => Account, (account) => account.idType)
  accounts: Account[];
}

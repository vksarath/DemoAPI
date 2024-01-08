const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");


@Entity()
class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;


    constructor(username: string, password: string /* Add other parameters */) {
        this.username = username;
        this.password = password;
    }
}

export default User;
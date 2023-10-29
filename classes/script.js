class Devive {
    type;
    color;
    brand;
    connection;
    isConnected = true;

    constructor(type, color, brand, connection) {
        this.type = type;
        this.color = color;
        this.brand = brand;
        this.connection = connection;
    }
    connect() {
        this.isConnected = true;
        console.log(`Device connected using ${this.connection} connection.`);
    }

    describeMe() {}
}

class Headphones extends Device {
    volume = 0;

    constructor(type, color, brand, connection, defaultVolume) {
        super(type, color, brand, connection);

        this.volume = defaultVolume;
    }

    playMusic() {
        if (this.isConnected) {
            console.log(`Playing music at volume ${this.volume}`);
        }
    }
}

class Bank {
    name;
    swiftCode;
    country;
    accounts = [];

    constructor(name, swiftCode, country) {
        this.name = name;
        this.swiftCode = swiftCode;
        this.country = country;
    }

    createAccount(personName, balance) {
        const account = new Account(personName, balance);
        this.accounts.push(account);
    }

    listAccounts() {
        this.accounts.forEach((account) => {
            console.log(
                `Contul lui ${account.personName} cu sold: ${account.balance}`
            );
        });
    }

    listNegativeAccounts() {
        if (this.balance < 0) {
            console.log(`Negative balance for `);
        }
    }

    withdrawMoney() {
        const amount = this.balance - 200;
        console.log(amount);
    }
}

class Account {
    personName;
    balance;

    constructor(personName, balance) {
        this.personName = personName;
        this.balance = balance;
    }

    retriveMoney(amount) {
        this.balance -= amount;
    }
}

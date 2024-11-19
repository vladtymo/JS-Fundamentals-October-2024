// ------------ Complex Types
function getGeolocation(): [number, number] {
    // ... getting geolocation
    return [10, 44];
}

const [lat, lon] = getGeolocation();

console.log(lat + ":" + lon);

// --------- enums

const EasyLevel = 1;
const MidLevel = 2;
const HardLevel = 3;

enum Level {
    Easy = 1, Mid, Hard
}

Level.Easy; // 1
Level[Level.Easy]; // Easy

console.log(`${Level[Level.Easy]} - ${Level.Easy}`);
console.log(`${Level[Level.Mid]} - ${Level.Mid}`);
console.log(`${Level[Level.Hard]} - ${Level.Hard}`);

let input: Level = Number(prompt("Enter level:"));

switch (input) {
    case Level.Easy:
        console.log("Easy level");
        break;
    case Level.Mid:
        console.log("Mid level");
        break;
    case Level.Hard:
        console.log("Hard level");
        break;
}

let id: string | number = 45550;

function exportData(user: User | Admin) {
    if (user instanceof Admin) {
        // specific logic for Admin
    }
    // general logic
}

// ------------ Interfaces

interface IExportable {
    export(): void; // required
    size?: number;  // optional
}

class User implements IExportable {
    public id: number;
    public login: string;

    constructor(id: number, login: string) {
        this.id = id;
        this.login = login;
    }

    export(): void {
        console.log("Exporting user data...")
    }

}

class Admin implements IExportable {
    // public id: number;
    // public login: string;
    // public role: string;

    // constructor(id: number, login: string, role: string) {
    //     this.id = id;
    //     this.login = login;
    //     this.role = role;
    // }
    // ---- or using inline initialization
    constructor(public id: number, public login: string, private role: string) { }

    export(): void {
        console.log("Exporting admin data...")
    }
}

// ------------ override
class Manager extends Admin {

    override export() {
        console.log("Exporting manager data...")
    }

    manage() {
        console.log("managing...")
    }
}

function saveAdJson(data: IExportable): void {
    data.export();
}

let admin = new Admin(1000, "Yura", "SuperAdmin");
let user = new User(1223, "Vlad");

// & - intersection type
let book: IPrintable & IExportable = {
    print() {
        console.log("Book...");
    },
    export() {
        console.log("Exporting...");
    }
}

interface IPrintable {
    print(): void;
}

saveAdJson(admin);
saveAdJson(user);
saveAdJson(book);

// ------------- Type alias
type ArifFunc = (a: number, b: number) => number;

function showResult(n1: number, n2: number, action: ArifFunc): void {
    const res = action(n1, n2);
    console.log("Result:", res);
}

function sum(a: number, b: number): number {
    return a + b;
}

showResult(10, 33, (a, b) => a * b);

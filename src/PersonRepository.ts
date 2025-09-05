import * as fs from 'fs';
import * as path from 'path';
import Person from './person';

class PersonRepository {
    private people: Person[] = [];

    loadPeople(): void {
        const inputPath = path.join(__dirname, '../data/people.json');
        try {
            const raw = fs.readFileSync(inputPath, 'utf-8');
            const arr = JSON.parse(raw);
            if (!Array.isArray(arr)) throw new Error('Invalid data format: not an array');
            this.people = arr.map((data: any) => Person.fromJSON(data));
        } catch (err: any) {
            console.error(`Error loading people: ${err.message}`);
            this.people = [];
        }
    }

    savePeople(): void {
        const outputPath = path.join(__dirname, '../data/people.output.json');
        try {
            const arr = this.people.map(p => p.toJSON());
            fs.writeFileSync(outputPath, JSON.stringify(arr, null, 2), 'utf-8');
        } catch (err: any) {
            console.error(`Error saving people: ${err.message}`);
        }
    }

    getAll(): Person[] {
        return this.people;
    }
}

export default PersonRepository;
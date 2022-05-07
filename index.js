import fs from 'fs';

class ENV{
    #backup;
    #envPath;

    constructor(envPath){
        this.#backup = process;
        this.#envPath = envPath;

        fs.readFileSync(this.#envPath, 'utf8').split('\n').forEach(line => {
            const [key, value] = line.split('=');
            process.env[key] = value;
        });
    }

    addENV(name, value){
        process.env[name] = value;

        fs.appendFileSync(this.#envPath, `${name}=${value}\n`);
    }
    removeENV(name){
        delete process.env[name];

        const data = fs.readFileSync(this.#envPath, 'utf8').split('\n').filter(line => line.split('=')[0] !== name);
        fs.writeFileSync(this.#envPath, data.join('\n'));
    }

}

export default ENV;
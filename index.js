import fs from 'fs';

class ENV{
    #envPath;

    constructor(envPath){
        this.#backup = process;
        this.#envPath = envPath;

        fs.readFileSync(this.#envPath, 'utf8').split('\n').forEach(line => {
            const [key, value] = line.split('=');
            process.env[key] = value;
        });
    }
}

export default ENV;
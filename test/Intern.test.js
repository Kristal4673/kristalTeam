/* My task is to build a Node.js command-line application CLI */
const Intern = require('../lib/Intern')
let newIntern = new Intern("chris", 3, "chris@chris.com", "mit");
describe('Intern Methoad', ()=> {
    test('Get Name Methods', () => {
        expect(newIntern.getName()).toEqual('chris')
    });
    test('Get ID', () => {
        expect(newIntern.getID()).toEqual(3);
    });
    test('Get Email', () => {
        expect(newIntern.getEmail()).toEqual('chris@chris.com')
    });
    test('Get School', () => {
        expect(newIntern.getSchool()).toEqual('mit')
    });
    test('Get Name Methods', () => {
        expect(newIntern.getRole()).toEqual('Intern')
    });
})

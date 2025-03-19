import { merge } from '(path../merge)';

describe('merge function', () => {
    test('merges three empty arrays', () => {
        expect(merge([], [], [])).toEqual([]); // เช็คว่ากรณีเป็น array ว่าง สามตัวจะเป็น array ว่าง
    });

    test('merges when some arrays are empty', () => {
        expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]); // เช็คว่ากรณีที่ array 2,3 ว่าง จะมี array 1 เท่านั้น
        expect(merge([], [4, 5, 6], [])).toEqual([4, 5, 6]); // เช็คว่ากรณีที่ array 1,3 ว่าง จะมี array 2 เท่านั้น
        expect(merge([], [], [9, 8, 7])).toEqual([7, 8, 9]);// เช็คว่ากรณีที่ array 1,2 ว่าง จะมี array 3 เท่านั้น
    });

    test('merges three sorted arrays correctly', () => {
        const collection1 = [1, 3, 5, 7];
        const collection2 = [2, 4, 6, 8];
        const collection3 = [9, 7, 5, 3];
        
        const expected = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9];
        expect(merge(collection1, collection2, collection3)).toEqual(expected); // เช็คว่ากรณีที่ array 1,2,3 มีค่า จะถูกเรียงจากน้อยไปมาก
    });

    test('handles arrays of different lengths', () => {
        const collection1 = [1, 5, 10];
        const collection2 = [2, 4, 6, 8, 12];
        const collection3 = [15, 9, 7];
        
        const expected = [1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 15];
        expect(merge(collection1, collection2, collection3)).toEqual(expected); // เช็คว่ากรณีที่ array 1,2,3 มีความยาวไม่เท่ากัน จะถูกเรียงจากน้อยไปมาก
    });

    test('handles arrays with duplicate values', () => {
        const collection1 = [1, 3, 3, 5];
        const collection2 = [2, 3, 4];
        const collection3 = [5, 4, 3, 2];
        
        const expected = [1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5];
        expect(merge(collection1, collection2, collection3)).toEqual(expected); // เช็คว่ากรณีที่ array 1,2,3 มีค่าซ้ำ จะถูกเรียงจากน้อยไปมาก
    });

    test('handles arrays with negative numbers', () => {
        const collection1 = [-5, -3, 0, 2];
        const collection2 = [-4, -2, 1, 3];
        const collection3 = [4, 1, -1, -6];
        
        const expected = [-6, -5, -4, -3, -2, -1, 0, 1, 1, 2, 3, 4];
        expect(merge(collection1, collection2, collection3)).toEqual(expected); // เช็คว่ากรณีที่ array 1,2,3 มีค่าติดลบ จะถูกเรียงจากน้อยไปมาก
    });
});

const fizzBuzzer = require('../fizzBuzzer');

require('chai').should();


describe('fizzBuzzer', function() {
	it('should return \'fizz-buzz\' for inputs divisible by 15', function() {
		const divideByFifteen = [30, 45, 60];
		divideByFifteen.forEach(function(input) {
			const answer = fizzBuzzer(input);
			answer.should.equal('fizz-buzz');
		});
	});

	it('should return \'buzz\' for inputs divisible by 5', function() {
		const divideByFifteen = [10, 20, 30];
		divideByFifteen.forEach(function(input) {
			const answer = fizzBuzzer(input);
			answer.should.equal('buzz');
		});
	});

	it('should return \'fizz\' for inputs divisible by 15', function() {
		const divideByFifteen = [6, 9, 12];
		divideByFifteen.forEach(function(input) {
			const answer = fizzBuzzer(input);
			answer.should.equal('fizz');
		});
	});

	it('should return the input for inputs not divisible by 3 or 5', function() {
		const notDivisible = [8, 14, 16];
		notDivisible.forEach(function(input) {
			const answer = fizzBuzzer(input);
			answer.should.equal(input);
		});
	});

	it('should throw error if input is not an integer', function() {
		const notInteger = ['one', 'two', 'three'];
		notInteger.forEach(function(input) {
			const answer = fizzBuzzer(input);
			answer.should.throw(Error);
		});
	});
});


// describe('fizzBuzzer', function() {
// 	it('should return the right term given an input\'s divisibility', function() {

// 		const divideByFifteen = [30, 45, 60];
// 		divideByFifteen.forEach(function(input) {
// 			const answer = fizzBuzzer(input[0]);
// 			answer.should.be.true;
// 		});

// 		const divideByFive = [10, 20, 30];
// 		divideByFive.forEach(function(input) {
// 			const answer = fizzBuzzer(input[0]);
// 			answer.should.be.true;
// 		});

// 		const divideByThree = [6, 9 12];
// 		divideByThree.forEach(function(input) {
// 			const answer = fizzBuzzer(input[0]);
// 			answer.should.be.true;
// 		});

// 		const notInteger = ['one', 'two', 'three'];
// 		notInteger.forEach(function(input) {
// 			const answer = fizzBuzzer(input[0]);
// 			answer.should.be.false;
// 		})
// 	});
// });
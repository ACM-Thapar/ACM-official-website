const user = {
  badge: 'abcd',
  certificate: 'xyzw',
};

function test(element) {
  console.log(user[element]);
}
test('certificate');

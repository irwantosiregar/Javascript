var s = '';

for (var i = 0; i < 10; i++) {
	if (i % 2 == 0) {
		for (var k = 0; k < 10; k++) {
				if ( k % 2 == 0) {
					s += '#';				
				} else{
					s += ' ';			
				}
		}
	} 
	else{
		for (var j = 0; j < 10; j++) {
			if ( j % 2 == 0) {
				s += ' ';				
			} 
			else{
				s += '#';			
			}
		}
	}
	s += '\n';
}
console.log(s);


















for (var i = 1; i <= 10; i++) {
	for (var k = 1; k <= 10; k++) {
			if ( i % 2 == 0) {
				s += '+';				
			} else{
				s += '#';			
			}
	}
		s += '\n';
}
function soma(a: number, b: number): number {
	return a + b;
}

test('Example Teste', () => {
	const result = soma(4, 5);
	expect(result).toBe(9);
});

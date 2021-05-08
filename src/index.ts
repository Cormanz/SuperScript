const run = (text: string) => {
    const lexer = new Lexer(text);
    const tokens = lexer.lex();
}
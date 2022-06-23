// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
    function id(x) { return x[0]; }
    var grammar = {
        Lexer: undefined,
        ParserRules: [
        {"name": "PROGRAM", "symbols": ["MODULE"], "postprocess": function(d) {return {Type: "program", Module: d[0]};}},
        {"name": "MODULE$string$1", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"d"}, {"literal":"u"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "MODULE$ebnf$1", "symbols": ["LIST_OF_PORTS"], "postprocess": id},
        {"name": "MODULE$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "MODULE", "symbols": ["MODULE$string$1", "__", "NAME_OF_MODULE", "_", {"literal":"("}, "_", "MODULE$ebnf$1", "_", {"literal":")"}, "_", {"literal":";"}, "_", "MODULE_ITEMS", "_", "endmodule", "_"], "postprocess": function(d) {return {Type: "module", ModuleName: d[2], PortList: d[6], ModuleItems: d[12]};}},
        {"name": "NAME_OF_MODULE", "symbols": ["IDENTIFIER"], "postprocess": id},
        {"name": "LIST_OF_PORTS", "symbols": ["PORT", "_", {"literal":","}, "_", "LIST_OF_PORTS"], "postprocess": function(d, l, reject) {return {Type: "port_list", Head: d[0], Tail: d[4], Location: l};}},
        {"name": "LIST_OF_PORTS", "symbols": ["PORT"], "postprocess": function(d,l,reject) {return {Type: "port_list", Head: d[0], Tail: null, Location: l};}},
        {"name": "PORT", "symbols": ["IDENTIFIER"], "postprocess": function(d) {return {Type: "port", PortName: d[0]};}},
        {"name": "MODULE_ITEMS$ebnf$1", "symbols": []},
        {"name": "MODULE_ITEMS$ebnf$1", "symbols": ["MODULE_ITEMS$ebnf$1", "MODULE_ITEM"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
        {"name": "MODULE_ITEMS", "symbols": ["MODULE_ITEMS$ebnf$1"], "postprocess": function(d) {return {Type: "module_items", ItemList: d[0]};}},
        {"name": "MODULE_ITEM", "symbols": ["INPUT_DECL", "_"], "postprocess": function(d,l, reject) {return {Type: "item", ItemType: "input_decl", IODecl: d[0], ParamDecl: null, Statement: null, Location: l};}},
        {"name": "MODULE_ITEM", "symbols": ["OUTPUT_DECL", "_"], "postprocess": function(d,l, reject) {return {Type: "item", ItemType: "output_decl", IODecl: d[0], ParamDecl: null, Statement: null, Location: l};}},
        {"name": "MODULE_ITEM", "symbols": ["PARAMETER_DECL", "_"], "postprocess": function(d,l, reject) {return {Type: "item", ItemType: "parameter_decl", IODecl: null, ParamDecl: d[0], Statement: null, Location: l};}},
        {"name": "MODULE_ITEM", "symbols": ["STATEMENT", "_"], "postprocess": function(d,l, reject) {return {Type: "item", ItemType: "statement", IODecl: null, ParamDecl: null, Statement: d[0], Location: l};}},
        {"name": "INPUT_DECL$ebnf$1", "symbols": ["RANGE"], "postprocess": id},
        {"name": "INPUT_DECL$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "INPUT_DECL", "symbols": ["input", "__", "INPUT_DECL$ebnf$1", "_", "LIST_OF_VARIABLES", "_", {"literal":";"}], "postprocess": function(d) {return {Type: "declaration", DeclarationType: "input", Range: d[2], Variables: d[4]};}},
        {"name": "OUTPUT_DECL$ebnf$1", "symbols": ["RANGE"], "postprocess": id},
        {"name": "OUTPUT_DECL$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "OUTPUT_DECL", "symbols": ["output", "__", "OUTPUT_DECL$ebnf$1", "_", "LIST_OF_VARIABLES", "_", {"literal":";"}], "postprocess": function(d) {return {Type: "declaration", DeclarationType: "output", Range: d[2], Variables: d[4]};}},
        {"name": "LIST_OF_VARIABLES", "symbols": ["NAME_OF_VARIABLE", "_", {"literal":","}, "_", "LIST_OF_VARIABLES"], "postprocess": function(d) {return {Type: "variable_list", Head: d[0], Tail: d[4]};}},
        {"name": "LIST_OF_VARIABLES", "symbols": ["NAME_OF_VARIABLE"], "postprocess": function(d) {return {Type: "variable_list", Head: d[0], Tail: null};}},
        {"name": "NAME_OF_VARIABLE", "symbols": ["IDENTIFIER"], "postprocess": function(d) {return {Type: "variable", Name: d[0]};}},
        {"name": "RANGE", "symbols": [{"literal":"["}, "UNSIGNED_NUMBER", {"literal":":"}, "UNSIGNED_NUMBER", {"literal":"]"}], "postprocess": function(d) {return {Type: "range", Start: d[1], End: d[3]};}},
        {"name": "PARAMETER_DECL", "symbols": ["parameter", "__", "PARAM_ASSIGNMENT", "_", {"literal":";"}], "postprocess": function(d) {return {Type: "declaration", DeclarationType: "parameter", Parameter: d[2]};}},
        {"name": "PARAM_ASSIGNMENT", "symbols": ["IDENTIFIER", "_", {"literal":"="}, "_", "NUMBER"], "postprocess": function(d) {return {Type: "parameter_assignment", Name: d[0], RHS: d[4]};}},
        {"name": "STATEMENT", "symbols": ["assign", "__", "ASSIGNMENT", "_", {"literal":";"}], "postprocess": function(d) {return {Type: "statement", StatementType: "assign", Assignment: d[2]};}},
        {"name": "STATEMENT", "symbols": ["wire", "__", "ASSIGNMENT", "_", {"literal":";"}], "postprocess": function(d) {return {Type: "statement", StatementType: "wire", Assignment: d[2]};}},
        {"name": "ASSIGNMENT", "symbols": ["L_VALUE", "_", {"literal":"="}, "_", "EXPRESSION"], "postprocess": function(d) {return {Type: "assignment", LHS: d[0], RHS: d[4]};}},
        {"name": "L_VALUE", "symbols": ["IDENTIFIER"], "postprocess": function(d) {return {Type: "l_value", PrimaryType: "identifier", BitsStart: null, BitsEnd: null, Primary: d[0]};}},
        {"name": "L_VALUE", "symbols": ["IDENTIFIER", "_", {"literal":"["}, "UNSIGNED_NUMBER", {"literal":"]"}], "postprocess": function(d) {return {Type: "l_value", PrimaryType: "identifier_bit", BitsStart: d[3], BitsEnd: d[3], Primary: d[0]};}},
        {"name": "L_VALUE", "symbols": ["IDENTIFIER", "_", {"literal":"["}, "UNSIGNED_NUMBER", {"literal":":"}, "UNSIGNED_NUMBER", {"literal":"]"}], "postprocess": function(d) {return {Type: "l_value", PrimaryType: "identifier_bits", BitsStart: d[3], BitsEnd: d[5], Primary: d[0]};}},
        {"name": "EXPRESSION", "symbols": ["BITWISE_OR"], "postprocess": id},
        {"name": "BITWISE_OR", "symbols": ["BITWISE_XOR", "_", {"literal":"|"}, "_", "BITWISE_OR"], "postprocess": function(d) {return {Type: "bitwise_OR", Operator:d[2], Head: d[0], Tail: d[4]};}},
        {"name": "BITWISE_OR", "symbols": ["BITWISE_XOR"], "postprocess": id},
        {"name": "BITWISE_XOR", "symbols": ["BITWISE_AND", "_", {"literal":"^"}, "_", "BITWISE_XOR"], "postprocess": function(d) {return {Type: "bitwise_XOR", Operator:d[2], Head: d[0], Tail: d[4]};}},
        {"name": "BITWISE_XOR", "symbols": ["BITWISE_AND"], "postprocess": id},
        {"name": "BITWISE_AND", "symbols": ["ADDITIVE", "_", {"literal":"&"}, "_", "BITWISE_AND"], "postprocess": function(d) {return {Type: "bitwise_AND", Operator:d[2], Head: d[0], Tail: d[4]};}},
        {"name": "BITWISE_AND", "symbols": ["ADDITIVE"], "postprocess": id},
        {"name": "ADDITIVE", "symbols": ["REDUCTION_OR_NEGATION", "_", "ADDITIVE_OPERATOR", "_", "ADDITIVE"], "postprocess": function(d) {return {Type: "additive", Operator:d[2], Head: d[0], Tail: d[4]};}},
        {"name": "ADDITIVE", "symbols": ["REDUCTION_OR_NEGATION"], "postprocess": id},
        {"name": "REDUCTION_OR_NEGATION", "symbols": ["UNARY_OPERATOR", "_", "UNARY"], "postprocess": function(d) {return {Type: "reduction_negation", Operator:d[0][0], Unary: d[2]};}},
        {"name": "REDUCTION_OR_NEGATION", "symbols": ["UNARY"], "postprocess": function(d) {return {Type: "unary", Unary: d[0]};}},
        {"name": "UNARY", "symbols": ["PRIMARY"], "postprocess": function(d) {return {Type: "primary", Primary: d[0], Number: null, Expression: null};}},
        {"name": "UNARY", "symbols": ["NUMBER"], "postprocess": function(d) {return {Type: "number", Primary: null, Number: d[0], Expression: null};}},
        {"name": "UNARY", "symbols": [{"literal":"("}, "_", "BITWISE_OR", "_", {"literal":")"}], "postprocess": function(d) {return {Type: "parenthesis", Primary: null, Number: null, Expression: d[2]};}},
        {"name": "ADDITIVE_OPERATOR", "symbols": [{"literal":"+"}]},
        {"name": "ADDITIVE_OPERATOR", "symbols": [{"literal":"-"}], "postprocess": function(d) {return d[0].join('');}},
        {"name": "BITWISE_OPERATOR", "symbols": [{"literal":"&"}]},
        {"name": "BITWISE_OPERATOR", "symbols": [{"literal":"|"}]},
        {"name": "BITWISE_OPERATOR", "symbols": [{"literal":"^"}]},
        {"name": "BITWISE_OPERATOR$string$1", "symbols": [{"literal":"^"}, {"literal":"~"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BITWISE_OPERATOR", "symbols": ["BITWISE_OPERATOR$string$1"], "postprocess": function(d) {return d[0].join('');}},
        {"name": "UNARY_OPERATOR", "symbols": [{"literal":"!"}]},
        {"name": "UNARY_OPERATOR", "symbols": [{"literal":"~"}]},
        {"name": "UNARY_OPERATOR", "symbols": [{"literal":"&"}]},
        {"name": "UNARY_OPERATOR$string$1", "symbols": [{"literal":"~"}, {"literal":"&"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "UNARY_OPERATOR", "symbols": ["UNARY_OPERATOR$string$1"]},
        {"name": "UNARY_OPERATOR", "symbols": [{"literal":"|"}]},
        {"name": "UNARY_OPERATOR$string$2", "symbols": [{"literal":"~"}, {"literal":"|"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "UNARY_OPERATOR", "symbols": ["UNARY_OPERATOR$string$2"]},
        {"name": "UNARY_OPERATOR", "symbols": [{"literal":"^"}]},
        {"name": "UNARY_OPERATOR$string$3", "symbols": [{"literal":"~"}, {"literal":"^"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "UNARY_OPERATOR", "symbols": ["UNARY_OPERATOR$string$3"], "postprocess": function(d) {return d[0].join('');}},
        {"name": "BINARY_OPERATOR", "symbols": [{"literal":"+"}]},
        {"name": "BINARY_OPERATOR", "symbols": [{"literal":"-"}]},
        {"name": "BINARY_OPERATOR", "symbols": [{"literal":"*"}]},
        {"name": "BINARY_OPERATOR", "symbols": [{"literal":"/"}]},
        {"name": "BINARY_OPERATOR", "symbols": [{"literal":"%"}]},
        {"name": "BINARY_OPERATOR$string$1", "symbols": [{"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BINARY_OPERATOR", "symbols": ["BINARY_OPERATOR$string$1"]},
        {"name": "BINARY_OPERATOR$string$2", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BINARY_OPERATOR", "symbols": ["BINARY_OPERATOR$string$2"]},
        {"name": "BINARY_OPERATOR$string$3", "symbols": [{"literal":"="}, {"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BINARY_OPERATOR", "symbols": ["BINARY_OPERATOR$string$3"]},
        {"name": "BINARY_OPERATOR$string$4", "symbols": [{"literal":"!"}, {"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BINARY_OPERATOR", "symbols": ["BINARY_OPERATOR$string$4"]},
        {"name": "BINARY_OPERATOR$string$5", "symbols": [{"literal":"&"}, {"literal":"&"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BINARY_OPERATOR", "symbols": ["BINARY_OPERATOR$string$5"]},
        {"name": "BINARY_OPERATOR$string$6", "symbols": [{"literal":"|"}, {"literal":"|"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BINARY_OPERATOR", "symbols": ["BINARY_OPERATOR$string$6"]},
        {"name": "BINARY_OPERATOR", "symbols": [{"literal":"<"}]},
        {"name": "BINARY_OPERATOR$string$7", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BINARY_OPERATOR", "symbols": ["BINARY_OPERATOR$string$7"]},
        {"name": "BINARY_OPERATOR", "symbols": [{"literal":">"}]},
        {"name": "BINARY_OPERATOR$string$8", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BINARY_OPERATOR", "symbols": ["BINARY_OPERATOR$string$8"]},
        {"name": "BINARY_OPERATOR", "symbols": [{"literal":"&"}]},
        {"name": "BINARY_OPERATOR", "symbols": [{"literal":"|"}]},
        {"name": "BINARY_OPERATOR", "symbols": [{"literal":"^"}]},
        {"name": "BINARY_OPERATOR$string$9", "symbols": [{"literal":"^"}, {"literal":"~"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BINARY_OPERATOR", "symbols": ["BINARY_OPERATOR$string$9"]},
        {"name": "BINARY_OPERATOR$string$10", "symbols": [{"literal":">"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BINARY_OPERATOR", "symbols": ["BINARY_OPERATOR$string$10"]},
        {"name": "BINARY_OPERATOR$string$11", "symbols": [{"literal":"<"}, {"literal":"<"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BINARY_OPERATOR", "symbols": ["BINARY_OPERATOR$string$11"]},
        {"name": "QUESTION_MARK", "symbols": [{"literal":"?"}]},
        {"name": "PRIMARY", "symbols": ["IDENTIFIER"], "postprocess": function(d) {return {Type: "primary", PrimaryType: "identifier", BitsStart: null, BitsEnd: null, Primary: d[0]};}},
        {"name": "PRIMARY", "symbols": ["IDENTIFIER", "_", {"literal":"["}, "UNSIGNED_NUMBER", {"literal":"]"}], "postprocess": function(d) {return {Type: "primary", PrimaryType: "identifier_bit", BitsStart: d[3], BitsEnd: d[3], Primary: d[0]};}},
        {"name": "PRIMARY", "symbols": ["IDENTIFIER", "_", {"literal":"["}, "UNSIGNED_NUMBER", {"literal":":"}, "UNSIGNED_NUMBER", {"literal":"]"}], "postprocess": function(d) {return {Type: "primary", PrimaryType: "identifier_bits", BitsStart: d[3], BitsEnd: d[5], Primary: d[0]};}},
        {"name": "NUMBER", "symbols": ["UNSIGNED_NUMBER"], "postprocess": function(d) {return {Type: "number", NumberType: "decimal", Bits: null, Base: null, UnsignedNumber: d[0], AllNumber: null};}},
        {"name": "NUMBER$ebnf$1", "symbols": ["UNSIGNED_NUMBER"], "postprocess": id},
        {"name": "NUMBER$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "NUMBER", "symbols": ["NUMBER$ebnf$1", "BASE", "ALL_NUMERIC"], "postprocess": function(d) {return {Type: "number", NumberType: "all", Bits: d[0], Base: d[1][0], UnsignedNumber: null, AllNumber: d[2]};}},
        {"name": "DECIMAL_NUMBER", "symbols": [{"literal":"+"}, "UNSIGNED_NUMBER"], "postprocess": function(d) {return {Type: "decimal", Sign: "+", Value: d[1]};}},
        {"name": "DECIMAL_NUMBER", "symbols": [{"literal":"-"}, "UNSIGNED_NUMBER"], "postprocess": function(d) {return {Type: "decimal", Sign: "+", Value: d[1]};}},
        {"name": "DECIMAL_NUMBER", "symbols": ["UNSIGNED_NUMBER"], "postprocess": id},
        {"name": "UNSIGNED_NUMBER$ebnf$1", "symbols": [/[0-9]/]},
        {"name": "UNSIGNED_NUMBER$ebnf$1", "symbols": ["UNSIGNED_NUMBER$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
        {"name": "UNSIGNED_NUMBER", "symbols": ["UNSIGNED_NUMBER$ebnf$1"], "postprocess": function(d) {return d[0].join('');}},
        {"name": "ALL_NUMERIC$ebnf$1", "symbols": [/[0-9a-fA-F]/]},
        {"name": "ALL_NUMERIC$ebnf$1", "symbols": ["ALL_NUMERIC$ebnf$1", /[0-9a-fA-F]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
        {"name": "ALL_NUMERIC", "symbols": ["ALL_NUMERIC$ebnf$1"], "postprocess": function(d) {return d[0].join('');}},
        {"name": "BASE$string$1", "symbols": [{"literal":"'"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BASE", "symbols": ["BASE$string$1"]},
        {"name": "BASE$string$2", "symbols": [{"literal":"'"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "BASE", "symbols": ["BASE$string$2"], "postprocess": id},
        {"name": "CONCAT", "symbols": ["EXPRESSION", "_", {"literal":","}, "_", "CONCAT"], "postprocess": function(d) {return {Type: "concatenation_list", Head: d[0], Tail: d[4]};}},
        {"name": "CONCAT", "symbols": ["EXPRESSION"], "postprocess": function(d) {return {Type: "concatenation_list", Head: d[0], Tail: null};}},
        {"name": "input$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"p"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "input", "symbols": ["input$string$1"], "postprocess": id},
        {"name": "output$string$1", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"p"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "output", "symbols": ["output$string$1"], "postprocess": id},
        {"name": "parameter$string$1", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "parameter", "symbols": ["parameter$string$1"], "postprocess": id},
        {"name": "assign$string$1", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"g"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "assign", "symbols": ["assign$string$1"], "postprocess": id},
        {"name": "wire$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "wire", "symbols": ["wire$string$1"], "postprocess": id},
        {"name": "endmodule$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"m"}, {"literal":"o"}, {"literal":"d"}, {"literal":"u"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
        {"name": "endmodule", "symbols": ["endmodule$string$1"], "postprocess": id},
        {"name": "IDENTIFIER$ebnf$1", "symbols": []},
        {"name": "IDENTIFIER$ebnf$1", "symbols": ["IDENTIFIER$ebnf$1", /[a-zA-Z_0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
        {"name": "IDENTIFIER", "symbols": [/[a-zA-Z]/, "IDENTIFIER$ebnf$1"], "postprocess": 
            function(d,l, reject) {
                const name = d[0] + d[1].join('');
                if (name === 'if' || name === 'module') {
                    return reject;
                } else {
                    return  name;
                }
            }
            },
        {"name": "_$ebnf$1", "symbols": []},
        {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
        {"name": "_", "symbols": ["_$ebnf$1"]},
        {"name": "__$ebnf$1", "symbols": [/[\s]/]},
        {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
        {"name": "__", "symbols": ["__$ebnf$1"]}
    ]
      , ParserStart: "PROGRAM"
    }
    if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
       module.exports = grammar;
    } else {
       window.grammar = grammar;
    }
    })();
    
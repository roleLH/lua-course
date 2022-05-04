
const TWITTER_MAX_CHAR_COUNT = 280;
const TWITTER_HANDLE = "@codeurdreams";


const RE_STRING_LITERAL = /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`/i;
const RE_LINE_NUMBER = /^\d{1,6}/;
const RE_COMMENT = /(?:rem\s|#)[^\n]*/i;
const RE_NUMERIC_LITERAL_HEX = /(?<![a-z_])0(?:x|X)[0-9a-fA-F]+/;
const RE_NUMERIC_LITERAL_BIN = /(?<![a-z_])0(?:b|B)[01]+/;
const RE_NUMERIC_LITERAL_OCT = /(?<![a-z_])0(?:o|O)[0-7]+/;
const RE_NUMERIC_LITERAL_SCI = /(?:(?<=div|mod|and|or|xor|not)|(?<![a-z_][a-z0-9_]*))(?:[0-9]+\.?[0-9]*|[0-9]*\.?[0-9]+)(?:[eE][+-]?[0-9]+)?(?!\.)/;
const RE_KEYWORD = /(?<![a-z_])(?<![a-z_][0-9]+)(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)/i;
const RE_FUNCTION_NAME = /(?<![a-z_])(?<![a-z_][0-9]+)(?:sin|cos|tan|asin|acos|atan|log|ln|sqrt|round|floor|ceil|abs|asc|bin\$|oct\$|hex\$|bin|oct|hex|len|last|lower\$|upper\$|trim\$|ltrim\$|rtrim\$|chr\$)/i;
const RE_CONSTANT = /(?<![a-z0-9_])(?:pi|e|phi|epoch|random|col|row|key|heading)(?![a-z0-9_])/i;
const RE_OPERATOR = /\+|-|\*|\/|\^|(?<![a-z_])(?:div|mod)(?![a-z_])|&|\||~|;/i;
const RE_COMPARATOR = /!=|<=|>=|=|<|>/i;
const RE_LOGICAL_OPERATOR = /(?<![a-z_])(?<![a-z_][0-9]+)(?:and|or|xor|not)/i;
const RE_IDENTIFIER = /[a-z_][a-z0-9_]*[$%]?/i;
const RE_EXPRESSION_BRACKET = /[()]/;
const RE_LIST_ACCESS_BRACKET = /[\[\]]/;
const RE_PARAMETER_SEPERATOR = /,/;
const RE_STATEMENT_SEPERATOR = /:/;
const RE_WHTIESPACE = /\s+/;

const RE_OR = /|/;

const RE_ALL = new RegExp([
    RE_STRING_LITERAL.source,
    RE_LINE_NUMBER.source,
    RE_COMMENT.source,
    RE_NUMERIC_LITERAL_HEX.source,
    RE_NUMERIC_LITERAL_BIN.source,
    RE_NUMERIC_LITERAL_OCT.source,
    RE_NUMERIC_LITERAL_SCI.source,
    RE_KEYWORD.source,
    RE_FUNCTION_NAME.source,
    RE_CONSTANT.source,
    RE_OPERATOR.source,
    RE_COMPARATOR.source,
    RE_LOGICAL_OPERATOR.source,
    RE_IDENTIFIER.source,
    RE_EXPRESSION_BRACKET.source,
    RE_LIST_ACCESS_BRACKET.source,
    RE_PARAMETER_SEPERATOR.source,
    RE_STATEMENT_SEPERATOR.source,
    RE_WHTIESPACE.source
].join(RE_OR.source), "gi");

const KEYWORD_COLOURS = {
    "and": {background: "blue", foreground: "white"},
    "break": {background: "blue", foreground: "white"},
    "do": {background: "blue", foreground: "white"},
    "else": {background: "blue", foreground: "white"},
    "elseif": {background: "blue", foreground: "white"},
    "end": {background: "blue", foreground: "white"},
    "false": {background: "blue", foreground: "white"},
    "for": {background: "blue", foreground: "white"},
    "function": {background: "blue", foreground: "white"},
    "goto": {background: "blue", foreground: "white"},
    "if": {background: "blue", foreground: "white"},
    "in": {background: "blue", foreground: "white"},
    "local": {background: "blue", foreground: "white"},
    "nil": {background: "blue", foreground: "white"},
    "not": {background: "blue", foreground: "white"},
    "or": {background: "blue", foreground: "white"},
    "repeat": {background: "blue", foreground: "white"},
    "return": {background: "blue", foreground: "white"},
    "true": {background: "blue", foreground: "white"},
    "until": {background: "blue", foreground: "white"},
    "while": {background: "blue", foreground: "white"},
    "print": {background: "blue", foreground: "white"},
    
};

const ESCAPE_CHARS = {
    "'": "'",
    "\"": "\"",
    "`": "`",
    "\\": "\\",
    "n": "\n",
    "r": "\r",
    "t": "\t",
    "v": "\v",
    "b": "\b",
    "f": "\f"
};
// function renderDocumentationSyntaxHighlighting(code) {
//     var element = document.createElement("div");
//     var match;

//     function addHighlight(classes, code) {
//         var highlight = document.createElement("span");

//         classes.forEach((i) => highlight.classList.add(i));

//         highlight.textContent = code;

//         element.appendChild(highlight);
//     }

//     var bracketLevel = 0;

//     while (match = RE_ALL.exec(code)) {

//         if (RE_STRING_LITERAL.exec(match)) {
//             addHighlight(["stringLiteral"], match[0]);
//         } else if (RE_COMMENT.exec(match)) {
//             addHighlight(["comment"], match[0]);
//         } else if (RE_KEYWORD.exec(match)) {
//             var keyword = match.toString().toLocaleLowerCase();

//             addHighlight(["keyword", KEYWORD_COLOURS[keyword].background], match[0]);
//         } else if (
//             RE_NUMERIC_LITERAL_HEX.exec(match) ||
//             RE_NUMERIC_LITERAL_BIN.exec(match) ||
//             RE_NUMERIC_LITERAL_OCT.exec(match) ||
//             RE_NUMERIC_LITERAL_SCI.exec(match)
//         ) {
//             addHighlight(["other"], match[0]);
//         } else if (RE_FUNCTION_NAME.exec(match)) {
//             addHighlight(["function"], match[0]);
//         } else if (RE_CONSTANT.exec(match)) {
//             addHighlight(["constant"], match[0]);
//         } else if (RE_EXPRESSION_BRACKET.exec(match)) {
//             if (match == "(") {
//                 bracketLevel++;
//             }

//             if (bracketLevel > 0) {
//                 addHighlight(["bracket", `bracket${Math.min(bracketLevel, 3)}`], match[0]);
//             } else {
//                 addHighlight(["badBracket"], match[0]);
//             }

//             if (match == ")") {
//                 bracketLevel--;
//             }
//         } else if (RE_LIST_ACCESS_BRACKET.exec(match)) {
//             addHighlight(["listAccess"], match[0]);
//         } else if (RE_OPERATOR.exec(match)) {
//             addHighlight(["operator"], match[0]);
//         } else if (RE_COMPARATOR.exec(match) || RE_LOGICAL_OPERATOR.exec(match)) {
//             addHighlight(["comparator"], match[0]);
//         } else if (RE_STATEMENT_SEPERATOR.exec(match)) {
//             addHighlight(["statementSeperator"], match[0]);
//         } else {
//             addHighlight(["other"], match[0]);
//         }
//     }

//     return element.innerHTML;
// }

function renderDocumentationSyntaxHighlighting(code) {
    
}

/**
 * 
 * @param {String} path 
 * @param {HTMLElement} parentNode 
 */
function visitDocumentation(path, parentNode) {
    path = path.replace(/^docs\/\//g, "docs/");
    
    fetch(path).then(function(response) {
        return response.text();
    }).then(function(data) {
        var converter = new showdown.Converter();
        let doc = new DocumentFragment();
        
        let container = document.createElement("div");
        container.innerHTML = converter.makeHtml(data);
        doc.appendChild(container);

        doc.querySelectorAll("a").forEach(function(element) {
            var destination = element.getAttribute("href") || "";

            if (destination.startsWith("http://") || destination.startsWith("https://") || destination.startsWith("./") || destination.startsWith("javascript:") || destination.startsWith("#")) {
                return;
            }
            element.onclick = (e) => {
                parentNode.removeChild(container);
                visitDocumentation("docs/" + destination, parentNode);
            }
            element.setAttribute("href", `javascript:void(0)`);
        });

        doc.querySelectorAll("code").forEach(function(element) {
            // var code = element.textContent;
        
            // element.innerHTML = renderDocumentationSyntaxHighlighting(code);

            // if (element.textContent != code) {
            //     element.textContent = code; // Fallback
            // }
            let hljs = window.hljs || hljs;
            hljs.highlightElement(element)
        });
        parentNode.appendChild(doc)
    });
}

export default visitDocumentation;


const {User} = require('./../models/user');
const {app} = require('./index');

const calculation = (x) => {
    const conference_desc = ['ranked', 'particular', 'applications', 'Autonomic', 'obvious', 'URL', 'DMSVIVA2018', 'attention',
    'content', 'Research', 'challenging', 'Lattice', 'transference', 'describing', 'decade', 'pre', 'investigating', 'Conceptual',
    'aims', 'December', 'raise', 'Manuscript', 'around', 'Mobile', 'learning', 'confused', 'Please', 'Memory', 'sets', 'restricted',
    'Here', 'Special', 'Thirtieth', 'must', 'Reengineering', 'approaches', 'papers', 'electronic', 'seminal', 'published', 'System', 
    'computing', 'Comparative', 'dedicated', 'early', 'subject', 'Intelligence', 'date', 'Modularity', 'mining', 'Topics', 'researchers',
    'involving', 'session', 'Methodologies', 'algebraic', 'Francisco', 'fuzzy', 'Call', 'An', 'Dekel', 'Analysis', 'two', 'format', 
    'Tilley', 'great', 'January', 'wish', 'developed', 'conference','novel', 'together', 'areas', 'year', 'SOA', 'representations', 'Hotel',
    'include', 'Proceedings', 'questions', 'Emergent', 'concepts', 'Data', 'status', 'These', 'thinker', 'Dedekind', 'working', 'mathematician',
    'Internet', 'Lindig', 'analyze', 'USA', 'using', 'Service', 'rate', 'focus', 'condition', 'modularity', 'initiative', 'overviews', 'work', 
    'Session', 'bring', 'originality', 'additional', 'sessions', 'provide', 'abstract', 'Submission', 'obtained', 'monograph', 'Modular',
    'dissemination', 'practitioners', 'publication', 'emphasize', 'conjunction', 'Recently', 'considered', 'results', 'put', 'Some', 'authors', 
    'Zadeh', 'also', 'FCA', 'Word', 'super', 'field', 'Engineering', 'The', 'intriguing', 'Pullman', 'bioinformatics', 'size', 'Study', 'discussions',
    'hand', 'innumerable', 'giant', 'relevant', 'studied', 'Bay', 'contributed', 'demos', 'others', 'experimental', 'Garrett', 'Production', 
    'diverse', 'surprising', 'Researchers', 'Artificial', 'They', 'selected', 'MS', 'code', 'not', 'paper','exclude', 'one', 'Laplacian',
    'compared', 'innovative', 'Lattices', 'sized', 'formatted', 'Journal', 'within', 'column', 'website', 'Smart', 'submitted', 'issues',
    'browser', 'Arévalo', 'system', 'It','lectures', 'accepted', 'SEKE2018', 'bringing', 'systems', 'Best', 'Postscript', 'Conferences',
    'engineering', 'Papers', 'This', 'enable', 'memory', 'specification', 'ontologies', 'Oriented', 'balance','Mens', 'used', 'soft',
    'acceptance', 'analytics', 'pioneer', 'Lofti', 'submit', 'IJSEKE', 'ontology', 'perform', 'invited', 'lost', 'variety', 'open', 'viz', 
    'full', 'form', 'written', 'copyright', 'LATTICE', 'conceptual', 'interesting', 'area', 'extensively', 'especially', 'Conference', 'high', 
    'welcome', 'Perspectives', 'knowledge', 'issue', 'will', 'Quality', 'International', 'no', 'audience', 'Professor', 'Issue', 'Knowledge',
    'SEKE', 'Explorer', 'references', 'Formal', 'For', 'Recent', 'relationships', 'Then', 'domains', 'specific', 'theories', 'example', 'besides', 
    'end', 'average', 'options', 'Models', 'Kuipers', 'lattices', 'kinds', 'crowds', 'part', 'Snelting', 'use', 'including', 'Novel', 'Code', 'pdf',
    'review', 'aspects', 'title', 'research', 'upon', 'appeared', 'structures', 'either', 'version', 'San', 'chosen', 'Theory', 'methods', 'topics',
    'quality', 'g', 'algebra', 'purpose', 'emphasis', 'Rudolf', 'theme', 'legacy', 'figures', 'modern', 'Techniques', 'data', 'fields', 'following', 
    'theory', 'English', 'onwards', 'KSI', 'presented', 'special', 'Concept', 'City', 'agent', 'inspection', 'held', 'gets', 'American', 'e', 'pages', 
    'Godin', 'enabling', 'Systems', 'July', 'Birkhoff', 'submission', 'led', 'Sessions', 'current', 'Applications', 'Redwood', 'reengineer', 
    'Software', 'many', 'among', 'Relationships', 'German', 'still', 'Security', 'mobile', 'Richard', 'experts', 'aim', 'word', 'non', 'modeling', 
    'researcher', 'Between', 'Wille', 'based', 'In', 'matrices', 'substantially', 'first', 'lively', 'different', 'application', 'Processing',
    'medium', 'discuss', 'Principles', 'fosters', 'annually', 'software', 'offers', 'education', 'revised']

    const stop_words = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "as",
    "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "could",
    "did", "do", "does", "doing", "down", "during", "each", "few", "for", "from", "further", "had", "has",
    "have", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him",
    "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "it",
    "it's", "its", "itself", "let's", "me", "more", "most", "my", "myself", "nor", "of", "on", "once",
    "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "she",
    "she'd", "she'll", "she's", "should", "so", "some", "such", "than", "that", "that's", "the", "their",
    "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll",
    "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was",
    "we", "we'd", "we'll", "we're", "we've", "were", "what", "what's", "when", "when's", "where",
    "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "would", "you", "you'd",
    "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"]

    for(let i = 0; i < x.length; i++){
        user_desc = Object.values(x[i])[3].user_description.split(' ');
        user_desc = user_desc.filter(v => stop_words.indexOf(v) < 0)
        if(user_desc.length != 0){
            let user_desc_len = user_desc.length;
            let user_desc_matched_words_len = user_desc.filter(v => conference_desc.indexOf(v) < 0).length;
            let user_desc_mismatched_words_len = user_desc_len - user_desc_matched_words_len;
    
            let classic_match_score = user_desc_matched_words_len / user_desc_len;
            let interestingness_score = 4 * ((user_desc_matched_words_len * user_desc_mismatched_words_len) / (user_desc_len * user_desc_len)); // normalize to bounderies of 0 to 1
            console.log(classic_match_score.toFixed(3),  interestingness_score.toFixed(3))
        }
    }
}

let init = () => {
    app.get("/api/everyone", function (request, response) {
        User.find(
            {}, 
            {"user_description": 1, "clicked": 1}
        , function (err, x) {
            if (x) {
                calculation(x);
                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not succeed");
            }
        });
    });

    app.get("/api/clicked", function (request, response) {
        User.find(
            {clicked: true}, 
            {"user_description": 1, "clicked": 1}
        , function (err, x) {
            if (x) {
                // calculation(x);
                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not succeed");
            }
        });
    });

    app.get("/api/notClicked", function (request, response) {
        User.find(
            {clicked: false}, 
            {"user_description": 1, "clicked": 1}
        , function (err, x) {
            if (x) {
                console.log(x.length)
                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not succeed");
            }
        });
    });
}


module.exports = {
    init
}